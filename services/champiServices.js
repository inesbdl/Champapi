const { Champi, Effets } = require('../models/associations.js');

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

async function addChampiEffet (idEffets, champiId){
    const champi = await Champi.findByPk(champiId);
    const where = {};
    where.champiId = champiId;
    idEffets.forEach(async effetId =>{
        const isEffet = await Effets.findByPk(effetId)
        if (isEffet){
            // verifier si champi et effet deja associés
            where.effetId = effetId;
            const isChampiEffet = await Champi.findAll({where}, {include : { model : Effets}});
            if (isChampiEffet){
                console.log("Ce champignon et cet effet sont déjà associés");
                return null;
            }
            else {
                champi.addEffet(effetId);
            }
        }
    })
}




module.exports = { createChampi, getChampiById, getAllChampis, addChampiEffet};