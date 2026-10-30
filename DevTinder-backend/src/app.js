const express = require('express');

const app = express();

// req / user , / user / xyz
// Route handler or controller
/* app.get("/user/:userId/:name/:password", (req, res) => {
    console.log("Route params:", req.params);
    res.send({
        firstName: "Sai Krishna Kireeti",
        lastName: "Komaragiri"
    });
}); */

app.use("/user", (req, res, next) => {
    // res.send("Route Handler 1");
    console.log("Handling the route user !!");
    next();
    res.send("Response!!");
},
    (req, res, next) => {
        console.log("Handling the route user2 !!");
        next();
        //res.send("2nd Response!!");
    },
    (req, res) => {
        console.log("Handling the route user2 !!");
        // res.send("3rd Response!!");
        next();
    }
)

app.listen(7777, () => {
    console.log('Server is successfully listening on port 7777');
});