const express = require('express');
const customerRoutes = require('./routes');

const app = express();
app.use(express.json());

app.use('/customers', customerRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Customer service running on port ${PORT}`);
});
