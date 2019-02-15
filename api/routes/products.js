const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === '1'){
        res.status(200).json({
            message: 'Valid porductId'
        });
    }else{
        res.status(200).json({
            message: 'Invalid productId'
        });
    }
    
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product Updated!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product deleted!'
    });
});

module.exports = router;