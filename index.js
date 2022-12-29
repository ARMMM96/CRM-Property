const app = require('./app/app')
require("dotenv").config()
app.listen(process.env.PORT, ()=> console.log(`http://localhost:${process.env.PORT}`))
