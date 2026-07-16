const express = require("express");

const detectionRoutes = require("./routes/detectionRoutes");

const app = express();

app.use(express.json());

app.use("/api/detections", detectionRoutes);

module.exports = app;
