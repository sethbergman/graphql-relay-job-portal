const mongoose = require('mongoose');
const mdb = 'mongodb://seth:austin@ds237815.mlab.com:37815/mongograph'; //'mongodb://localhost/jobsite';
 
module.exports = function initialize(app) {
  const mdb = 'mongodb://seth:austin@ds237815.mlab.com:37815/mongograph'; //'mongodb://localhost/jobsite';

   mongoose.connect(mdb, {
     useMongoClient: true
   });
  mongoose.set('debug', true);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
  // db.on('connecting', () => {
  //   console.log('connecting to MongoDB...');
  // });
  // db.on('error', (error) => {
  //   console.error(`Error in MongoDb connection: ${error}`);
  //   mongoose.disconnect();
  // });
  // db.on('connected', () => {
  //   app.enable('mongodb');
  //   console.log('MongoDB connected!');
  // });
  // db.once('open', () => {
  //   console.log('MongoDB connection opened!');
  // });
  // db.on('reconnected', () => {
  //   console.log('MongoDB reconnected!');
  // });
  // db.on('disconnected', () => {
  //   app.disable('mongodb');
  //   console.log('MongoDB disconnected!');
  //   mongoose.connect(app.mdb, { server: { auto_reconnect: true } });
  // });
  mongoose.connect(app.mdb, { server: { auto_reconnect: true } });
};
