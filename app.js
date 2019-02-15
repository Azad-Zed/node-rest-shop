const express = require('express');

const app = express();

const morgan = require('morgan');

const porductRoutes = require('./api/routes/products');

const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

//Routes which should handle requests
app.use('/products', porductRoutes);

app.use('/orders', orderRoutes);

//middleware to custom error handling
app.use((req,res,next) =>{
    const error = new Error('Not Found in This App!');
    error.status = 404;
    next(error);
});

//middleware to default error handling
app.use((error,req,res,next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;