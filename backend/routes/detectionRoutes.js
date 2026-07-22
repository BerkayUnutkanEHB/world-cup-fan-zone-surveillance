const express = require("express");
const router = express.Router();

const detectionController = require("../controllers/detectionController");
const validateDetection = require("../middleware/validation/detectionValidation");

router.post("/", validateDetection, detectionController.createDetection);

module.exports = router;
