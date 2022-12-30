const userModel = require('../db/models/user.model')
class User {
    static register = async (req, res) => {
        try {
            const userData = new userModel(req.body)
            console.log(req.body)
            await userData.save()
            res.send(userData)
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error adding new user",
            });
        }
    }
    static getSingleUser = async (req, res) => {
        try {
            const userData = await userModel.findOne({
                _id: req.body.id
            });
            res.send(userData)
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error finding user",
            });
        }
    }
    static updateUserData = async (req, res) => {
        try {
            const userData = await userModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            res.send(userData)
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error updating user",
            });
        }
    }

    static deleteUser = async (req, res) => {
        try {
            const user = await userModel.findByIdAndRemove(req.body.id)
            res.json({
                user: user,
                'message': "Deleted"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error deleting user",
            });

        }
    }
}
module.exports = User