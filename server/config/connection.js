const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://jpohahau:yTQ6h1B7lx8MExVi@hobbies.fajgo.mongodb.net/?retryWrites=true&w=majority',
  () => {
    console.log("connected")
  },
  e =>console.error(e),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// mongodb://127.0.0.1:27017/hobbies
// IWZyk7HMxNrj4j9w

// jpohahau
// yTQ6h1B7lx8MExVi

// mongodb+srv://jonathanp:IWZyk7HMxNrj4j9w@cluster0.0o3nh.mongodb.net/
// mongodb+srv://jonathanp:IWZyk7HMxNrj4j9w@cluster0.0o3nh.mongodb.net/
// mongodb+srv://jonathanp:IWZyk7HMxNrj4j9w@cluster0.0o3nh.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://jonathanp:IWZyk7HMxNrj4j9w@cluster0.0o3nh.mongodb.net/?retryWrites=true&w=majority
module.exports = mongoose.connection;