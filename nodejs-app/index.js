const express = require('express');
const app = express();
const portNum = 4000;

app.use('*', (req, res, next) => {
    res.send('<h1>Hello from Node app</h1>');
})

app.listen(portNum, () => {
    console.log('App listening on port: ' + portNum);
})