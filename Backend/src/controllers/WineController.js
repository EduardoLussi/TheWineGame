// Import models
const Wine = require('../models/Wine');
const db = require('../db/db');

module.exports = {
    async getWine(req, res) {
        // Get barcode from header
        const { barcode } = req.headers;
        
        // Get wine with barcode
        await db.sync();
        const wine = await Wine.findOne({ where: { barcode } });

        return res.json(wine);
    }
}