var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET for /users/view . */
router.get('/add', function(req, res, next) {
  res.send('User View');
});

/* GET for /users/view . */
router.get('/modify', function(req, res, next) {
  res.send('User View');
});

/* GET for /users/view . */
router.get('/delete', function(req, res, next) {
  res.send('User View');
});

/* GET for /users/view . */
router.get('/export', function(req, res, next) {
  res.send('User View');
});

module.exports = router;
