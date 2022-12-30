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
            console.log(e.message)
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

}
module.exports = User