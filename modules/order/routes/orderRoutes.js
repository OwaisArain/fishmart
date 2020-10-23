const express = require('express');
const router = express.Router();
const authorizer = require('../../../middleware/authorize');
const orderController = require('../controller/order');

router.get('/get', authorizer.authorize, orderController.getOrders);
router.post('/add', authorizer.authorize, orderController.addOrder);
router.post('/edit', authorizer.authorize, orderController.editOrder);

module.exports = router;