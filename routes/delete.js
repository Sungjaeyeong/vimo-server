var express = require('express');
var router = express.Router();

const { deletesController } = require('../controller');

router.delete('/memo', deletesController.memo.delete);

module.exports = router;