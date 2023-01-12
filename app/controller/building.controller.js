
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
    static updateBuilding = async (req, res) => {
        try {
            const buildingData = await buildingModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            helper.resHandler(res, 200, true, buildingData, "Building updated")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static deleteBuilding = async (req, res) => {
        try {
            const buildingData = await buildingModel.findByIdAndRemove(req.body.id)
            helper.resHandler(res, 200, true, buildingData, "Building deleted")
        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

}

module.exports = Building