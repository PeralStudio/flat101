const router = require('express').Router();
const Items = require('../../models/Items');

router.get('/', async (req, res) => {
    try {
        const allItems = await Items.find();
        res.json(allItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;