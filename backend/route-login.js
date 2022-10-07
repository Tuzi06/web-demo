const database = require('./data.js')

const express = require('express')
const routeLogin = express.Router()
routeLogin.get('/',(req,res)=>{
    console.log(req.query)
    const username = req.query.key
    const keyword = req.query.value

    if(!(username in database) || database[username]!== keyword){
        res.status(202).send({data:'username or keyword is wrong'})
        console.log('?????????')
    }
    else{
        res.status(200).send({success:true,data:'you have login'})
    }
    res.status(200)
})
module.exports = routeLogin