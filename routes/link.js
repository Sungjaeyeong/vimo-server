var express = require('express');
var router = express.Router();

const { linksController } = require('../controller');

router.get('/mainpage', linksController.mainpage.get);

router.get('/mypage', linksController.mypage.get);

router.get('/searchvideos', linksController.searchvideos.get);

module.exports = router;