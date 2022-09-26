const express = require("express");
const router = express.Router();
const Ingemon = require("../database/models/Ingemon");




router.post("/buscaringemon", (req,res) =>{
    Ingemon.findAll({
        where:{
            user_id:req.body.user_id
        }
    }).then(post=>{
        res.json({
            codigo:"210",
            mensaje:"Ingemones encontrados correctamente",
            respuesta:post
        })
        }).catch(err => {
        res.send(err)
    })
})







module.exports = router;