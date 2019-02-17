const Query = {
  async item(parent, { id }, { db }, info) {
    const item = await db.query.item({ where: { id } }, info);

    if (!item) {
      throw new Error('item not found.');
    }

    return item;
  },
  items(parent, { query }, { db }, info) {
    if (!query) {
      return db.query.items({}, info);
    }

    return db.query.items({ where: { title_contains: query } }, info);
  },
  department(parent, { department }, { db }, info) {
    return db.query.items({ where: { department } }, info);
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
