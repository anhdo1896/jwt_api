var express = require('express');
var router = express.Router();
var user = require('./../controllers/user.controller')
var validation = require('./../validation/user.validation')
/* GET users listing. */

router.post('/register',validation.register,user.register);
router.get('/login',validation.login,user.login);
router.get('/posts',validation.posts,user.posts)

module.exports = router;
