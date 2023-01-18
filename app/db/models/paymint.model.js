const mongoose = require('mongoose')

const paymintSchema = mongoose.Schema({
    totalAmout: {
        type: Number,
        trim: true,
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
        required: true
    },
    unitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "unit",
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    sallerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

const Paymint = mongoose.model('Paymint', paymintSchema)

module.exports = Paymint
