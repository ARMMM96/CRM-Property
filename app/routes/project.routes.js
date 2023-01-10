const express = require("express");
const router = new express.Router();
const projectController = require("../controller/project.controller")

router.post("/create", projectController.createProject)
router.get("/projects", projectController.getProjects)
// router.patch("/update", projectController.updateRules)
// router.delete("/delete", projectController.deleteRule)



module.exports = router;