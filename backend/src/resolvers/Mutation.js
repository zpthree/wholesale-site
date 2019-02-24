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
  async deleteItem(parent, { id }, { db }, info) {
    const item = await db.query.item({ where: { id } }, '{ id }');

    if (!item) {
      throw new Error('Item not found.');
    }

    // TODO: check permissions before deleting item
    // -- throw error if not permitted to delete

    return db.mutation.deleteItem({ where: { id } }, info);
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
};

module.exports = Mutation;
