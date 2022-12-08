const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/db/wines.db'
});

module.exports = sequelize;