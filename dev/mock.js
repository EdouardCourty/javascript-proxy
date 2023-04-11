import express from 'express';

const mock = express();

mock.all('*', (req, res) => {
    const { url, method, headers, body, ip } = req;

    if (!!req.query.code === true) {
        res.status(parseInt(req.query.code));
    }

    res.send({
        url, method, headers, body, ip
    });
});

mock.listen(3500, () => {
    console.log('Mock listening on http://localhost:3500');
});
