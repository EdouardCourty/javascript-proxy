import express from 'express';

import authenticate from '../middleware/ProxyAuthentication.js';

const maxBodySize = process.env.PROXY_MAX_BODY_SIZE || '32mb';

const server = express();

server.use(express.json({
    strict: false,
    limit: maxBodySize
}));

server.use(authenticate());

export default server;
