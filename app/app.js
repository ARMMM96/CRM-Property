const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
require("./db/connection")

app.use(express.json())
const userRoutes = require('./routes/user.routes')
const rulesRoutes = require('./routes/roles.routes')

app.use("/api/user/", userRoutes)
app.use("/api/rules/", rulesRoutes)


app.use("/", (req, res) => {
    res.send('Hello World')
})


module.exports = app