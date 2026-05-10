const express = require("express")
const app = express()

const userRoutes = require("./routes/userRoutes")
const aukcjaRoutes = require("./routes/aukcjaRoutes")

app.use(express.json())

app.use("/user", userRoutes)
app.use("/auctions", aukcjaRoutes)

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})