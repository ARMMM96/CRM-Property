const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
        required: true
    },
    age: {
        type: Number,
        min: 21,
        max: 60,
        default: 21
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 5,
        required: true,
        // match: ''
    },
    gender: {
        type: String,
        trim: true,
        lowercase: true,
        enum: ["male", "female"]
    },
    dOfBirth: {
        type: Date
    },
    phoneNum: {
        type: String,
    },
    addresses: [
        {
            addressType: {
                type: String,
                trim: true,
                required: true
            },
            details: {type:String}
        }
    ],

})

const User = mongoose.model("User", userSchema)
module.exports = User