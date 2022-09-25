const express = require("express")
const mysql = require ("mysql")
const sequelize = require("./database/db");
const User = require("./database/models/User");

const bodyParser = require("body-parser")

const PORT = process.env.PORT  || 3050;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"game_test"
});

//Ruta get
app.get("/", (req, res) => {
    User.create({
        name: "test",
        password: "test",
        gold: 100
    }).then(user => {
        res.json(user);
    });
});

app.post("/crearusuario",(req,res) =>{
    res.send(req.body)
});

//revisar conexion
conn.connect(error => {
    if (error) throw error;
    console.log("Conexion establecida");
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)

    //sequelize.authenticate().then(() => {
    sequelize.sync({force: false}).then(() => {
        console.log("Conexion establecida con la base de datos");
    }).catch(err => {
        console.log("Error al conectar con la base de datos", err);
    });
    });
