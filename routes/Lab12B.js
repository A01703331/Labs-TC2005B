const express = require('express');
const router = express.Router();

const marioKartController = require('../controller/Lab13.controller')

router.get('/charSelect', marioKartController.get_BChar);

router.post('/kartSelect', marioKartController.get_BKart);

router.post('/mapSelect', marioKartController.get_BMap);

router.post('/confirm', marioKartController.Bconfirm);

module.exports = router;