const router = require("express").Router()
const userController = require("../controller/user.controller")



router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/find", userController.getSingleUser)
router.patch("/update", userController.updateUserData)
router.delete("/delete", userController.deleteUser)

module.exports = router