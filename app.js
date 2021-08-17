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
app.use('/uploads',express.static('uploads'));

// app.listen(9000,()=>{
//     console.log("server started at port 9000")
// })

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});