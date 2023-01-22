
const unitModel = require('../db/models/unit.model')
const helper = require("../helpers/helpers")
const multer = require("multer")
const upload = require('../middlewares/imageUpload.middleware')
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


    static updateUnit = async (req, res) => {
        try {
            const unitData = await unitModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            if (!unitData) {
                helper.resHandler(res, 404, false, null, "Unit Is not exist")
            } else {
                helper.resHandler(res, 200, true, unitData, "Unit updated")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }


    static getUnits = async (req, res) => {
        try {
            const unitData = await unitModel.find();
            if (!unitData) {
                helper.resHandler(res, 404, false, null, "Unit Is not exist")
            } else {

                helper.resHandler(res, 200, true, unitData, "Units found")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static getUnit = async (req, res) => {
        try {
            const unitData = await unitModel.findById({ _id: req.body.id })
            if (!unitData) {
                helper.resHandler(res, 404, false, null, "Unit Is not exist")
            } else {

                helper.resHandler(res, 200, true, unitData, "Unit found")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteUnit = async (req, res) => {
        try {
            const unitData = await unitModel.findByIdAndRemove(req.body.id)
            if (!unitData) {
                helper.resHandler(res, 404, false, null, "Unit Is not exist")
            } else {

                helper.resHandler(res, 200, true, unitData, "Unit deleted")
            }
        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static unitPicture = async (req, res) => {
        try {
            const uploadImage = upload.single('img')
            uploadImage(req, res, async function (err) {
                if (err instanceof multer.MulterError) {
                    return res.send({ err: "invalid upload" })
                } else if (err) {
                    return res.send({ err: "invalid upload 1" })
                }
                const unitData = await unitModel.findById({ _id: req.params.id})

                unitData.image = req.file.path

                await unitData.save()

                helper.resHandler(res, 200, true, 'projectData', "updated")
            })
        }
        catch (e) {
            res.send(e.message)
        }
    }
}

module.exports = Unit