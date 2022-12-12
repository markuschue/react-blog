const express = require('express');
const router = express.Router();
const Test = require('../models/test.js');

router.get('/', function(req, res, next) {
  Test.find({}, function(err, tests) {
    if (err)
      return next(err);
    else
      res.json(tests);
  });
});

router.get('/:id', function(req, res, next) {
  Test.findById(req.params.id, function(err, post) {
    if (err)
      return next(err);
    else if (post)
      res.json(post);
    else
      res.status(404).send('Not found');
  });
});

router.post('/', function(req, res, next) {
  const test = new Test({
    name: req.body.name,
    age: req.body.age
  });
  test.save().then(() => {
    res.redirect('/test/');
  });
});

/** 
 *  PUT, PATCH and DELETE not implemented, as this is a test model
 *  **/

module.exports = router;