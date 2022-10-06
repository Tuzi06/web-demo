const database = require('./data.js')

const express = require('express')
const routeLogin = express.Router()
routeLogin.get('/',(req,res)=>{
    const username = req.body.username
    const keyword = req.body.keyword

    if(!(username in database) || database[username]!== keyword){
        res.status(202).send('username or keyword is wrong')
        console.log('?????????')
    }
    else{
        res.status(200).send('you have login')
    }
})
module.exports = routeLogin