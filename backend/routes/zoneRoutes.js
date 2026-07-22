const express = require("express");

const zoneController = require("../controllers/zoneController");

const router = express.Router();

router.get("/", zoneController.getAllZones);

module.exports = router;
