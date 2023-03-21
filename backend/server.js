const express = require('express');
const app = express();
const port = 4000;

app.get('/express_backend', (req, res) => {
    res.send({ express: 'hello world' });
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});