const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');
const multer = require('multer');
const unlink = require('fs').unlink;

// Handling file uploads with Multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().getTime() + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  }
});

// RESTful Routes for /api/posts
router.route('/')
  .get(function(req, res, next) {
    Post.find({}).sort('-date').exec(function(err, posts) {
      if (err)
        return next(err);
      else
        res.status(200).json(posts);
    });
  })

  .post(upload.single('headerImage'), function(req, res, next) {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      author: req.body.author,
      date: req.body.date,
      headerImage: req.file.path,
      category: req.body.category,
      published: req.body.published
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

  .put(upload.single('headerImage'), function(req, res, next) {
    let oldImage = '';
    Post.findById(req.params.id, function(err, post) {
      if (err)
        next(err);
      else if (post)
        oldImage = post.headerImage;
    });
    req.body = {...req.body, headerImage: req.file.path};
    Post.replaceOne(
      {_id: req.params.id},
      req.body,
      function (err) {
        if (err) {
          next(err);
        } else {
          console.log('oldimage: ' + oldImage);
          if (oldImage !== '')
            unlink(oldImage, err => {
              if (err) next(err);
            });
          res.status(200).send('Post replaced successfully.');
        }
      }
    );
  })

  .patch(function(req, res, next) {
    Post.updateOne(
      {_id: req.params.id},
      {$set: req.body},
      function (err) {
        if (err)
          next(err);
        else
          res.status(200).send('Post patched successfully.');
      }
    );
  })

  .delete(function(req, res, next) {
    let oldImage = '';
    Post.findById(req.params.id, function(err, post) {
      if (err)
        next(err);
      else if (post)
        oldImage = post.headerImage;
      else
        res.status(404).send('Post not found');
    });
    Post.deleteOne({_id: req.params.id}, function (err) {
      if (err) {
        next(err);
      } else {
        if (oldImage !== '')
          unlink(oldImage, err => {
            if (err) next(err);
          });
        res.status(200).send('Post deleted successfully.');
      }
    });
  });

module.exports = router;