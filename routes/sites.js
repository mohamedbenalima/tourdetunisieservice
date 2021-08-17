const express = require('express')
const router = express.Router()
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
         cb(null,'./uploads/');
       
    },
    filename: function(req, file, cb){
        // cb(null,new Date().toISOString() + file.originalname);
        cb(null,  file.originalname);
    }
})

const upload = multer({storage: storage})

const Site = require('../models/sites')

router.get('/', async (req,res)=>{
    try{
        const sites = await Site.find()
        res.json(sites)
    }catch(err){
        res.send('err'+err)
    }

})

router.get('/region/:rg', async (req,res)=>{
    var query = { region: req.params.rg  }; // /^m/
    try{
        const sites = await Site.find(query)
        res.json(sites)
    }catch(err){
        res.send('err'+err)
    }

})

router.get('/epoque/:ep', async (req,res)=>{
    var query = { epoque: req.params.ep }; // /^m/
    try{
        const sites = await Site.find(query)
        res.json(sites)
    }catch(err){
        res.send('err'+err)
    }

})

router.get('/patrimoine/:pat', async (req,res)=>{
    var query = { patrimoine: req.params.pat }; // /^m/
    try{
        const sites = await Site.find(query)
        res.json(sites)
    }catch(err){
        res.send('err'+err)
    }

})

router.post('/post', upload.single('siteImage'), async(req,res)=>{
    console.log(req.file)
    const site = new Site({
        name: req.body.name, 
        ville: req.body.ville ,
        region: req.body.region,
        pays: req.body.pays,
        lat:  req.body.lat,
        long: req.body.long,
        type: req.body.type,    
        date_ouv:  req.body.date_ouv,
        date_fer: req.body.date_fer,
        jour_ferm: req.body.jour_ferm,
        jour_ouv: req.body.jour_ouv,
        description: req.body.Description,
        heure_ferm: req.body.heure_ferm,
        heure_ouv: req.body.heure_ouv,
        epoque: req.body.epoque, 
        image: req.file.path,
        //image: req.body.image, 
        panoramaPhoto: req.body.panoramaPhoto, 
        patrimoine: req.body.patrimoine
    })
    try {
       const a1= await site.save()
       res.status(201).json(a1)
    }catch(err){
        res.send("error "+err)
    }
})


module.exports  = router