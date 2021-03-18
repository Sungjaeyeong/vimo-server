var express = require('express');
var router = express.Router();

const { postsController } = require('../controller');

router.post('/login', postsController.login.post);

router.post('/logout', postsController.logout.post);

router.post('/postmemo', postsController.postmemo.post);

router.post('/postuservideos', postsController.postuservideos.post);

router.post('/signup', postsController.signup.post);

router.post('/sociallogin', postsController.sociallogin.post);

module.exports = router;