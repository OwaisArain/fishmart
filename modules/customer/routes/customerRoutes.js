const express = require('express');
const router = express.Router();
const authorizer = require('../../../middleware/authorize');
const customerController = require('../controller/customer');

router.get('/get', authorizer.authorize, customerController.getCustomers);
router.post('/add', authorizer.authorize, customerController.addCustomer);
router.post('/edit', authorizer.authorize, customerController.editCustomer);

module.exports = router;