const express = require("express");
const router = new express.Router();
const paymintController = require("../controller/paymint.controller")
const pdfController = require("../controller/paymintPDFGenerator.controller")


router.post("/create", paymintController.createPaymint)
router.patch("/update", paymintController.updatePaymint)
router.get("/paymints", paymintController.getPaymints)
router.get("/paymint", paymintController.getPaymint)
router.delete("/delete", paymintController.deletePaymint)
router.get("/print", pdfController.getPaymintPdf)


module.exports = router;