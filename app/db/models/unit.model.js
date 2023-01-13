const mongoose = require('mongoose')

const unitSchema = mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        require: true
    },
    image: {
        type: String,
        trim: true
    }
})

const Unit = mongoose.model('Unit', unitSchema)

module.exports = Unit
