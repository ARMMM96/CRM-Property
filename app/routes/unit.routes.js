const express = require("express");
const router = new express.Router();
const unitController = require("../controller/unit.controller")

router.post("/create", unitController.createUnit)
router.patch("/update", unitController.updateUnit)


module.exports = router;