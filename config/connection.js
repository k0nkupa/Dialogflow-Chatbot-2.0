var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@my-mongodb-pva7g.mongodb.net/test');

const paperSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  code: String,
  name: String,
  pre: String,
  co: String,
  location: String,
  semester: String,
  year: String,
  yearstudy: String,
  core: String
});

module.exports = mongoose.model('Paper', paperSchema);
