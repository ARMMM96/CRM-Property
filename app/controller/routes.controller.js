const routesModel = require('../db/models/routes.model')
const helper = require("../helpers/helpers")
class Routes {
    static createRoute = async (req, res) => {
        try {
            const routeData = new routesModel(req.body)
            await routeData.save()
            helper.resHandler(res, 200, true, routeData, "Route added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getRoutes = async (req, res) => {
        try {
            const routeData = await routesModel.find();
            if (!routeData) {
                helper.resHandler(res, 404, false, null, "Routes Is not exist")
            } else {

                helper.resHandler(res, 200, true, routeData, "Routes found")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static updateRoute = async (req, res) => {
        try {
            const routeData = await routesModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            if (!routeData) {
                helper.resHandler(res, 404, false, null, "Route Is not exist")
            } else {

                helper.resHandler(res, 200, true, routeData, "Route updated")
            }
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

    static deleteRoute = async (req, res) => {
        try {
            const routeData = await routesModel.findByIdAndRemove(req.body.id)
            if (!routeData) {
                helper.resHandler(res, 404, false, null, "Route Is not exist")
            } else {

                helper.resHandler(res, 200, true, routeData, "Route deleted")
            }
        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
}
module.exports = Routes