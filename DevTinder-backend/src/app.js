const express = require('express');

const app = express();

app.use("/", (err, req, res, next) => {
    if (err) {
        // Log your error message
        res.status(500).send("Something went wrong");
    }
});

app.get("/getuserData", (req, res) => {

    // Logic of DB call and get user data
    throw new Error("dvbhicf");
    res.send("User Data sent");
    /* try {
       
    } */
    /* catch (err) {
        res.status(500).send("Some Error contact support team");
    } */
});

app.use("/", (err, req, res, next) => {
    if (err) {
        // Log your error message
        res.status(500).send("Something went wrong");
    }
});

app.listen(7777, () => {
    console.log('Server is successfully listening on port 7777');
});