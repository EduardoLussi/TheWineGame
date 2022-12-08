const Sequelize = require('sequelize');
const db = require('../db/db');

const Wine = db.define('wine', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    producer: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    brand: {
        type: Sequelize.TEXT
    },
    appellation: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    country: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    region: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    vintage: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    barcode: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = Wine;