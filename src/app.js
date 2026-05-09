const express = require('express')
const app = express()

const userRoutes = require('./routes/userRoutes')
const aukcjaRoutes = require('./routes/aukcjaRoutes')

app.use(express.json())

app.use('/users', userRoutes)
app.use('/auctions', aukcjaRoutes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})