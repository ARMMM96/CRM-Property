const router = require("express").Router()
const userController = require("../controller/user.controller")



router.post("/register", userController.register)
router.get("/find", userController.getSingleUser)
router.patch("/update", userController.updateUserData)

module.exports = router