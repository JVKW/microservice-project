const express = require('express');
const router = express.Router();
const products = require('./products.json');

router.get('/', (req, res) => {
    res.json(products);
});

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    product ? res.json(product) : res.status(404).json({ error: 'Product not found' });
});

module.exports = router;
