const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDB', {useNewUrlParser: true});
mongoose.set('strictQuery', true);

const TestSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;