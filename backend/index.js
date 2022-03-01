const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const itemRoute = require('../backend/routes/item')
const userRoute = require('../backend/routes/user')
const mongoose = require('mongoose')

// เชื่อม mongoDB
const local = 'localhost:27017'
const file = 'ItemDB'
const dbUrl = `mongodb://${local}/${file}`

mongoose.Promise = global.Promise
mongoose.connect(dbUrl, {
    useNewUrlParser: true
}).then( 
    () => {
        console.log(`connect database success!!`)
    }, 
    err => {
        console.log(`server error: ${err}`)
    }
)

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/apiitem', itemRoute)
app.use('/apiuser', userRoute)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`start server port: ${port}`)
})