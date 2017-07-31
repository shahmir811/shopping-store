var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/shopping',
};

mongoose.connect(db.localhost, { useMongoClient: true }); // Connect to Database

module.exports = {
  mongoose
};
