const mongoose = require("mongoose"); 
const siteSchema = new mongoose.Schema({
    name:{
        type:String , 
        default: "mohamed", 
        required: true,
    } , 
    ville: {
        type: String , 
        default: "moknine",
        required: true,
    },
    region:{
        type:String , 
        default: "Monastir", 
        required: true,
    } , 
    pays: {
        type: String , 
        default: "Tunisia",
        required: true,
    },
    lat:{
        type:Number , 
        default: 1, 
        required: true,
    } , 
    long: {
        type:Number , 
        default: 1, 
        required: true,
    },
    type:{
        type:String , 
        default: "Musée", 
        required: true,
    } , 
    date_ouv: {
        type: Date , 
        required: true,
    },
    date_fer: {
        type: Date , 
        required: true,
    },
    jour_ferm: {
        type: String , 
        required: true,
    },
    jour_ouv: {
        type: String , 
        required: true,
    },
    description: {
        type: String , 
        default: "...",
        required: true,
    },
    heure_ferm: {
        type: Date , 
        //required: true,
    },
    heure_ouv: {
        type: Date , 
       // required: true,
    },
    panoramaPhoto: {
        type: Boolean , 
        required: true,
    },
    epoque: {
        type:  Array , 
        default: "...",
        required: true,
    },
    image: {
        type: String , 
        default: "...",
        required: true,
    },
    patrimoine: {
        type: Boolean, 
        required:true,  
    }
    
    

    // name:String,
    // ville:String,
    // region: String, 
    // pays: String, 
//     lat: Number, 
//     long: Number, 
//     type: String, 
//     date_ouv: Date ,
//     date_fer: Date , 
//     jour_ferm: Date , 
//     jour_ouv: Date, 
//     Description: String, 
//     heure_ferm: Date , 
//     heure_ouv: Date, 
// epoque 
// image 
 })

module.exports = mongoose.model("site",siteSchema) ; 