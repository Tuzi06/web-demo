var {database} = require('./data.js')
const cryptoJS = require('crypto-js')
const express = require('express')
const routeSetup = express.Router()
routeSetup.post('/',(req,res)=>{
    console.log('start setup')
    try{
        var data = JSON.parse(cryptoJS.AES.decrypt(req.body.encrypt, "Bilibili kanpai").toString(cryptoJS.enc.Utf8));
        // console.log('data: ',data)
        // console.log('end decrypt')
    }
    catch(err){
        // console.log('there is something wrong')
        res.status(204).send({message:'data has broken'})
        return
    }
    const username =data.username
    // console.log(username, data.username)
    const keyword =data.password
    // console.log(keyword, data.password)
    // console.log('dafas',database)
    if(username in database){
        res.status(201).send({message:'username has already been use'})
        console.log('nooooooooooooooooooooooo')
    }
    else{
        database[username]= keyword
        res.status(200).send({message:'setup successfully'})
        // console.log('yeahhhhhhhhhhhh')
        // console.log(database)
    }
})
module.exports = routeSetup