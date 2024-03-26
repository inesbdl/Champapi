
const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Effets = db.define("effets", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mortel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
});

module.exports = { Effets };