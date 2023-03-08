const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/Lab1', (request, response, next) => {
    response.render((path.join(__dirname, '..', 'views', 'index')), {data: 'value'});
});

module.exports = router;