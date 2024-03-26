

async function addChampiEffet (effets, id){
    const champiParam = await Champi.findByPk(id);
    effets.forEach(async effet =>{
        const effetIdParam = await Effets.findByPk(effet)
        const champiEffet = await Effets.findAll();
    })
}