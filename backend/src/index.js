const cookieParser = require('cookie-parser');
require('dotenv').config();
const db = require('./db');
const createServer = require('./createServer');

const server = createServer();

server.express.use(cookieParser());
//TODO: Use express middleware to populate current user

server.start(
  {
    port: 8000,
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  ({ port }) =>
    console.log(`server is running on port http://localhost:${port}`)
);
