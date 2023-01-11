
const buildingModel = require('../db/models/building.model')
const helper = require("../helpers/helpers")
class Building {
    static createBuilding = async (req, res) => {
        try {
            const buildingData = new buildingModel(req.body)
            await buildingData.save()
            helper.resHandler(res, 200, true, buildingData, "Building added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getBuildings = async (req, res) => {
        try {
            const buildingData = await buildingModel.find();
            helper.resHandler(res, 200, true, buildingData, "Buildings found")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Building