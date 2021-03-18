var express = require('express');
var router = express.Router();

const { getsController } = require('../controller');

router.get('/getmainpage', getsController.getmainpage.get);

router.get('/getmypage', getsController.getmypage.get);

router.get('/getvideosearch', getsController.getvideosearch.get);

module.exports = router;