const express = require("express");
const router = new express.Router();
const floorController = require("../controller/floor.controller")

router.post("/create", floorController.createFloor)
router.get("/floors", floorController.getFloors)




module.exports = router;