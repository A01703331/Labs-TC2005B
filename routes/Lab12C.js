const express = require('express');
const router = express.Router();

const mainController = require('../controller/Lab13.controller')

router.get('/Lab1', mainController.lab1);

router.get('/list', mainController.addChar);

router.post('/file', mainController.postFile);

module.exports = router;