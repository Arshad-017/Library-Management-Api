const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log(`✅ Connected to MongoDB`))
.catch(err => console.error('❌ MongoDB connection error:', err));
}


module.exports = connectDB;