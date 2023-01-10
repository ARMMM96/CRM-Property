
const projectModel = require('../db/models/project.model')
const helper = require("../helpers/helpers")
class Project {
    static createProject = async (req, res) => {
        try {
            const projectData = new projectModel(req.body)
            await projectData.save()
            helper.resHandler(res, 200, true, projectData, "Project added successfully")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getProjects = async (req, res) => {
        try {
            const projectData = await projectModel.find();
            helper.resHandler(res, 200, true, projectData, "Projects found")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getProject = async (req, res) => {
        try {
            const projectData = await projectModel.findById({ _id: req.body.id })
            helper.resHandler(res, 200, true, projectData, "Project found")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }


    static updateProject = async (req, res) => {
        try {
            const projectData = await projectModel.findOneAndUpdate(
                { _id: req.body.id },
                { ...req.body },
                { new: true }
            );
            helper.resHandler(res, 200, true, projectData, "Project updated")
        }
        catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }
    }

}
module.exports = Project