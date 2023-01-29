const express = require("express");
const router = new express.Router();
const rolesController = require("../controller/roles.controller")

router.post("/create", rolesController.createRule)
router.get("/all", rolesController.getRoles)
router.get("/single/:id", rolesController.getRole)
router.patch("/update", rolesController.updateRoles)
router.delete("/delete", rolesController.deleteRule)



module.exports = router;