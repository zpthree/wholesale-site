const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils');

const Mutation = {
  async signIn(parent, { username, password }, ctx, info) {
    // check for user with username
    const user = await ctx.db.query.user({ where: { username } });
    if (!user) {
      throw new Error(`No user found with username ${username}.`);
    }

    // check that password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password.');
    }

    // generate jwt token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // set cookie with token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });

    return user;
  },
  signOut(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },
  async requestReset(parent, args, ctx, info) {
    // check if user exists
    const user = await ctx.db.query.user({
      where: { email: args.email },
    });

    if (!user) {
      throw new Error(`No user found with email ${email}`);
    }

    // set reset token and expiry on user
    const resetToken = (await promisify(randomBytes)(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });

    // email reset token to user
    const mailRes = await transport.sendMail({
      from: 'zach@zachpatrick.com',
      to: user.email,
      subject: 'Your password reset token.',
      html: makeANiceEmail(
        `You Password Reset Token is here! \n\n <a href="${
          process.env.FRONTEND_URL
        }/reset-password?resetToken=${resetToken}">Click here to reset your password</a>`
      ),
    });

    return { message: 'Thanks!' };
  },
  async resetPassword(parent, args, ctx, info) {
    // check if passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error('Passwords do not match.');
    }

    // check if it's a legit reset token and make sure it's not expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000,
      },
    });

    if (!user) {
      throw new Error('This token is either invalid or expired.');
    }

    // hash the new password
    const password = await bcrypt.hash(args.password, 10);

    // save the new password to the new user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    // generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

    // set JWT cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });

    // return new user
    return updatedUser;
  },
  async createItem(parent, { data }, { db, request }, info) {
    if (!request.userId) {
      throw new Error('You must be logged in to create an item');
    }

    hasPermission(request.user, 'ADMIN');

    console.log('creating...', data);

    const item = await db.mutation.createItem(
      {
        data: {
          ...data,
        },
      },
      info
    );

    return item;
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, '{ id title }');

    if (!item) {
      throw new Error('Item not found.');
    }

    // TODO: check permissions before deleting item
    // -- throw error if not permitted to delete

    return ctx.db.mutation.deleteItem({ where }, info);
  },
  async updateItem(parent, { id, data }, { db }, info) {
    const itemExists = await db.exists.Item({ id });

    if (!itemExists) {
      throw new Error('Item not found.');
    }

    delete data.id;

    return db.mutation.updateItem(
      {
        data,
        where: { id },
      },
      info
    );
  },
  async createUser(parent, args, { db }, info) {
    const { data } = args;

    // TODO: check that email and username doesn't already exist

    data.email = data.email.toLowerCase();
    const password = await bcrypt.hash(data.password, 10);

    const user = await db.mutation.createUser(
      {
        data: {
          ...data,
          password,
          permissions: data.permissions,
          active: true,
        },
      },
      info
    );

    return user;
  },
  async deleteUser(parent, { id }, { db }, info) {
    const user = await db.query.users({ where: { id } }, info);

    if (!user) {
      throw new Error('User not found.');
    }

    // TODO: check that user has permissions to delete user

    return db.mutation.deleteUser({ where: { id } }, info);
  },
  async updateUser(parent, { id, data }, { db }, info) {
    const userExists = await db.exists.User({ id });

    if (!userExists) {
      throw new Error('User not found.');
    }

    // TODO: verify that user has permission to update specific fields (canOrder, permissions, etc.)

    // TODO: validate email
    // TODO: check that email doesn't already exist

    // TODO: encrypt password

    delete data.id;

    return db.mutation.updateUser(
      {
        data,
        where: { id },
      },
      info
    );
  },
  updatePermissions(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in.');
    }

    hasPermission(ctx.request.user, 'ADMIN');

    return ctx.db.mutation.updateUser(
      {
        data: {
          canOrder: args.canOrder,
          permissions: args.permissions,
        },
        where: { id: args.userId },
      },
      info
    );
  },
  async addToCart(parent, args, ctx, info) {
    // make sure user is signed in
    const { userId } = ctx.request;

    if (!userId) {
      throw new Error('You must be logged in.');
    }
    // query users current cart
    const [existingCartItem] = await ctx.db.query.cartItems(
      {
        where: {
          user: { id: userId },
          item: { id: args.id },
        },
      },
      info
    );

    // check if item is already in the cart and add quantity if it is
    if (existingCartItem) {
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: {
            quantity: existingCartItem.quantity + args.quantity,
          },
        },
        info
      );
    }
    // if it's not, create a fresh cartItem for that user
    return ctx.db.mutation.createCartItem(
      {
        data: {
          quantity: args.quantity,
          user: { connect: { id: userId } },
          item: { connect: { id: args.id } },
        },
      },
      info
    );
  },
  async removeFromCart(parent, args, ctx, info) {
    // find cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },
      `{id, user { id }}`
    );

    if (!cartItem) throw new Error('No Cart Item found');
    // make sure user owns cart item or is admin
    if (
      cartItem.userId !== ctx.request.userId &&
      ctx.request.user.permissions !== 'ADMIN'
    ) {
      throw new Error("You're not allowed to do that.");
    }
    // delete cart item
    return ctx.db.mutation.deleteCartItem(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
  async createInvoice(parent, args, ctx, info) {
    // query the current user and make sure they are signed in
    const { userId } = await ctx.request;

    if (!userId) {
      throw new Error('You must be signed in to complete this order.');
    }

    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
      id
      firstName
      lastName
      email
      username
      cart {
        id
        quantity
        item {
          department
          barcode
          brand
          title
          unitsPerCase
          size
          uom
          expiry
          image
          largeImage
          cases
          price          
        }
      }
    }`
    );

    // recalculate total for the price - cause hackers
    const amount = user.cart.reduce((tally, cartItem) => {
      return tally + cartItem.item.price * cartItem.quantity;
    }, 0);

    // create the invoice
    const invoiceItems = user.cart.map(cartItem => {
      const invoiceItem = {
        cases: cartItem.quantity,
        user: { connect: { id: userId } },
        ...cartItem.item,
      };
      delete invoiceItem.id;

      return invoiceItem;
    });

    // TODO: if there's already an open invoice update the open one instead of creating a new one

    // clear the users cart
    const invoice = await ctx.db.mutation.createInvoice({
      data: {
        total: amount,
        items: { create: invoiceItems },
        user: { connect: { id: userId } },
        status: 'DRAFT',
      },
    });

    // delete cartItems
    const cartItemIds = user.cart.map(cartItem => cartItem.id);

    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds,
      },
    });

    // return the order to the client
    return invoice;
  },
};

module.exports = Mutation;
