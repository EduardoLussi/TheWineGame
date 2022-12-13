const express = require('express');
const multer = require('multer');

// Import controllers
const WineController = require('./controllers/WineController');

const routes = new express.Router();

// Multer for artwork storage
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, __dirname + '/db/img/artworks'); },
    filename: (req, file, cb) => { cb(null, file.originalname); }
});
const imageUpload = multer({ storage: imageStorage });

// Get wine information
routes.get('/wine', WineController.getWine);
routes.get('/wineImage', WineController.getWineImage);
routes.post('/artwork', imageUpload.single('upload'), (req, res) => { res.send(); });

module.exports = routes;