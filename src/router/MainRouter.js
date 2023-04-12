import Router from 'express';
import axios from "../service/Axios.js";

const router = new Router();

router.all('*', async (req, res, next) => {
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

export default router;
