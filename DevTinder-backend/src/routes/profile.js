const express = require('express');
const bcrypt = require("bcrypt");
const validator = require("validator");

const profileRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
    try {
        const user = req.user;
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

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
    // Validate my profile edit data
    try {
        if (!validateEditProfileData(req)) {
            throw new Error("Invalid Edit request");
        }

        const loggedInUser = req.user;

        Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

        await loggedInUser.save();

        // res.send(`${loggedInUser.firstName}, your profile Updated Successfully`);
        res.json({
            message: `${loggedInUser.firstName}, your profile Updated Successfully`,
            data: loggedInUser
        });
    }
    catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (typeof currentPassword !== "string" || typeof newPassword !== "string") {
            throw new Error("Current password and new password are required");
        }

        if (!validator.isStrongPassword(newPassword)) {
            throw new Error("Please enter a strong password!");
        }

        const user = req.user;

        const isCurrentPasswordValid = await user.validatePassword(currentPassword);

        if (!isCurrentPasswordValid) {
            throw new Error("Current password is incorrect");
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: "Password updated successfully" });
    }
    catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
});

module.exports = profileRouter;