const { Champi, Effets, Scientifiques } = require('../models/associations.js');

async function createChampi(champi) {
    champi.nom = champi.nom.toUpperCase();
    champi.famille = champi.famille.toUpperCase();
    return await Champi.create(champi);
}

async function getChampiById(id) {
    const champi = await Champi.findByPk(id, {
        include: {
            model: Effets,
            model: Scientifiques
        }
    });
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
    const champis = await Champi.findAll({
        where,
        include: {
            model: Effets,
            model: Scientifiques
        }
    });
    if (champis) {
        return champis;
    }
    else {
        return null;
    }
}

async function addChampiEffet(idEffets, champiId) {
    const champi = await Champi.findByPk(champiId);
    const tabIdEffets = idEffets.ids
    tabIdEffets.forEach(async effetId => {
        const isEffet = await Effets.findByPk(effetId)
        if (isEffet) {
            // verifier si champi et effet deja associés
            const isChampiEffet = await Champi.findAll({ where: { id: champiId }, include: { model: Effets, where: { id: effetId } } });
            if (isChampiEffet.lenght > 0) {
                return null;
            }
            else {
                return champi.addEffet(effetId);
            }
        }
    })
}

async function addChampiScientifique(idScientifique, champiId) {
    const champi = await Champi.findByPk(champiId);
    const isScientifique = await Scientifiques.findByPk(idScientifique)
    if (isScientifique) {
        // verifier si champi et effet deja associés
        const isChampiScientifique = await Champi.findAll({ where: { id: champiId }, include: { model: Scientifiques, where: { id: idScientifique } } });
        if (isChampiScientifique.lenght > 0) {
            return null;
        }
        else {
            return champi.addScientifique(idScientifique);
        }
    }
}



module.exports = { createChampi, getChampiById, getAllChampis, addChampiEffet, addChampiScientifique };