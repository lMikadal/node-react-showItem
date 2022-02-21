const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const itemRoute = require('../backend/routes/item')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api', itemRoute)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`start server port: ${port}`)
})