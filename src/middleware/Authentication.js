import Base64 from '../service/Base64.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const AUTHENTICATION_HEADER = 'proxy-authorization';
const UNAUTHORIZED_RESPONSE_CODE = 400;

const proxyUsername = process.env.PROXY_USERNAME;
const proxyPassword = process.env.PROXY_PASSWORD;

/**
 * @returns {(function(Object, Object, Function): void)|*}
 */
const authenticate = () => {
    return (req, res, next) => {
        if (req.headers.hasOwnProperty(AUTHENTICATION_HEADER) === false) {
            res.status(UNAUTHORIZED_RESPONSE_CODE).send('Authentication required.');
            return
        }

        const authorizationContent = req.headers[AUTHENTICATION_HEADER].split(/\s/).pop();
        const decoded = Base64.decodeBase64(authorizationContent);

        const [username, password] = decoded.split(':');

        if (username !== proxyUsername && password !== proxyPassword) {
            res.status(UNAUTHORIZED_RESPONSE_CODE).send('Authentication failed.');
            return;
        }

        next();
    };
};

export default authenticate;
