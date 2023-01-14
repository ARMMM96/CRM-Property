const express = require("express");
const router = new express.Router();
const paymintController = require("../controller/paymint.controller")


router.post("/create", paymintController.createPaymint)



module.exports = router;