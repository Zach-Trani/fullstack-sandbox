const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});