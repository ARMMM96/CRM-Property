
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

    static getFloors = async (req, res) => {
        try {
            const floorData = await floorModel.find();
            helper.resHandler(res, 200, true, floorData, "Floors found")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static getFloor = async (req, res) => {
        try {
            const floorData = await floorModel.findById({ _id: req.body.id })
            helper.resHandler(res, 200, true, floorData, "Floor found")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static updateFloor = async (req, res) => {
        try {
            const floorData = await floorModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            helper.resHandler(res, 200, true, floorData, "Floor updated")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteFloor = async (req, res) => {
        try {
            const floorData = await floorModel.findByIdAndRemove(req.body.id)
            helper.resHandler(res, 200, true, floorData, "Floor deleted")
        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }


}

module.exports = Floor