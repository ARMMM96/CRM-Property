const express = require("express");
const router = new express.Router();
const floorController = require("../controller/floor.controller")

router.post("/create", floorController.createFloor)
router.get("/floors", floorController.getFloors)
router.get("/floor", floorController.getFloor)
router.patch("/update", floorController.updateFloor)
router.delete("/delete", floorController.deleteFloor)



module.exports = router;