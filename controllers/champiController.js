const champiService = require('../services/champiServices');

async function getChampiById(req, res) {
    try {
        const id = req.params.id;
        const champi = await champiService.getChampiById(id);
        if(champi){
            res.json(champi);
        }
        else {
            res.json({"error": `champi ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function getAllChampis(req, res) {
    try{
        const { nom, famille } = req.query;
        const champis = await champiService.getAllChampis({ nom, famille});
        res.json(champis);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function createChampi(req, res) {
    try {
        const champi = await champiService.createChampi(req.body);
        res.json(champi);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function addEffet (req, res){
    try {
        const id = req.params.id;
        const champiEffet = await champiService.addEffet(req.body,id);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = { getChampiById, getAllChampis, createChampi, addEffet };