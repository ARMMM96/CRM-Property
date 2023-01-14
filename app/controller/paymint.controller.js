
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

}

module.exports = Paymint