const express = require('express')
const router = express.Router()

const Site = require('../models/sites')

router.get('/', async (req,res)=>{
    try{
        const sites = await Site.find()
        res.json(sites)
    }catch(err){
        res.send('err'+err)
    }
    //res.send('hadil haddoula')
})

router.post('/', async(req,res)=>{
    const site = new Site({
        name: req.body.name, 
        ville: req.body.ville ,
        region: req.body.region,
        pays: req.body.pays,
        // lat:  req.body.lat,
        // long: req.body.long,
        // type: req.body.type,
        // date_ouv:  req.body.date_ouv,
        // date_fer: req.body.date_fer,
        // jour_ferm: req.body.jour_ferm,
        // jour_ouv: req.body.jour_ouv,
        // Description: req.body.Description,
        // heure_ferm: req.body.heure_ferm,
        // heure_ouv: req.body.heure_ouv,
    })
    try {
       const a1= await site.save()
       res.json(a1)
    }catch(err){
        res.send("error "+err)
    }
})


module.exports  = router