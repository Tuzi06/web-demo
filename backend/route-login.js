const {database} = require('./data.js')
const cryptoJS = require('crypto-js')
const express = require('express')
const routeLogin = express.Router()
routeLogin.post('/',(req,res)=>{
    console.log(req.body)
    try{
        var data = JSON.parse(cryptoJS.AES.decrypt(req.body.encrypt, "Bilibili kanpai").toString(cryptoJS.enc.Utf8));
        // console.log('data: ',data)
        // console.log('end decrypt')
    }
    catch(err){
        // console.log('there is something wrong')
        res.status(203).send('data has broken')
        return
    }
    // console.log(data.username)
    // console.log(database)
    // console.log(data.username in database)
    try{
        if(!(data.username in database) || database[data.username]!== data.password){
            res.status(202).send({message:'username or keyword is wrong'})
            // console.log('?????????')
        }
        else{
            res.status(200).send({success:true,message:'you have login'})
        }
    }   
    catch(err){
        // console.log(err)
        res.status(500).send({'message':err})
    }
    // res.status(200).json({1: '???????????????????????????????'})
})
module.exports = routeLogin