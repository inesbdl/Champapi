const { champi } = require('/champiModel');
const { scientifiques } = require('/scientifiquesModel');
const { effets } = require('/effetsModel');

scientifiques.hasMany(champi, { as: "decouvertes"});
champi.belongsTo(scientifiques);

champi.belongToMany(effets, { through: "champiEffets"});
effects.belongToMany(champi, { through: "champiEffets"});

module.exports = { champi, scientifiques, effets };
