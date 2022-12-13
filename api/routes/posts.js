const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');

router.route('/')
  .get(function(req, res, next) {
    Post.find(function(err, posts) {
      if (err)
        return next(err);
      else
        res.status(200).json(posts);
    });
  })

  .post(function(req, res, next) {
    const post = new Post({
      name: req.body.name,
      age: req.body.age
    });
    post.save().then(() => {
      res.status(200).send('Success uploading new post.');
    });
  })

  .delete(function(req, res, next) {
    Post.deleteMany({}, function (err) {
      if (err)
        return next(err);
      else 
        res.status(200).send('Success deleting all posts.');
    });
  });

router.route('/:id')
  .get(function(req, res, next) {
    Post.findById(req.params.id, function(err, post) {
      if (err)
        return next(err);
      else if (post)
        res.status(200).json(post);
      else
        res.status(404).send('Post not found');
    });
  })

  .put(function(req, res) {
    Post.replaceOne(
      {_id: req.params.postID},
      {$set: req.body},
      function (err) {
        if (err)
          next(err);
        else
          res.status(200).send('Post replaced successfully.');
        res.status(404).send('No post found');
      }
    );
  })

  .patch(function(req, res) {
    Post.updateOne(
      {_id: req.params.postID},
      req.body.patch,
      function (err) {
        if (err)
          next(err);
        else
          res.status(200).send('Post patched successfully.');
        res.status(404).send('No post found');
      }
    );
  })

  .delete(function(req, res) {
    Post.deleteOne({_id: req.params.postID}, function (err) {
      if (err)
        next(err);
      else
        res.status(200).send('Post deleted successfully.');
      res.status(404).send('No post found');
    });
  });

module.exports = router;