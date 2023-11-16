const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://jonathanp:IWZyk7HMxNrj4j9w@cluster0.0o3nh.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// mongodb://127.0.0.1:27017/hobbies
// IWZyk7HMxNrj4j9w
module.exports = mongoose.connection;