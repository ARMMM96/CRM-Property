const express = require("express");
const router = new express.Router();
const buildingController = require("../controller/building.controller")


router.post("/create", buildingController.createBuilding)
router.get("/buildings", buildingController.getBuildings)
router.get("/building", buildingController.getBuilding)
router.patch("/update", buildingController.updateBuilding)
router.delete("/delete", buildingController.deleteBuilding)

module.exports = router;