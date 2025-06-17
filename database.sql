-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS my_portfolio;
USE my_portfolio;

-- Create the portfolio_leads table
CREATE TABLE IF NOT EXISTS contact_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    services VARCHAR(255),
    mobileNo VARCHAR(20) NOT NULL,  
    email VARCHAR(255) NOT NULL,
    subservices VARCHAR(255),
    message TEXT,
    ipAddress VARCHAR(45),
    fromSource VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 