const express = require('express');

const app = express();

app.use('/test', (req, res) => {
    res.send('Hello from the test server');
});

app.use('/hello/2', (req, res) => {
    res.send('Abracadabra!');
});

app.use('/hello', (req, res) => {
    res.send('Hello Hello Hello!');
});

app.use('/dashboard', (req, res) => {
    res.send('Hello from dashboard!');
});

app.use('/', (req, res) => {
    res.send('Namaste Kireeti');
});


app.listen(7777, () => {
    console.log('Server is successfully listening on port 7777');
});