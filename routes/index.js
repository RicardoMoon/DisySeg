var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/attacked', function(req, res, next) {
    res.render('redirect');
});


module.exports = router;
