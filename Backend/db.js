const sql = require('mssql');
require("dotenv").config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: {
        encrypt: false, // Set to true if using Azure SQL
        trustServerCertificate: true // Allow self-signed certs
    }
};

// Connect to DB
sql.connect(config)
    .then(() => console.log("Connected to SQL Server ✅"))
    .catch(err => console.error("Database connection failed: ", err));

module.exports = sql;
