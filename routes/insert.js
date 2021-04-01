var express = require('express');
var router = express.Router();

const { insertsController } = require('../controller');

router.post('/uservideos', insertsController.uservideos.post);

router.post('/memo', insertsController.memo.post);

module.exports = router;