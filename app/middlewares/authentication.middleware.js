const userModel = require("../db/models/user.model")
const helper = require("../helpers/helpers")
const jwt = require("jsonwebtoken")
const authentication = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decodedToken = jwt.verify(token, process.env.tokenPassword)
        const userData = await userModel.findOne({
            _id: decodedToken._id,
            "tokens.token": token
        })
        if (!userData) {
            helper.resHandler(res, 404, false, e.message, "In valid token")
            return;
        }
        req.user = userData
        req.token = token
        next()
    }
    catch (e) {
        helper.resHandler(res, 500, false, e.message, "Unauthenticated request")
    }
}
module.exports = { authentication }