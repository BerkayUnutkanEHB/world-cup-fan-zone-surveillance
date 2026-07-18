const express = require("express");
const simulationController = require("../controllers/simulationController");

const router = express.Router();

router.post("/run", simulationController.runSimulation);

module.exports = router;
