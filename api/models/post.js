const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {useNewUrlParser: true});
mongoose.set('strictQuery', false);

/**
 * Post Schema
 * @type {mongoose.Schema}
 * @property {String} title - The title of the post.
 * @property {String} description - The description of the post.
 * @property {String} content - The content of the post, as in the body.
 * @property {String} author - The author of the post.
 * @property {String} date - The date of the post, in the format of DD/MM/YYYY.
 * @property {String} headerImage - The header image URL.
 * @property {String} category - The category of the post.
 * @property {Boolean} published - True if the post is published, false if it's archived.
 */
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