var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page */
router.get('/helloworld', function(req, res, next){
  res.render('helloworld', {title: 'Hello, world!'});
});

router.get('/todolist', function(req, res) {
    var db = req.db;
    var collection = db.get('todocollection');
    collection.find({},{},function(e,docs){
        res.render('todolist', {
            "todolist" : docs
        });
    });
});

/* POST to Add User Service */
router.post('/addtodo', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var todoLabel = req.body.todoLabel;

    // Set our collection
    var collection = db.get('todocollection');

    // Submit to the DB
    collection.insert({
        "label" : todoLabel,
        "state" : false
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("todolist");
        }
    });
});


module.exports = router;
