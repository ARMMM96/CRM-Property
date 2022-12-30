const userModel = require('../db/models/user.model')
class User {
    static register = async (req, res) => {
        console.log("fire?")
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

}
module.exports = User