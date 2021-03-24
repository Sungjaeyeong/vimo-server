var express = require('express');
var router = express.Router();

const { usersController } = require('../controller');

router.post('/login', usersController.login.post);

router.post('/logout', usersController.logout.post);

router.post('/signup', usersController.signup.post);

router.post('/sociallogin', usersController.sociallogin.post);

router.get('/refreshtokenrequest', usersController.refreshtokenrequest.get);

module.exports = router;