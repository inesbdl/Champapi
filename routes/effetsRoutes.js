const express = require("express");
const router = express.Router()

const effetsController = require("../controllers/effetsController");

router.get("/", effetsController.getAllEffets);
router.post("/", effetsController.createEffet);

router.get("/:id", effetsController.getEffetById);
router.post("/:id/champi", effetsController.addEffetChampi);



module.exports = router;