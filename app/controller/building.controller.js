
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
            if (!buildingData) {
                helper.resHandler(res, 404, false, null, "Buildings Is not exist")
            } else {

                helper.resHandler(res, 200, true, buildingData, "Buildings found")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getBuilding = async (req, res) => {
        try {
            const buildingData = await buildingModel.findById({ _id: req.body.id })
            if (!buildingData) {
                helper.resHandler(res, 404, false, null, "Building Is not exist")
            } else {

                helper.resHandler(res, 200, true, buildingData, "Building found")
            }
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
            if (!buildingData) {
                helper.resHandler(res, 404, false, null, "Building Is not exist")
            } else {

                helper.resHandler(res, 200, true, buildingData, "Building updated")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static deleteBuilding = async (req, res) => {
        try {
            const buildingData = await buildingModel.findByIdAndRemove(req.body.id)
            if (!buildingData) {
                helper.resHandler(res, 404, false, null, "Building Is not exist")
            } else {
                helper.resHandler(res, 200, true, buildingData, "Building deleted")
            }
        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

}

module.exports = Building