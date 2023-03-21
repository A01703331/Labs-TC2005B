const express = require('express');
const router = express.Router();

const marioKartController = require('../controller/Lab13.controller')

router.post('/charSelect', marioKartController.post_Char);

router.post('/kartSelect', marioKartController.post_Kart);

router.post('/mapSelect', marioKartController.post_BMap);

router.post('/confirm', marioKartController.post_confirm);

module.exports = router;