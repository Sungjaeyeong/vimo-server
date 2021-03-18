var express = require('express');
var router = express.Router();

const { updatesController } = require('../controller');

router.patch('/userinfo', updatesController.userinfo.patch);

router.patch('/uservideos', updatesController.uservideos.patch);

router.patch('/memo', updatesController.memo.patch);

module.exports = router;