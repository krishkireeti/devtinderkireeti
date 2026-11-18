const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');
const { validateSignUpData } = require('./utils/validation');
const bcrypt = require("bcrypt");
const validator = require("validator");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());

// Since it returns a promise, we use async and await
app.post("/signup", async (req, res) => {
    try {
        // Validation of data
        validateSignUpData(req);

        const { firstName, lastName, emailId, password } = req.body;

        // Encrypt the password
        // Since it will return a promise, await has been added
        const passwordHash = await bcrypt.hash(password, 10);

        // Creating a new instance of the User model
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash
        });

        await user.save();
        res.send("User Added Successfully");
    }
    catch (err) {
        res.status(400).send('ERROR : ' + err.message);
    }

});

app.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;

        if (!validator.isEmail(emailId)) {
            throw new Error("Invalid credentials");
        }

        const user = await User.findOne({ emailId: emailId });

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {

            // Create a JWT token

            const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$790");

            // Add the token to cookie and send the response back to the user
            res.cookie("token", token);
            res.send("Login Successful!!!");
        }
        else {
            throw new Error("Invalid credentials");
        }
    }
    catch (err) {
        res.status(400).send("ERROR : " + err.message);
    }
});

app.get("/profile", async (req, res) => {
    try {
        const cookies = req.cookies;

        const { token } = cookies;
        // Validate my token

        if (!token) {
            throw new Error("Invalid token");
        }

        const decodedMessage = await jwt.verify(token, "DEV@Tinder$790");

        console.log(decodedMessage);

        const { _id } = decodedMessage;

        const user = await User.findById(_id);

        if (!user) {
            throw new Error("User does not exist");
        }

        // console.log(cookies);
        res.send(user);
    }
    catch (err) {
        res.status(400).send("ERROR : " + err.message);
    }
});

// Get user by email
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    // const userId = req.body.userId;

    try {
        const user = await User.findOne({ emailId: userEmail });
        // const user = await User.findById(userId);
        if (!user) {
            res.status(404).send("User not found");
        }
        else {
            res.send(user);
        }

        /*  const users = await User.find({ emailId: userEmail });
         if (users.length === 0) {
             res.status(404).send("User not found");
         }
         else {
             res.send(users);
         } */
    }
    catch (err) {
        res.status(400).send("Something went wrong");
    }
});

// Feed API - GET /feed - get all the users from the database

app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    }
    catch (err) {
        res.status(400).send("Something went wrong");
    }
});

// Delete a user from the database
app.delete("/user", async (req, res) => {
    const userId = req.body.userId;

    try {
        //const user = await User.findByIdAndDelete({ _id: userId });
        const user = await User.findByIdAndDelete(userId);

        res.status(200).send("User Deleted Successfully");
    }
    catch (err) {
        res.status(400).send("Something went wrong");
    }
});

// Update data of the user

app.patch("/user/:userId", async (req, res) => {
    const userId = req.params?.userId;
    const data = req.body;

    try {
        const ALLOWED_UPDATES = [
            "photoUrl", "about", "gender", "age", "skills"
        ]

        const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k));

        if (!isUpdateAllowed) {
            throw new Error("Update not allowed");
        }
        if (data?.skills.length > 10) {
            throw new Error("Skills cannot be more than 10");
        }
        const user = await User.findByIdAndUpdate({ _id: userId }, data, { runValidators: true });
        console.log(user);
        res.send("User Updated Successfully");
    }
    catch (err) {
        res.status(400).send("Update failed: " + err.message);
    }
});

connectDB().then(() => {
    console.log("Database connection established...");
}).catch(err => {
    console.error("Database cannot be connected!!");
})

app.listen(7777, () => {
    console.log('Server is successfully listening on port 7777');
});