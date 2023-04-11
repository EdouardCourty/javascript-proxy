import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

const axiosInstance = axios.create({
    httpsAgent: httpsAgent
});

export default axiosInstance;
