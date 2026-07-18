const express = require("express");
const cors = require("cors");
const interactionRoutes = require("./routes/interactionRoutes");
const detectionRoutes = require("./routes/detectionRoutes");
const supporterRoutes = require("./routes/supporterRoutes");
const zoneRoutes = require("./routes/zoneRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const risicoWaarschuwingRoutes = require("./routes/risicoWaarschuwingRoutes");
const simulationRoutes = require("./routes/simulationRoutes");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/detections", detectionRoutes);
app.use("/api/supporters", supporterRoutes);
app.use("/api/zones", zoneRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/risico-waarschuwingen", risicoWaarschuwingRoutes);
app.use("/api/simulation", simulationRoutes);
app.use("/api/interactions", interactionRoutes);

module.exports = app;
