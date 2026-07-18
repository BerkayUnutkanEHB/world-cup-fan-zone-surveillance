const express = require("express");
const interactionController = require("../controllers/interactionController");

const router = express.Router();

router.post("/", interactionController.createInteraction);
router.get("/", interactionController.getAllInteractions);

module.exports = router;
