const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config(); // ✅ VERY IMPORTANT

const connectDB = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });

    console.log('✅ Connected to MySQL database');
    return db;
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    throw err; // important so app knows connection failed
  }
};

module.exports = { connectDB };
