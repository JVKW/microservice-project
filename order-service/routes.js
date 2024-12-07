const express = require('express');
const router = express.Router();
const orders = require('./orders.json');
const fs = require('fs');

router.get('/', (req, res) => {
    res.json(orders);
});

router.post('/', (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        customerId: req.body.customerId,
        productId: req.body.productId
    };
    orders.push(newOrder);

    fs.writeFile(__dirname + '/orders.json', JSON.stringify(orders, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving order.' });
        }
    });

    res.status(201).json(newOrder);
});

module.exports = router;
