const database = require('./data.js')

const express = require('express')
const routeSetup = express.Router()
routeSetup.get('/',(req,res)=>{
    const username = req.body.username
    const keyword = req.body.keyword

    if(username in database){
        res.status(201).send('username has already been use')
        console.log('nooooooooooooooooooooooo')
    }
    else{
        database[username]= keyword
        res.status(200).send('setup successfully')
        console.log('yeahhhhhhhhhhhh')
        console.log(database)
    }
})
module.exports = routeSetup