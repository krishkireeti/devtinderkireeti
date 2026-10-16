const express = require('express');

const app = express();

/* app.use("/user", (req, res) => {
    res.send("HAHAHAHAH");
}) */

// This will only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Sai Krishna", lastName: "Kireeti", })
});

app.post("/user", (req, res) => {
    res.send("Data saved successfully to the database!");
});

app.delete("/user", (req, res) => {
    res.send("Data deleted successfully");
});

// This will match all the HTTP method API calls to /test
app.use('/test', (req, res) => {
    res.send('Hello from the test server');
});

app.listen(7777, () => {
    console.log('Server is successfully listening on port 7777');
});