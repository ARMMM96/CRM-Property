const userModel = require('../db/models/user.model')
const helper = require("../helpers/helpers")
const multer = require("multer")
const upload = require('../middlewares/imageUpload.middleware')
class User {
    static register = async (req, res) => {
        try {
            const userData = new userModel(req.body)
            await userData.save()
            helper.resHandler(res, 200, true, userData, "User registered successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static login = async (req, res) => {
        try {
            const userData = await userModel.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken()
            helper.resHandler(res, 200, true, { user: userData, token }, "user added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static profile = (req, res) => {
        helper.resHandler(res, 200, true, { user: req.user }, "user profile fetched")
    }
    static getSingleUser = async (req, res) => {
        try {
            const userData = await userModel.findOne({
                _id: req.body.id
            });
            if (!userData) {
                helper.resHandler(res, 404, false, null, "User Is not exist")

            } else {

                helper.resHandler(res, 200, true, userData, "User found")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static updateUserData = async (req, res) => {
        try {
            const userData = await userModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            if (!userData) {
                helper.resHandler(res, 404, false, null, "User Is not exist")
            } else {

                helper.resHandler(res, 200, true, userData, "User updated")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteUser = async (req, res) => {
        try {
            const userData = await userModel.findByIdAndRemove(req.body.id)

            if (!userData) {
                helper.resHandler(res, 404, false, null, "User Is not exist")
            } else {

                helper.resHandler(res, 200, true, userData, "User deleted")
            }

        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static profilePicture = async (req, res) => {
        try {
            const uploadImage = upload.single('img')
            uploadImage(req, res, async function (err) {
                if (err instanceof multer.MulterError) {
                    return res.send({ err: "invalid upload" })
                } else if (err) {
                    return res.send({ err: "invalid upload 1" })
                }
                req.user.image = req.file.path
                await req.user.save()
                helper.resHandler(res, 200, true, req.user, "updated")
            })
        }
        catch (e) {
            res.send(e.message)
        }
    }
}
module.exports = User