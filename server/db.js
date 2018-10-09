const mongoose = require('mongoose');

// after creating datatbase name in mLab we use the MongoDB URI which is provided to us 
// let DB_URL = 'mongodb://admin:150782bp@ds031865.mlab.com:31865/users-list'

let DB_URL = process.env.DB_URL ||'mongodb://localhost:27017/fed-mongoose' ;




mongoose.connect(DB_URL);

// mongoose.connect('mongodb://localhost:27017/fed-mongoose', {
//     useNewUrlParser: true
//   });
module.exports = mongoose;