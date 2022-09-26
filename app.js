const express = require("express")
const mysql = require ("mysql")
const sequelize = require("./database/db");
const User = require("./database/models/User");

const bodyParser = require("body-parser")

const PORT = process.env.PORT  || 3050;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api", require("./Routes/UserRoutes"))
app.use("/ingemon", require("./Routes/IngemonRoutes"))

//revisar conexion
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)

    //sequelize.authenticate().then(() => {
    sequelize.sync({force: false}).then(() => {
        console.log("Conexion establecida con la base de datos");
    }).catch(err => {
        console.log("Error al conectar con la base de datos", err);
    });
    });
