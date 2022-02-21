// ใช้งาน mongoose
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

// ออกแบบ Schema
let itemSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String
})

// สร้างโมเดล
let Item = mongoose.model('items', itemSchema)

// ส่งออกโมเดล
module.exports = Item