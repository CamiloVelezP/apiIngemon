const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model { }
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gold: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;