const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  item: forwardTo('db'),
  items: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
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
  async users(parent, { query }, { db, request }, info) {
    if (!request.userId) {
      throw new Error('You must be logged in.');
    }

    hasPermission(request.user, 'ADMIN');

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
