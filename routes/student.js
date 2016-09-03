var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET for /users/view . */
router.get('/add', function(req, res, next) {
 res.render('add_student', { title: 'Ebbas ' });
});

module.exports = router;
