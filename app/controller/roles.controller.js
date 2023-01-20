const rolesModel = require('../db/models/roles.model')
const helper = require("../helpers/helpers")
class Roles {
    static createRule = async (req, res) => {
        try {
            const rolesData = new rolesModel(req.body)
            await rolesData.save()
            helper.resHandler(res, 200, true, rolesData, "Rule added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getRoles = async (req, res) => {
        try {
            const rolesData = await rolesModel.find();
            if (!rolesData) {
                helper.resHandler(res, 404, false, null, "Role Is not exist")
            } else {

                helper.resHandler(res, 200, true, rolesData, "Roles found")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static updateRoles = async (req, res) => {
        try {
            const rolesData = await rolesModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            if (!rolesData) {
                helper.resHandler(res, 404, false, null, "Role Is not exist")
            } else {

                helper.resHandler(res, 200, true, rolesData, "Rule updated")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteRule = async (req, res) => {
        try {
            const rolesData = await rolesModel.findByIdAndRemove(req.body.id)
            if (!rolesData) {
                helper.resHandler(res, 404, false, null, "Role Is not exist")
            } else {

                helper.resHandler(res, 200, true, rolesData, "Rule deleted")
            }
        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Roles