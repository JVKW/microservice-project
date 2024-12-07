const express = require('express');
const productRoutes = require('./routes');

const app = express();
app.use(express.json());

app.use('/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`)
});
