const {Scientifiques} = require('../models/associations.js');

async function createScientifique(scientifique) {
    scientifique.nom = scientifique.nom.toUpperCase();
    scientifique.prenom = scientifique.prenom.toUpperCase();
    scientifique.centre = scientifique.centre.toUpperCase();
    return await Scientifiques.create(scientifique);
}

async function getScientifiqueById(id) {
    const scientifique = await Scientifiques.findByPk(id)
    if (scientifique) {
        return scientifique.toJSON();
    }
    else {
        return null;
    }
}

async function getAllScientifiques(criterias = {}) {
    const where = {};
    if (criterias.nom) {
        where.nom = criterias.nom;
    }
    if (criterias.prenom) {
        where.prenom = criterias.prenom;
    }
    if (criterias.centre) {
        where.centre = criterias.centre;
    }
    const scientifiques = await Scientifiques.findAll({ where });
    if (scientifiques) {
        return scientifiques;
    }
    else {
        return null;
    }
}

module.exports = { createScientifique, getScientifiqueById, getAllScientifiques };