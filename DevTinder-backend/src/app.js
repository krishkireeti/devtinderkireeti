const express = require('express');

const app = express();

app.use('/test', (req, res) => {
    res.send('Hello from the test server');
});

app.use('/hello', (req, res) => {
    res.send('Hello Hello Hello!');
});

app.use('/dashboard', (req, res) => {
    res.send('Hello from dashboard!');
});

app.use('/', (req, res) => {
    res.send('Hello from root server');
});


app.listen(7777, () => {
    console.log('Server is successfully listening on port 7777');
});