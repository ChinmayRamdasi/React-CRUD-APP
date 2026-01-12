const mysql = require('mysql2/promise');


const connectDB=async()=>{
    try{
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'ind123',
            database: 'sample'
        });
        console.log('Connected to MySQL database');
        return db
            }
            catch(err){
        db.connect((err) => {
            if (err) {
                console.error('Database connection failed:', err);
                return;
            }
        });
            }
}

module.exports = {connectDB};
