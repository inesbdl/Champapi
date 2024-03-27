const express = require("express");
const router = express.Router()

const scientifiquesController = require("../controllers/scientifiquesController");

router.get("/", scientifiquesController.getAllScientifiques);
router.post("/", scientifiquesController.createScientifique);

router.get("/:id", scientifiquesController.getScientifiqueById)
router.post("/:id/champi", scientifiquesController.addScientifiqueChampi)

module.exports = router;