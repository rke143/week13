const {Pool} = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const itemsPool = new Pool({
    connectionString: process.env.DBConnectionsString,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = itemsPool;