const express = require('express');

// Import controllers
const WineController = require('./controllers/WineController');

const routes = new express.Router();

// Get wine information
routes.get('/wine', WineController.getWine)
routes.get('/wineImage', WineController.getWineImage)

module.exports = routes;