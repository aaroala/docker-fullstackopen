const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

if (MONGO_URL && mongoose.connection.readyState == 0)
{
  console.log("connection to server")
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB server');
      // Your code to interact with the database goes here
    })
    .catch(error => {
      console.error('Error connecting to MongoDB:', error);
    });
}
else  {
  console.log(MONGO_URL)
  console.log(`Mongoose connection state is ${mongoose.connection.readyState}`)
  // Your code to interact with the database goes here
}


module.exports = {
  Todo
}
