import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function POST(request) {
    let connection;
    try {
        const formData = await request.json();
        console.log('Received form data:', formData);

        // Validate required fields
        if (!formData.name || !formData.email || !formData.mobileNo) {
            console.log('Validation failed:', { name: formData.name, email: formData.email, mobileNo: formData.mobileNo });
            return NextResponse.json(
                {
                    success: false,
                    message: 'Name, email, and mobile number are required'
                },
                { status: 400 }
            );
        }

        // Get a connection from the pool
        try {
            connection = await pool.getConnection();
            console.log('Database connection acquired');
        } catch (connError) {
            console.error('Database connection error:', connError);
            return NextResponse.json(
                {
                    success: false,
                    message: 'Database connection error',
                    error: connError.message
                },
                { status: 500 }
            );
        }

        // Execute the insert query (use `contact_form` table instead of `portfolio_leads`)
        const query = `INSERT INTO contact_form 
            (name, company, services, mobileNo, email, subservices, message, fromPage, ipAddress, fromSource) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            formData.name,
            formData.company || null,
            formData.services || null,
            formData.mobileNo,
            formData.email,
            formData.subservices || null,
            formData.message || null,
            formData.fromPage || null,  // fromPage instead of fromSource for page tracking
            formData.ipAddress || null,
            formData.fromSource || null
        ];

        console.log('Executing query:', query);
        console.log('With values:', values);

        try {
            const [result] = await connection.execute(query, values);
            console.log('Query executed successfully:', result);

            // Verify the insert
            const [insertedRow] = await connection.query(
                'SELECT * FROM contact_form WHERE id = ?',
                [result.insertId]
            );
            console.log('Inserted row:', insertedRow[0]);

            // Return success response
            return NextResponse.json({
                success: true,
                message: 'Form submitted successfully',
                data: {
                    id: result.insertId,
                    ...formData
                }
            });
        } catch (queryError) {
            console.error('Query execution error:', queryError);
            return NextResponse.json(
                {
                    success: false,
                    message: 'Error executing database query',
                    error: queryError.message,
                    sqlMessage: queryError.sqlMessage,
                    sqlState: queryError.sqlState,
                    errno: queryError.errno
                },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('Error submitting form:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Error submitting form',
                error: error.message,
                stack: error.stack
            },
            { status: 500 }
        );
    } finally {
        // Always release the connection back to the pool
        if (connection) {
            connection.release();
            console.log('Database connection released');
        }
    }
}
