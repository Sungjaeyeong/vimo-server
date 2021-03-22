var express = require('express');
var router = express.Router();

const { oauthsController } = require('../controller');

router.post('/google', oauthsController.google.post);

router.post('/kakao', oauthsController.kakao.post);

module.exports = router;