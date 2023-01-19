const mongoose = require('mongoose')
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 20,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    lowercase: true,
    minLength: 3,
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
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('invalid email format')
      }
    }
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
    validate(value) {
      const isValidpassword = validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false
      })
      if (!isValidpassword) {
        throw new Error('invalid password format')
      }
    }
  },
  gender: {
    type: String,
    trim: true,
    lowercase: true,
    enum: ['male', 'female']
  },
  dOfBirth: {
    type: Date
  },
  phoneNum: {
    type: String
  },
  addresses: [
    {
      addressType: {
        type: String,
        trim: true,
        required: true
      },
      details: { type: String }
    }
  ],
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roles'
  },
  tokens: [
    {
      token: { type: String, required: true }
    }
  ]
})

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcryptjs.hash(this.password, 8)
  }
})
userSchema.pre('findOneAndUpdate', async function (next) {
  try {
    if (this._update.password) {
      console.log(this._update.password)
      const hashed = await bcryptjs.hash(this._update.password, 10)
      this._update.password = hashed;
      next();
    }
    next();
  } catch (err) {
    return next(err);
  }
})

userSchema.methods.generateToken = async function () {
  const userData = this
  const token = jwt.sign({ _id: userData._id }, process.env.tokenPassword)
  userData.tokens = userData.tokens.concat({ token })
  await userData.save()
  return token
}

userSchema.statics.loginUser = async (email, password) => {
  const userData = await User.findOne({ email })
  if (!userData) throw new Error('invalid email')
  const validatePassword = await bcryptjs.compare(password, userData.password)
  if (!validatePassword) throw new Error('invalid password')
  return userData
}

const User = mongoose.model('User', userSchema)

module.exports = User
