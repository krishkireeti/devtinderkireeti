const express = require('express');

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

// req / user , / user / xyz
// Route handler or controller
/* app.get("/user/:userId/:name/:password", (req, res) => {
    console.log("Route params:", req.params);
    res.send({
        firstName: "Sai Krishna Kireeti",
        lastName: "Komaragiri"
    });
}); */

/* app.use("/user", (req, res, next) => {
    res.send("Route Handler 1");
    console.log("Handling the route user !!");
    next();
    // res.send("Response!!");
}) */

/* app.use("/user", (req, res, next) => {
    // res.send("Route Handler 1");
    console.log("Handling the route user 2!!");
    next();
    res.send("2nd Route Handler");
})
 
app.use("/", (req, res) => {
    res.send("Handling / route");
}); */

// Handle auth middleware for all GET, POST, ... requests

app.get("/admin", adminAuth);

app.post("/user/login", (req, res) => {
    res.send("User logged in successfully");
});

app.get("/user/data", userAuth, (req, res) => {
    res.send("User Data sent");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});

app.listen(7777, () => {
    console.log('Server is successfully listening on port 7777');
});