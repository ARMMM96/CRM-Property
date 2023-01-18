const path = require("path")

class Herlper {
    static resHandler = (res, statusCode, apiStatus, data, message) => {
        res.status(statusCode).send({
            apiStatus,
            data,
            message
        })
    }
    static generateHeader(doc) {
        doc.image(path.join(__dirname, '../../public/crm.png'), 50, 45, { width: 50 })
            .fillColor('#444444')
            .fontSize(20)
            .text('CRM Inc.', 110, 57)
            .fontSize(10)
            .text('123 Main Street', 200, 65, { align: 'right' })
            .text('Cairo Madi, 10025', 200, 80, { align: 'right' })
            .moveDown();
    }

    static generateFooter(doc) {
        doc.fontSize(
            10,
        ).text(
            'Payment is due within year. Thank you for your business.',
            50,
            730,
            { align: 'center', width: 500 },
        );
    }

    static generateTableRow(doc, y, c1, c2, c3, c4, c5) {
        doc.fontSize(10)
            .text(c1, 50, y)
            .text(c2, 150, y)
            .text(c3, 280, y, { width: 90, align: 'right' })
            .text(c4, 370, y, { width: 90, align: 'right' })
            .text(c5, 0, y, { align: 'right' });
    }

    static generateInvoiceTable(doc, invoice, title, startingPoint) {

        doc
            .fillColor("#444444")
            .fontSize(20)
            .text(title, 50, startingPoint);

        let i = 0, invoiceTableTop = startingPoint;
        let position;
        for (const [key, value] of Object.entries(invoice)) {
            position = invoiceTableTop + (i + 1) * 30;
            i++;
            this.generateHr(doc, position - 10);
            this.generateTableRow(
                doc,
                position,
                `${key}: ${value}`
            );


        }
        this.generateHr(doc, position + 20);

    }
    static generateHr(doc, y) {
        doc
            .strokeColor("#aaaaaa")
            .lineWidth(1)
            .moveTo(50, y)
            .lineTo(550, y)
            .stroke();
    }
}
module.exports = Herlper