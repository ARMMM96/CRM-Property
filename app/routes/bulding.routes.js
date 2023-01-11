const express = require("express");
const router = new express.Router();
const buildingController = require("../controller/building.controller")


router.post("/create", buildingController.createBuilding)



module.exports = router;