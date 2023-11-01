const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'barolo1903',
    host: 'localhost',
    port: 5432,
    database: 'lasacaciasdb'
});

module.exports = pool;
