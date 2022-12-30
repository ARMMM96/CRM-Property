const rulesModel = require('../db/models/roles.model')
const helper = require("../helpers/helpers")
class User {
    static createRule = async (req, res) => {
        try {
            const rulesData = new rulesModel(req.body)
            await rulesData.save()
            helper.resHandler(res, 200, true, rulesData, "Rule added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getRules = async (req, res) => {
        try {
            const rulesData = await rulesModel.find();
            helper.resHandler(res, 200, true, rulesData, "Rules found")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static updateRules = async (req, res) => {
        try {
            const rulesData = await rulesModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            helper.resHandler(res, 200, true, rulesData, "Rule updated")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteRule = async (req, res) => {
        try {
            const rulesData = await rulesModel.findByIdAndRemove(req.body.id)
            helper.resHandler(res, 200, true, rulesData, "Rule deleted")
        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = User