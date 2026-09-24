const express = require("express");

const app = express();

const hrRoutes = require("./routes/hr_route");

app.use(express.json());

app.use("/api/hr", hrRoutes);

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});