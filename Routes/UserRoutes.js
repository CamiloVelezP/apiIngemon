const express = require("express");
const router = express.Router();
const User = require("../database/models/User");
const bcrypt = require("bcryptjs")
const saltRounds = 10;
let hashedPassword;


router.post("/crearusuario", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, encryptedPassword) => {
        if (err) {
            res.json(err)
        } else {
            hashedPassword = encryptedPassword;
        }
    })
    User.create({
        name: req.body.name,
        password: hashedPassword,
        gold: req.body.gold
    }).then(post => {
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

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            name: req.body.name,
        }
    }).then(post => {
        bcrypt.compare(req.body.password, post.getDataValue("password"), (err, result) => {
            if (err) {
                res.send(err);
            } else {

            }
        })
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


router.post("/comprar", (req, res) => {
    User.update({
        gold: req.body.gold
    }, {
        where: {
            id: req.body.id
        }
    }).then(post => {
        res.json({
            codigo: "209",
            mensaje: "compra exitosa",
            respuesta: post
        })
    })
})
module.exports = router;