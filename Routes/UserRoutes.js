const express = require("express");
const router = express.Router();
const User = require("../database/models/User");


router.post("/crearusuario", (req, res) => {
    User.create({
        name: req.body.name,
        password: req.body.password,
        gold: req.body.gold
    }).then(post => {
        console.log(post.toJSON())
        const respuestaJson = JSON.stringify(post.toJSON())
        res.json({
            codigo: "201",
            mensaje: "Usuario creado correctamente",
            respuesta: respuestaJson
        })
    }).catch(err => {
        res.send(err)
    })
})

router.post("/buscarusuario", (req, res) => {
    User.findOne({
        where: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(post => {
        const respuestaJson = JSON.stringify(post.toJSON())
        res.json({
            codigo: "205",
            mensaje: "Login correcto",
            respuesta: respuestaJson
        })
    }).catch((err => {
        res.send(err)
    }))
})
module.exports = router;