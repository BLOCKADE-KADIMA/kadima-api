const express = require('express');

const controller = require('../controllers/accounts');

const router = express.Router({});

router.post('/register/:role', controller.register);

router.post('/login', controller.login);

router.post('/employee-login', controller.employeeLogin);

module.exports = router;
