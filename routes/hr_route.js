const express = require("express");
const router = express.Router();

router.get("/viewemployees", (req, res) => {
    res.send("View Employees");
});

router.post("/assignemployees", (req, res) => {
    res.send("Assign Employees");
});

router.delete("/deleteemployees", (req, res) => {
    res.send("Delete Employees");
});

module.exports = router;