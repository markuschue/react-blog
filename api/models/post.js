const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {useNewUrlParser: true});
mongoose.set('strictQuery', true);

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  author: String,
  date: String,
  imgURL: String,
  category: String
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;