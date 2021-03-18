var express = require('express');
var router = express.Router();

const { patchsController } = require('../controller');

router.patch('/patchmemo', patchsController.patchmemo.patch);

router.patch('/patchuserinfo', patchsController.patchuserinfo.patch);

router.patch('/patchuservideos', patchsController.patchuservideos.patch);

module.exports = router;