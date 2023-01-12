
const floorModel = require('../db/models/floor.model')
const helper = require("../helpers/helpers")
class Floor {
    static createFloor = async (req, res) => {
        try {
            const floorgData = new floorModel(req.body)
            await floorgData.save()
            helper.resHandler(res, 200, true, floorgData, "Floor added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

}

module.exports = Floor