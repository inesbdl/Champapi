const { Champi, Effets } = require('../models/associations.js');

async function createChampi(champi) {
    champi.nom = champi.nom.toUpperCase();
    champi.famille = champi.famille.toUpperCase();
    return await Champi.create(champi);
}

async function getChampiById(id) {
    const champi = await Champi.findByPk(id, {
        include: {
            model: Effets,
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
            console.log("effet : " + effetId);
            console.log("champi : " + champiId);

            const isChampiEffet = await Champi.findAll({ where: { id: champiId } , include: { model: Effets, where: { id: effetId } } });
            if (isChampiEffet.lenght > 0) {
                console.log(isChampiEffet);
                return null;
            }
            else {
                return champi.addEffet(effetId);
            }
        }
    })
}




module.exports = { createChampi, getChampiById, getAllChampis, addChampiEffet };