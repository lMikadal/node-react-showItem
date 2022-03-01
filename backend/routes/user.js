const express = require('express')
const router = express.Router()
const User = require('../model/users')

router.get('/', (req, res) => {
    User.find((err, data) => {
        if (err) return console.log(err)
        res.json(data)
    })
})

router.get('/user/:status', (req, res) => {
    User.findOne({status : req.params.status}, (err, data) => {
        if(err) console.log(err)
        res.json(data)
        console.log("show success!!")
    })
})

router.post('/register', (req, res) => {
    const data = new User( req.body )
    data.save((err, data) => {
        if (err) return console.log(err)
        res.json(data)
        console.log("Register success!!")
    })
})

router.put('/login/:name/:pass', (req, res) => {
    User.findOne({name : req.params.name, password : req.params.pass}, (err, data) => {
        if (data == null){
            console.log(err)
        }else{
            User.findByIdAndUpdate(data._id, req.body, (err, data) => {
                if(err) console.log(err)
                res.json(data)
                console.log("updata success!!")
            }) 
        }     
    })
})

router.put('/logout/:id', (req, res) => {   
    User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) console.log(err)
        res.json(data)
        console.log("updata success!!")
    }) 
})

module.exports = router