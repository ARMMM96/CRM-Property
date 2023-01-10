const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    Name: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    buildings: {
        type: Number,
        min: 1,
        default: 21
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
    image:{
        type:String, 
        trim:true
    }
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
