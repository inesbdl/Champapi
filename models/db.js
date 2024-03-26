const Sequelize = require("sequelize")

const db = new Sequelize("sqlite:database.sqlite3", {

});

module.exports = { db };