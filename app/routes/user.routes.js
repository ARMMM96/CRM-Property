const router = require("express").Router()
const userController = require("../controller/user.controller")
const { authentication } = require("../middlewares/authentication.middleware")


router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/find", userController.getSingleUser)
router.patch("/update", userController.updateUserData)
router.patch("/profilePicture", authentication, userController.profilePicture)
router.delete("/delete", userController.deleteUser)

module.exports = router