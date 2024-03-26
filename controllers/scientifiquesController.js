const scientifiqueService = require('../services/scientifiqueServices');

async function getScientifiqueById(req, res) {
    try {
        const id = req.params.id;
        const scientifique = await scientifiqueService.getScientifiqueById(id);
        if (scientifique) {
            res.json(scientifique);
        }
        else {
            res.json({ "error": `scientifique ${id} not found :(` });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

async function getAllScientifiques(req, res) {
    try {
        const { nom, prenom, centre } = req.query;
        const scientifiques = await scientifiqueService.getAllScientifiques({ nom, prenom, centre });
        res.json(scientifiques);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

async function createScientifique(req, res) {
    try {
        const scientifique = await scientifiqueService.createScientifique(req.body);
        res.json(scientifique);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getScientifiqueById, getAllScientifiques, createScientifique };