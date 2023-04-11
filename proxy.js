import dotenv from 'dotenv';

import fs from 'fs';
import https from 'https';

import axios from './src/axios.js';
import server from './src/server.js';

dotenv.config({
    path: './.env'
});

const serverOptions = {
    key: fs.readFileSync('./keys/privateKey.pem'),
    cert: fs.readFileSync('./keys/certificate.pem')
};

const proxyHttpPort = process.env.PROXY_HTTP_PORT || 3000;
const proxyHttpsPort = process.env.PROXY_HTTPS_PORT || 3000;

server.all('*', async (req, res, next) => {
    const { url, method, headers, body } = req;

    axios({
        url,
        headers,
        method,
        body
    }).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        const response = error.response;

        if (!!response === false) {
            res.status(404).end();
            return;
        }

        res.status(response.status).send(response.data)
    });
});

// HTTP Server
server.listen(proxyHttpPort, () => {
    console.log(`HTTP proxy running on port ${proxyHttpPort}`);
});

// HTTPS Server
// Make sure to run make generate-ssl-certificate before launching the proxy.
https.createServer(serverOptions, server).listen(proxyHttpsPort, () => {
    console.log(`HTTPS proxy running on port ${proxyHttpsPort}`);
});
