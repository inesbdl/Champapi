const { Champi } = require('./champiModel');
const { Scientifiques } = require('./scientifiquesModel');
const { Effets } = require('./effetsModel');

Scientifiques.hasMany(Champi, { as: "decouvertes" });
Champi.belongsTo(Scientifiques);

Champi.belongsToMany(Effets, { through: "champiEffets" });
Effets.belongsToMany(Champi, { through: "champiEffets" });

module.exports = { Champi, Scientifiques, Effets };
