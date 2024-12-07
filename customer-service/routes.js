const express = require('express');
const router = express.Router();
const customers = require('./customers.json');
const fs = require('fs');

router.get('/', (req, res) => {
    res.json(customers);
});

router.post('/', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    const newCustomer = {
        id: customers.length + 1,
        name,
        email
    };

    customers.push(newCustomer);

    fs.writeFile(__dirname + '/customers.json', JSON.stringify(customers, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving customer.' });
        }

        res.status(201).json(newCustomer);
    });
});

module.exports = router;
