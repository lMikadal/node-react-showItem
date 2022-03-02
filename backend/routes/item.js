const express = require('express')
const router = express.Router()
const Item = require('../model/items')

router.get('/', (req, res) => {
    Item.find((err, data) => {
        if (err) return console.log(err)
        res.json(data)
    })
})

router.get('/user/:user', (req, res) => {
    Item.find({user : req.params.user}, (err, data) => {
        if(err) console.log(err)
        res.json(data)
    })
})

router.post('/insert', (req, res) => {
    const data = new Item( req.body )
    data.save((err, data) => {
        if (err) return console.log(err)
        res.json(data)
    })
})

router.get('/edit/:id', (req, res) => {
    Item.findOne({_id: req.params.id}, (err, data) => {
        if(err) console.log(err)
        res.json(data)
    })
})

router.put('/updata/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) console.log(err)
        res.json(data)
    })
})

router.put('/updataShow/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) console.log(err)
        res.json(data)
    })
})

router.delete('/delete/:id', (req,res) => {
    Item.findByIdAndDelete(req.params.id, (err, data) =>{
        if(err) console.log(err)
    })
})

module.exports = router