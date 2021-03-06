const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/yummy-grocery',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;