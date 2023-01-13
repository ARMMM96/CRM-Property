
const unitModel = require('../db/models/unit.model')
const helper = require("../helpers/helpers")
class Unit {

    static createUnit = async (req, res) => {
        try {
            const unitgData = new unitModel(req.body)
            await unitgData.save()
            helper.resHandler(res, 200, true, unitgData, "Unit added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

}

module.exports = Unit