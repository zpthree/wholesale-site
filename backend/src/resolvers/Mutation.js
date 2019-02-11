const uuidv4 = require('uuid/v4');

const Mutation = {
  async createProduct(parent, { data }, { db }, info) {
    const product = await db.mutation.createProduct(
      {
        data: {
          ...data,
        },
      },
      info
    );

    return product;
  },
  async deleteProduct(parent, { id }, { db }, info) {
    const product = await db.query.products({ where: { id } }, '{ id }');

    if (!product) {
      throw new Error('Product not found.');
    }

    // TODO: check permissions before deleting item
    // -- throw error if not permitted to delete

    return db.mutation.deleteProduct({ where: { id } }, info);
  },
  async updateProduct(parent, { id, data }, { db }, info) {
    const productExists = await db.exists.Product({ id });

    if (!productExists) {
      throw new Error('Product not found.');
    }

    delete data.id;

    return db.mutation.updateProduct(
      {
        data,
        where: { id },
      },
      info
    );
  },
  async createUser(parent, { data }, { db }, info) {
    const user = await db.mutation.createUser(
      {
        ...data,
        active: true,
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
