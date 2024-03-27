const effetService = require('../services/effetsServices');

async function getEffetById(req, res) {
    try {
        const id = req.params.id;
        const effet = await effetService.getEffetById(id);
        if (effet) {
            res.json(effet);
        }
        else {
            res.json({ "error": `effet ${id} not found :(` });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

async function getAllEffets(req, res) {
    try {
        const { nom, mortel } = req.query;
        const effets = await effetService.getAllEffets({ nom, mortel });
        res.json(effets);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

async function createEffet(req, res) {
    try {
        const effet = await effetService.createEffet(req.body);
        res.json(effet);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function addEffetChampi (req, res){
    try {
        const id = req.params.id;
        const effetChampi = await effetService.addChampiEffet(req.body,id);
        res.json(effetChampi);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = { getEffetById, getAllEffets, createEffet, addEffetChampi };