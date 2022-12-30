const userModel = require('../db/models/user.model');
class User {
    static register = async (req, res) => {
        try {
            const userData = new userModel(req.body)
            await userData.save()
            res.josn(userData)
        }
        catch (e) {
            res.josn(e.message)
        }
    }

}
module.exports = User