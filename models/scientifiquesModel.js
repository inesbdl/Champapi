
const { db } = require("./db");
const { DataTypes } = require("sequelize")

const scientifiques = db.define("scientifiques", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    centre: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
});

module.exports = { scientifiques };