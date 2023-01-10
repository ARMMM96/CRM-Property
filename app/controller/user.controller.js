const userModel = require('../db/models/user.model')
const helper = require("../helpers/helpers")
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
            resHelper.resHandler(res, 200, true, { user: userData, token }, "user added successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getSingleUser = async (req, res) => {
        try {
            const userData = await userModel.findOne({
                _id: req.body.id
            });
            helper.resHandler(res, 200, true, userData, "User found")
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
            helper.resHandler(res, 200, true, userData, "User updated")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteUser = async (req, res) => {
        try {
            const userData = await userModel.findByIdAndRemove(req.body.id)
            helper.resHandler(res, 200, true, userData, "User deleted")
        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = User