import dotenv from 'dotenv';

import fs from 'fs';
import https from 'https';

import server from './src/service/Server.js';
import mainRouter from './src/router/MainRouter.js';

dotenv.config({ path: './.env' });

const serverOptions = {
    key: fs.readFileSync('./keys/privateKey.pem'),
    cert: fs.readFileSync('./keys/certificate.pem')
};

const proxyHttpPort = process.env.PROXY_HTTP_PORT || 3000;
const proxyHttpsPort = process.env.PROXY_HTTPS_PORT || 3000;

server.use(mainRouter);

// HTTP Server
server.listen(proxyHttpPort, () => {
    console.log(`HTTP proxy running on port ${proxyHttpPort}`);
});

// HTTPS Server
// Make sure to run make generate-ssl-certificate before launching the proxy.
https.createServer(serverOptions, server).listen(proxyHttpsPort, () => {
    console.log(`HTTPS proxy running on port ${proxyHttpsPort}`);
});
