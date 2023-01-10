const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    type: {
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
    buildings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "floor",
    }]
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
