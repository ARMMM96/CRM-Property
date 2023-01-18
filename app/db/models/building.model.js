const mongoose = require('mongoose')

const buildingSchema = mongoose.Schema({
    number: {
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
    location: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
        trim: true,
        require: true
    },
    floors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "floor",
    }]
})

const Building = mongoose.model('Building', buildingSchema)

module.exports = Building
