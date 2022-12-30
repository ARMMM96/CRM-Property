const express = require("express");
const router = new express.Router();
const urlsController = require("../controller/rules.controller")

router.post("/create", urlsController.createRoute)
router.get("/all", urlsController.createRoutes)
router.patch("/update", urlsController.updateRoutes)
router.delete("/delete", urlsController.deleteRoutes)



module.exports = router;