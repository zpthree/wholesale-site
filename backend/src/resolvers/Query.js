const Query = {
  async product(parent, { id }, { db }, info) {
    const product = await db.query.product({ where: { id } }, info);

    if (!product) {
      throw new Error('Product not found.');
    }

    return product;
  },
  products(parent, { query }, { db }, info) {
    if (!query) {
      return db.query.products({}, info);
    }

    return db.query.products({ where: { title_contains: query } }, info);
  },
  department(parent, { department }, { db }, info) {
    return db.query.products({ where: { department } }, info);
  },
  async user(parent, { id }, { db }, info) {
    const user = await db.query.user({ where: { id } });

    if (!user) {
      throw new Error('User not found.');
    }

    return user;
  },
  async users(parent, { query }, { db }, info) {
    if (!query) {
      return db.query.users({}, info);
    }

    const users = await db.query.users({
      where: {
        OR: [
          { firstName_contains: query },
          { lastName_contains: query },
          { username_contains: query },
        ],
      },
    });

    return users;
  },
};

module.exports = Query;
