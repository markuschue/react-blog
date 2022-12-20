const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {useNewUrlParser: true});
mongoose.set('strictQuery', false);

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  author: String,
  date: String,
  headerImage: String,
  category: String,
  published: Boolean
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;