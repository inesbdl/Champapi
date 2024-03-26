
const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Champi = db.define("champi", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    famille: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apparence: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    saveur: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
});

module.exports = { Champi };