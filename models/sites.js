const mongoose = require("mongoose"); 
const siteSchema = new mongoose.Schema({
    name:{
        type:String , 
        default: "mohamed", 
    } , 
    ville: {
        type: String , 
        default: "moknine"
    },
    region:{
        type:String , 
        default: "Monastir", 
    } , 
    pays: {
        type: String , 
        default: "Tunisia"
    },
//     region: String, 
//     pays: String, 
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
 })

module.exports = mongoose.model("site",siteSchema) ; 