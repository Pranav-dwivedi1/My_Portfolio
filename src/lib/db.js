import mysql from 'mysql2/promise';

// Log database configuration (without sensitive data)
console.log('Database Configuration:', {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'portfolio',
    database: process.env.DB_NAME || 'my_portfolio',
    // Don't log password
});

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'portfolio',
    password: process.env.DB_PASSWORD || 'Pranav@123',
    database: process.env.DB_NAME || 'my_portfolio',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the connection and verify table
pool.getConnection()
    .then(async (connection) => {
        try {
            // Check if table exists
            const [tables] = await connection.query(
                "SHOW TABLES LIKE 'contact_form'"
            );

            if (tables.length === 0) {
                console.log('Creating contact_form table...');
                await connection.query(`
                    CREATE TABLE IF NOT EXISTS contact_form (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        company VARCHAR(255) NOT NULL,
                        services VARCHAR(255),
                        mobileNo VARCHAR(10) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        subservices VARCHAR(255),
                        message TEXT,
                        fromPage VARCHAR(255),
                        ipAddress VARCHAR(45),
                        fromSource VARCHAR(255),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                `);
                console.log('contact_form table created successfully');
            } else {
                console.log('contact_form table exists');
            }
            console.log('Database connected successfully');
        } catch (error) {
            console.error('Error during table verification:', error);
            console.error('Error details:', {
                message: error.message,
                code: error.code,
                errno: error.errno,
                sqlState: error.sqlState,
                sqlMessage: error.sqlMessage
            });
        } finally {
            connection.release();
        }
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
        console.error('Connection error details:', {
            message: err.message,
            code: err.code,
            errno: err.errno,
            sqlState: err.sqlState,
            sqlMessage: err.sqlMessage
        });
    });

export default pool;
