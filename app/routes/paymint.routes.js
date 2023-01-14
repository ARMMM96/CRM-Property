const express = require("express");
const router = new express.Router();
const paymintController = require("../controller/paymint.controller")


router.post("/create", paymintController.createPaymint)
router.patch("/update", paymintController.updatePaymint)


module.exports = router;