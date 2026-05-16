const express = require("express")
const { swaggerUi, swaggerSpec } = require("./config/swagger")

const userRoutes = require("./routes/userRoutes")
const aukcjaRoutes = require("./routes/aukcjaRoutes")

const app = express()

app.use(express.json())

app.use("/user", userRoutes)
app.use("/auctions", aukcjaRoutes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

console.log("App working")

module.exports = app