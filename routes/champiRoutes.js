const express = require("express");
const router = express.Router()

const champiController = require("../controllers/champiController");

router.get("/", champiController.getAllChampis);
router.post("/", champiController.createChampi);

router.get("/:id", champiController.getChampiById)

module.exports = router;