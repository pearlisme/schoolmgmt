var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ebbas' });
   res.sendFile('../html/home.html');
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Ebbas' });
});
router.get('/about', function(req, res, next) {
  res.render('aboutus', { title: 'Ebbas ' });
});

router.get('/add', function(req, res, next) {
 res.render('add_student', { title: 'Ebbas ' });
});
module.exports = router;
