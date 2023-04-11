import express from 'express';

const maxBodySize = process.env.PROXY_MAX_BODY_SIZE || '32mb';

const server = express();

server.use(express.json({
    strict: false,
    limit: maxBodySize
}));

export default server;
