var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

router.get('/aboutme', function(req, res, next) {
  res.render('index', { 
    title: 'About Me'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me'
  });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects'
  });
});

module.exports = router; //MVC ----> Model View Controller
// model ----> to connect our logic
// view ----> what you see (pages)
// controller ----> logic behind routes

