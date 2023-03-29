const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const marioKartController = require('../controller/Lab13.controller')

router.post('/charSelect', isAuth, marioKartController.post_Char);

router.post('/kartSelect', isAuth, marioKartController.post_Kart);

router.post('/mapSelect', isAuth, marioKartController.post_BMap);

router.post('/confirm', isAuth, marioKartController.post_confirm);

module.exports = router;