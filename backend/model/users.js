// ใช้งาน mongoose
const mongoose = require('mongoose')

// ออกแบบ Schema
let userSchema = mongoose.Schema({
    username: String,
    password: Number,
    status: Number
})

// สร้างโมเดล
let User = mongoose.model('users', userSchema)

// ส่งออกโมเดล
module.exports = User