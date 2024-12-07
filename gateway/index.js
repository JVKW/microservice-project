const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const PRODUCT_SERVICE_URL = 'http://localhost:4001/products';
const ORDER_SERVICE_URL = 'http://localhost:4002/orders';
const CUSTOMER_SERVICE_URL = 'http://localhost:4003/customers';

app.get('/products', async (req, res) => {
    const response = await axios.get(PRODUCT_SERVICE_URL);
    res.json(response.data);
});

app.post('/orders', async (req, res) => {
    try {
        const response = await axios.post(ORDER_SERVICE_URL, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error creating order.' });
    }
});

app.get('/customers', async (req, res) => {
    const response = await axios.get(CUSTOMER_SERVICE_URL);
    res.json(response.data);
});

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Gateway running on port ${PORT}`)
});
