const express = require('express');

const app = express();

const porductRoutes = require('./api/routes/products');

const orderRoutes = require('./api/routes/orders');

app.use('/products', porductRoutes);

app.use('/orders', orderRoutes);

module.exports = app;