const express = require('express');
const router = express.Router();

const marioKartController = require('../controller/Lab13.controller')

router.get('/charSelect', marioKartController.get_VChar);

router.post('/kartSelect', marioKartController.get_VKart);

router.post('/mapSelect', marioKartController.get_VMap);

router.post('/confirm', marioKartController.Vconfirm);

module.exports = router;