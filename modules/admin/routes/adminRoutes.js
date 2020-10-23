const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

router.post('/login', adminController.signIn);
router.post('/logout', adminController.signOut);

module.exports = router;