const express = require("express");

const detectionRoutes = require("./routes/detectionRoutes");
const supporterRoutes = require("./routes/supporterRoutes");
const zoneRoutes = require("./routes/zoneRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const risicoWaarschuwingRoutes = require("./routes/risicoWaarschuwingRoutes");

const app = express();

app.use(express.json());

app.use("/api/detections", detectionRoutes);
app.use("/api/supporters", supporterRoutes);
app.use("/api/zones", zoneRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/risico-waarschuwingen", risicoWaarschuwingRoutes);

module.exports = app;
