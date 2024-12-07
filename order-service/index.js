const express = require('express');
const orderRoutes = require('./routes');
const app = express();

app.use(express.json());

app.use('/orders', orderRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`)
});
