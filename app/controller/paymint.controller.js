
const paymintModel = require('../db/models/paymint.model')
const helper = require("../helpers/helpers")
class Paymint {
    static createPaymint = async (req, res) => {
        try {
            const paymintgData = new paymintModel(req.body)
            await paymintgData.save()
            helper.resHandler(res, 200, true, paymintgData, "Paymint added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static updatePaymint = async (req, res) => {
        try {
            const paymintData = await paymintModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            helper.resHandler(res, 200, true, paymintData, "Paymint updated")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getPaymints = async (req, res) => {
        console.log("FIRE?")
        try {
            const paymintData = await paymintModel.find();
            helper.resHandler(res, 200, true, paymintData, "Paymints found")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

}

module.exports = Paymint