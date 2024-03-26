const { Champi } = require('/champiModel');
const { Scientifiques } = require('/scientifiquesModel');
const { Effets } = require('/effetsModel');

scientifiques.hasMany(champi, { as: "decouvertes" });
champi.belongsTo(scientifiques);

champi.belongToMany(effets, { through: "champiEffets" });
effects.belongToMany(champi, { through: "champiEffets" });

module.exports = { Champi, Scientifiques, Effets };
