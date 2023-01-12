const mongoose = require('mongoose')

const buildingSchema = mongoose.Schema({
    size: {
        type: Number,
        trim: true,
        required: true
    },
    status: {
        type: String,
        trim: true,
        lowercase: true,
        enum: ['show', 'sell']
    },
    numberOfRooms: {
        type: Number,
        trim: true,
        required: true
    },
    numberOfBathrooms: {
        type: Number,
        trim: true,
        required: true
    },
    floorId: {
        type: String,
        trim: true,
        require: true
    },
    image: {
        type: String,
        trim: true
    }
})

const Building = mongoose.model('Building', buildingSchema)

module.exports = Building
