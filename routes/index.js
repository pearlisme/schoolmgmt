var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ebbas' });
   //res.sendFile('../../views/home.html');
});

module.exports = router;
