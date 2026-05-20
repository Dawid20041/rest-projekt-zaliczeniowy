const express = require("express")
const { swaggerUi, swaggerSpec } = require("./config/swagger")

const userRoutes = require("./routes/userRoutes")
const aukcjaRoutes = require("./routes/aukcjaRoutes")
const bidRoutes = require("./routes/bidRoutes")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        name: "Auction REST API",
        docs: "/api-docs",
        endpoints: ["/users", "/auctions", "/auctions/:id/bids"]
    })
})

app.use("/users", userRoutes)
app.use("/user", userRoutes)
app.use("/auctions/:id/bids", bidRoutes)
app.use("/auctions", aukcjaRoutes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

console.log("App working")

module.exports = app
