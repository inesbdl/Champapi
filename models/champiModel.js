
const { db } = require("./db");
const { DataTypes } = require("sequelize")

const champi = db.define("champi", {
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
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
});

module.exports = { champi };