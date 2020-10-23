const express = require('express');
const router = express.Router();
const authorizer = require('../../../middleware/authorize');
const productController = require('../controller/product');

router.get('/get', authorizer.authorize, productController.getProducts);
router.post('/add', authorizer.authorize, productController.addProduct);
router.post('/edit', authorizer.authorize, productController.editProduct);

module.exports = router;