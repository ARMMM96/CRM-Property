const PDFDocument = require('pdfkit');
const fs = require('fs');
const paymintModel = require('../db/models/paymint.model')
const userModel = require('../db/models/user.model')
const unitModel = require('../db/models/unit.model')
const floortModel = require('../db/models/floor.model')
const buildingModel = require('../db/models/building.model')
const projectModel = require('../db/models/project.model')
const helper = require("../helpers/helpers")

class paymintPDFGenerator {



    static getPaymintPdf = async (req, res) => {


        try {
            // Bring required data to include in the pdf 
            const paymintData = await paymintModel.findById({ _id: req.body.id })

            const userId = paymintData.customerId;
            const userData = await userModel.findById({ _id: userId })

            const salesmanId = paymintData.sallerId;
            const salesmanData = await userModel.findById({ _id: salesmanId })

            const unitId = paymintData.unitId;
            const unitData = await unitModel.findById({ _id: unitId })

            const projectId = paymintData.projectId;
            const projectData = await projectModel.findById({ _id: projectId })

            const floorId = unitData.floorId;
            const floorData = await floortModel.findById({ _id: floorId })

            const buildingId = floorData.buildingId;
            const builidngData = await buildingModel.findById({ _id: buildingId })


            const customerAndSallerData = {
                "Invice Number": ` ${paymintData._id} `,
                "Date of Purchase": ` ${paymintData._id.getTimestamp().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })} `,
                "Customer Name": ` ${userData.firstName} ${userData.lastName}`,
                "Saller Name": `${salesmanData.firstName} ${salesmanData.lastName}`,
                "Project Name": ` ${projectData.name}`,
                "Project Address": ` ${projectData.location}`
            }

            const paymintInvoice = {
                "Total Amount": ` ${paymintData.totalAmout}`,
                "SemiAnnual": ` ${paymintData.totalAmout / 2}`,
                "Quarterly": ` ${paymintData.totalAmout / 4}`
            }
            const unitInfo = {
                "Building number": ` ${builidngData.number}`,
                "Unit floor": ` ${floorData.number}`,
                "Unit size": ` ${unitData.size} Square Meter `,
                "Number of rooms": ` ${unitData.numberOfRooms}`,
                "Number of bathrooms": ` ${unitData.numberOfBathrooms}`,
            }
            console.log(unitInfo)
            // Create a document
            const doc = new PDFDocument({ margin: 50 });



            helper.generateHeader(doc)
            helper.generateFooter(doc)

            helper.generateInvoiceTable(doc, customerAndSallerData, "Cutomer Details", 160)
            helper.generateInvoiceTable(doc, paymintInvoice, "Paymints Details", 380)
            helper.generateInvoiceTable(doc, unitInfo, "Unit Details", 510)

            // Finalize PDF file
            doc.end();

            // Preparing file name
            const creationDate = new Date(Date.now()).toISOString().slice(0, 10);
            const fileName = `${userData.firstName}-${userData.lastName}-${creationDate}`

            // Pipe its output somewhere, like to a file or HTTP response
            doc.pipe(fs.createWriteStream(`public/${fileName}.pdf`));


            helper.resHandler(res, 200, true, paymintData, "Paymint found")


        } catch (e) {
            helper.resHandler(res, 500, false, e, e.message)
        }


    }


}

module.exports = paymintPDFGenerator