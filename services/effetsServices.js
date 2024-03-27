const {Effets, Champi} = require('../models/associations.js');

async function createEffet(effet) {
    effet.nom = effet.nom.toUpperCase();
    return await Effets.create(effet);
}

async function getEffetById(id) {
    const effet = await Effets.findByPk(id, {
        include: {
            model: Champi,
        }
    })
    if (effet) {
        return effet.toJSON();
    }
    else {
        return null;
    }
}

async function getAllEffets(criterias = {}) {
    const where = {};
    if (criterias.nom) {
        where.nom = criterias.nom;
    }
    if (criterias.mortel) {
        where.mortel = criterias.mortel;
    }
    const effets = await Effets.findAll({ where }, {
        include: {
            model: Champi,
        }
    });
    if (effets) {
        return effets;
    }
    else {
        return null;
    }
}


async function addEffetChampi(idChampis, effetId) {
    const effet = await Effets.findByPk(effetId);
    const tabIdChampis = idChampis.ids
    tabIdChampis.forEach(async champiId => {
        const isChampi = await Champi.findByPk(champiId)
        if (isChampi) {
            // verifier si champi et effet deja associés
            const isEffetChampi = await Effets.findAll({ where: { id: effetId } , include: { model: Champi, where: { id: champiId } } });
            if (isEffetChampi.lenght > 0) {
                return null;
            }
            else {
                return effet.addChampi(champiId);
            }
        }
    })
}

module.exports = { createEffet, getEffetById, getAllEffets, addEffetChampi };