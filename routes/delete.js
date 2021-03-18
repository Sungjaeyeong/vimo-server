var express = require('express');
var router = express.Router();

const { deletesController } = require('../controller');

router.delete('/deletememo', deletesController.deletememo.delete);

module.exports = router;