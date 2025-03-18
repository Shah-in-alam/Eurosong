var express = require('express');
var router = express.Router();
// const cors =require('cors');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eurosong v1.0.0'});
});
module.exports = router;
