const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutation = {
  async createItem(parent, { data }, { db }, info) {
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
};

module.exports = Mutation;
