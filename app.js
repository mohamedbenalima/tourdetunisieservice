const express = require('express') 
const mongoose = require('mongoose')
const url= 'mongodb://localhost/tunisieSites'

const app = express() 

mongoose.connect(url, {useNewUrlParser:true})  

const con = mongoose.connection

con.on('open',()=>{
    console.log('connected ya 7AMMA...')
})

app.use(express.json())

const siteRouter = require('./routes/sites')
app.use('/sites',siteRouter)

app.listen(9000,()=>{
    console.log("server started at port 9000")
})