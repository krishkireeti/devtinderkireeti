const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');

app.use(express.json());

// Since it returns a promise, we use async and await
app.post("/signup", async (req, res) => {
    // Creating a new instance of the User model
    const user = new User(req.body);

    try {
        await user.save();
        res.send("User Added Successfully");
    }
    catch (err) {
        res.status(400).send('Error saving the user: ' + err.message);
    }

    // console.log(req.body);
})

connectDB().then(() => {
    console.log("Database connection established...");
}).catch(err => {
    console.error("Database cannot be connected!!");
})

app.listen(7777, () => {
    console.log('Server is successfully listening on port 7777');
});