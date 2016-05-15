var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', pageName : 'index' });
});

router.get('/coaches', function(req, res) {
    res.render('coaches', { title: 'coaches', pageName : 'coaches' });
});

router.get('/register', function(req, res) {
    res.render('register', { title: 'register', pageName : 'register' });
});

router.get('/dashboard', function(req, res){
    res.render('dashboard', { title: 'dashboard', pageName : 'dashboard' });
});

router.get('/lobby', function(req, res){
    res.render('lobby', { pageName: 'lobby'});
});

router.get('/chat', function(req, res){
    res.render('chat', { pageName: 'chat'});
});

router.post('/signup', function(req, res){
    console.log(req.body);
})

module.exports = router;
