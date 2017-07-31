var express = require('express');
var router = express.Router();
var {Product} = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find().then((docs) => {
    res.render('shop/index', { title: 'Express', products: docs });

  }).catch((err) => {
    res.status(404).send(err); //404 - Not Found
  });

});

module.exports = router;
