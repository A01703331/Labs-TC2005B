const express = require('express');
const router = express.Router();

const otherController = require('../controller/Lab13.controller')

router.get('/Lab1', otherController.lab1);

router.get('/logout', otherController.logout);

module.exports = router;