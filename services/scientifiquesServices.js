const {Scientifiques, Champi} = require('../models/associations.js');

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
    const scientifiques = await Scientifiques.findAll({ where , include: { model: Champi, as: decouvertes }});
    if (scientifiques) {
        return scientifiques;
    }
    else {
        return null;
    }
}

async function addScientifiqueChampi(idChampis, scientifiqueId) {
    const scientifique = await Scientifiques.findByPk(scientifiqueId);
    const tabIdChampis = idChampis.ids
    tabIdChampis.forEach(async champiId => {
        const isChampi = await Champi.findByPk(champiId)
        if (isChampi) {
            // verifier si champi et scientifique deja associés
            const isScientifiqueChampi = await Scientifiques.findAll({ where: { id: scientifiqueId } , include: { model: Champi, where: { id: champiId } } });
            if (isScientifiqueChampi.lenght > 0) {
                return null;
            }
            else {
                return scientifique.addChampi(champiId);
            }
        }
    })
}

module.exports = { createScientifique, getScientifiqueById, getAllScientifiques, addScientifiqueChampi };