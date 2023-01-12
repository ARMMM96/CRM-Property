
const buildingModel = require('../db/models/floor.model')
const helper = require("../helpers/helpers")
class Floor {
    static createFloor = async (req, res) => {
        try {
            const buildingData = new buildingModel(req.body)
            await buildingData.save()
            helper.resHandler(res, 200, true, buildingData, "Floor added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
}

module.exports = Floor