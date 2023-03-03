var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/year', function(req, res, next) {
  const currentYear = new Date().getFullYear();
  res.json(`The current year is ${currentYear}.`) ;
});



module.exports = router;
