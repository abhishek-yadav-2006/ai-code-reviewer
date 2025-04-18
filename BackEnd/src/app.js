
require('dotenv').config()
const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors())


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})