const express = require('express');

// Import controllers
const WineController = require('./controllers/WineController');

const routes = new express.Router();

// Get wine information
routes.get('/wine', WineController.getWine)

module.exports = routes;