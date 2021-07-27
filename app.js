const express = require('express') 
const mongoose = require('mongoose')
//const url= 'mongodb://localhost/tunisieSites'
const url ='mongodb+srv://mohamedbh3dwave:l4gd4gxIBVVE2BAp@cluster0.khpi8.mongodb.net/sitesdb?retryWrites=true&w=majority'

const app = express() 

//mongoose.connect(url, {useNewUrlParser:true})  
mongoose.connect(url,
    { useNewUrlParser: true , useUnifiedTopology: true } )
console.log('Connected to Database')


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