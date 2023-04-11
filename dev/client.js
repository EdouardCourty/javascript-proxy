import axios from '../src/axios.js';

const ROUTE = 'a.4cdn.org/boards.json';

const USE_HTTPS = true;

const proxyOptions = {
    host: 'localhost',
    port: USE_HTTPS ? 2552 : 2551
};
const url = (USE_HTTPS ? 'https://' : 'http://') + ROUTE;

axios.get(url, {
    proxy: proxyOptions,
    headers: {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
    }
}).then((response) => {
    console.log(response.data);
    console.log(response.status);
}).catch((error) => {
    const response = error.response;

    console.error(error.response.data);
    console.log(response.status);

});
