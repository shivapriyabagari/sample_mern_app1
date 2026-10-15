const express = require("express");
const router = express.Router();

const { users } = require("../models/users");

router.post("/register", async (req, res) => {
    try {
        const newUser = new users(req.body);
        const result = await newUser.save();

        return res.status(201).json({
            message: "User registered successfully",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error while registering user",
            error: error.message
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await users.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        return res.status(200).json({
            message: "Login successful",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
});

router.get("/viewtask", (req, res) => {
    return res.status(200).json({
        message: "View task page called"
    });
});

router.put("/updatestatus", async (req, res) => {
    try {
        const { id, status } = req.body;

        if (!id) {
            return res.status(400).json({
                message: "User id is required"
            });
        }

        const updatedUser = await users.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "Status updated successfully",
            data: updatedUser
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error while updating status",
            error: error.message
        });
    }
});

module.exports = router;