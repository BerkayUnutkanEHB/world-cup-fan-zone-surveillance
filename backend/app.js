const express = require("express");

const detectionRoutes = require("./routes/detectionRoutes");
const supporterRoutes = require("./routes/supporterRoutes");
const zoneRoutes = require("./routes/zoneRoutes");

const app = express();

app.use(express.json());

app.use("/api/detections", detectionRoutes);
app.use("/api/supporters", supporterRoutes);
app.use("/api/zones", zoneRoutes);

module.exports = app;
