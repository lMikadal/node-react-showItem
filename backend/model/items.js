// ใช้งาน mongoose
const mongoose = require('mongoose')

// ออกแบบ Schema
let itemSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    show: String,
    user: String
})

// สร้างโมเดล
let Item = mongoose.model('items', itemSchema)

// ส่งออกโมเดล
module.exports = Item