const express = require('express')
const router = express.Router()
const Item = require('../model/items')

router.get('/', (req, res) => {
    Item.find((err, data) => {
        if (err) {
            return console.log(err)
        }else {
            res.json(data)
        }
    })
})

module.exports = router