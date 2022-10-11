const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')
const cors = require('cors')

const app = express()
const routeLogin = require('./route-login')
const routeSetup = require('./route-setup')

app.use(
  cors()
  // (req, res, next) => {
  //   // res.header('Access-Control-Allow-Origin', 'https://localhost:3001');
  //   res.header('Access-Control-Allow-Origin', '*');
  //   console.log(res.header)
  //   next();
  // }
  );

app.use('/',express.urlencoded({extended: false}))
app.use('/',express.json())
app.use('/login', routeLogin)
app.use('/setup',routeSetup)
// app.listen(5000,(err,res) => {
//     console.log("The server is on.......")

//     if (err){
//         res.end()
//     }
// });

https.createServer(
    {
        key: fs.readFileSync(path.join(path.resolve('.'),".cert/key.pem")),
        cert: fs.readFileSync(path.join(path.resolve('.'),".cert/cert.pem")),
      },
    app
    ).listen(5002,(err,res) => {
        console.log("The server is on.......")
    
        if (err){
            res.end()
        }
    })