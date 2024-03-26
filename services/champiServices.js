const { Champi } = require('../models/associations.js');

async function createChampi(champi) {
    champi.nom = champi.nom.toUpperCase();
    champi.famille = champi.famille.toUpperCase();
    return await Champi.create(champi);
}

async function getChampiById(id) {
    const champi = await Champi.findByPk(id)
    if (champi) {
        return champi.toJSON();
    }
    else {
        return null;
    }
}

async function getAllChampis(criterias = {}) {
    const where = {};
    if (criterias.nom) {
        where.nom = criterias.nom;
    }
    if (criterias.famille) {
        where.famille = criterias.famille;
    }
    const champis = await Champi.findAll({ where });
    if (champis) {
        return champis;
    }
    else {
        return null;
    }
}

module.exports = { createChampi, getChampiById, getAllChampis };