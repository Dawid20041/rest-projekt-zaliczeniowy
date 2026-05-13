const { swaggerUi, swaggerSpec } = require("./config/swagger")
const express = require("express")
const app = express()


const userRoutes = require("./routes/userRoutes")
const aukcjaRoutes = require("./routes/aukcjaRoutes")

app.use(express.json())

app.use("/user", userRoutes)
app.use("/auctions", aukcjaRoutes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})