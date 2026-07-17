const express = require("express");
const router = express.Router();

const risicoWaarschuwingController = require("../controllers/risicoWaarschuwingController");

router.get("/", risicoWaarschuwingController.getRisicoWaarschuwingen);

module.exports = router;
