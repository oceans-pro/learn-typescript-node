const express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});


export = router;
// module.exports = router ts不会将其当作一个模块
