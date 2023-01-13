const express = require("express");
const router = new express.Router();
const unitController = require("../controller/unit.controller")

router.post("/create", unitController.createUnit)
router.patch("/update", unitController.updateUnit)
router.get("/units", unitController.getUnits)
router.get("/unit", unitController.getUnit)
router.get("/delete", unitController.deleteUnit)

module.exports = router;