const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

app.use(cors())
require("./db/connection")
app.use(express.static(path.join(__dirname, "../public")))



app.use(express.json())
const userRoutes = require('./routes/user.routes')
const rulesRoutes = require('./routes/roles.routes')
const urlsRoutes = require('./routes/urls.routes')
const projectRoutes = require('./routes/project.routes')
const buildingRoutes = require('./routes/bulding.routes')
const floorRoutes = require('./routes/floor.routes')
const unitRoutes = require('./routes/unit.routes')
const paymintRoutes = require('./routes/paymint.routes')


app.use("/api/user/", userRoutes)
app.use("/api/rules/", rulesRoutes)
app.use("/api/routes/", urlsRoutes)
app.use("/api/project/", projectRoutes)
app.use("/api/building/", buildingRoutes)
app.use("/api/floor/", floorRoutes)
app.use("/api/unit/", unitRoutes)
app.use("/api/paymint/", paymintRoutes)


app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})

module.exports = app