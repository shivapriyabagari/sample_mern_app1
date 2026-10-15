const express = require("express");
const router = express.Router();

router.get("/viewemployees", (req, res) => {
    return res.status(200).json({
        message: "View Employees",
        data: []
    });
});

router.post("/assignemployees", (req, res) => {
    try {
        const { employeeId, taskId } = req.body;

        if (!employeeId || !taskId) {
            return res.status(400).json({
                message: "employeeId and taskId are required"
            });
        }

        return res.status(201).json({
            message: "Employee assigned successfully",
            data: { employeeId, taskId }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error while assigning employee",
            error: error.message
        });
    }
});

router.delete("/deleteemployees", (req, res) => {
    try {
        const { employeeId } = req.body;

        if (!employeeId) {
            return res.status(400).json({
                message: "employeeId is required"
            });
        }

        return res.status(200).json({
            message: "Employee deleted successfully",
            data: { employeeId }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error while deleting employee",
            error: error.message
        });
    }
});

module.exports = router;