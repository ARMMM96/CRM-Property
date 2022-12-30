const express = require("express");
const router = new express.Router();
const urlsController = require("../controller/routes.controller")

router.post("/create", urlsController.createRoute)
router.get("/all", urlsController.getRoutes)
router.patch("/update", urlsController.updateRoute)
router.delete("/delete", urlsController.deleteRoute)



module.exports = router;