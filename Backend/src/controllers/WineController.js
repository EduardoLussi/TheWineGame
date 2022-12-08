// Import models
const Wine = require('../models/Wine');
const db = require('../db/db');

module.exports = {
    async getWine(req, res) {
        // Get barcode from header
        const { barcode } = req.headers;
        if (!barcode) return;
        
        // Get wine with barcode
        await db.sync();
        const wine = await Wine.findOne({ where: { barcode } });

        return res.json(wine);
    },
    async getWineImage(req, res) {
        // Get barcode from header
        const { barcode } = req.headers;

        res.sendFile(`${require('path').dirname(require.main.filename)}/db/img/wines/${barcode}.jpeg`);
    }
}