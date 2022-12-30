const express = require("express");
const router = new express.Router();
const rulesController = require("../controller/rules.controller")

router.post("/create", rulesController.createRule)
router.get("/all", rulesController.getRules)
router.patch("/update", rulesController.updateRules)
router.delete("/delete", rulesController.deleteRule)



module.exports = router;