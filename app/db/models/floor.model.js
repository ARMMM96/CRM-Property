const mongoose = require('mongoose')

const floorSchema = mongoose.Schema({
    number: {
        type: Number,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true
    },
    buildingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "building",
        trim: true,
        require: true
    },
    unit: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "unit",
    }]
})

const Floor = mongoose.model('Floor', floorSchema)

module.exports = Floor
