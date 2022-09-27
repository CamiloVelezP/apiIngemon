const express = require("express");
const router = express.Router();
const Ingemon = require("../database/models/Ingemon");




router.post("/buscaringemon", (req,res) =>{
    Ingemon.findAll({
        where:{
            user_id:req.body.user_id
        }
    }).then(post=>{
        let m = ""
        post.forEach(element => {
            m = m + JSON.stringify(element.toJSON()) + "!";
        });
        res.json({
            codigo:"210",
            mensaje:"Ingemones encontrados correctamente",
            respuesta:m
        })
    }).catch(err => {
        res.send(err)
    })
})


router.post("/crearingemon", (req,res)=>{
    console.log("holoi")
    Ingemon.create({
        name:req.body.name,
        phenotype: req.body.phenotype,
        maxHealth: req.body.maxHealth,
        user_id: req.body.user_id
    }).then(post =>{
        res.json({
            codigo: "207",
            mensaje: "ingemon creado correctamente",
            respuesta: post
        })
    })
})







module.exports = router;