const express = require("express")
const mysql = require ("mysql")

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

app.post("/crearusuario",(req,res) =>{
    res.send(req.body)
});

//revisar conexion
conn.connect(error => {
    if (error) throw error;
    console.log("Conexion establecida");
});

app.listen(PORT, ()=>console.log(`server running on port ${PORT}`));
