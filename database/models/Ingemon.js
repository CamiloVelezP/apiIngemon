const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Ingemon extends Model { }
Ingemon.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phenotype: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    maxHealth: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'ingemon'
});

module.exports = Ingemon;