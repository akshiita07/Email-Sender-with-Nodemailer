# Email-Sender-with-Nodemailer

### Overview
The Email Sender with Nodemailer project is designed to send emails programmatically using the Nodemailer library in a Node.js environment. This project demonstrates how to set up a transporter, configure email options, and send emails with attachments using environment variables for security. Below are key components and code snippets essential for understanding and implementing the project.

### Key Components and Code Snippets

1. **Setup and Dependencies**
   Begin by installing the required packages:
   ```bash
   npm install nodemailer dotenv path url
   ```

2. **Environment Configuration**
   Create a `.env` file to securely store your email credentials:
   ```plaintext
   MAILID=your-email@gmail.com
   PASSWORD=your-app-password
   ```

3. **Importing Required Modules**
   Import the necessary modules and configure `__dirname` to manage file paths:
   ```javascript
   import 'dotenv/config';
   import nodemailer from 'nodemailer';
   import { dirname } from 'path';
   import { fileURLToPath } from 'url';
   import { join } from 'path';

   const __dirname = dirname(fileURLToPath(import.meta.url));
   ```

4. **Creating the Transporter**
   Set up the Nodemailer transporter using your Gmail credentials:
   ```javascript
   const transporter = nodemailer.createTransport({
       service: 'gmail',
       host: 'smtp.gmail.com',
       auth: {
           user: process.env.MAILID,
           pass: process.env.PASSWORD, // Use Gmail app password (not Gmail password)
       },
   });
   ```

5. **Defining Mail Options**
   Configure the email details, including sender, recipients, subject, body, and attachments:
   ```javascript
   const mailOptions = {
       from: {
           name: 'Akshita Pathak',
           address: process.env.MAILID,
       }, // Sender address
       to: 'apathak1_be22@thapar.edu,s-1547@smartwonderschool.com', // List of receivers
       subject: 'Sending email using nodemailer npm package', // Subject line
       text: 'Hello world?', // Plain text body
       html: '<b>Hello world?</b>', // HTML body
       attachments: [
           {
               filename: 'data.txt',
               path: join(__dirname, 'data.txt'), // Using path module
               contentType: 'text/plain',
           },
           {
               filename: 'image.png',
               path: join(__dirname, 'image.png'), // Using path module
               contentType: 'image/png',
           },
       ], // Array of objects
   };
   ```

6. **Sending the Email**
   Create an asynchronous function to send the email using the configured transporter and mail options:
   ```javascript
   const sendMail = async function(transporter, mailOptions) {
       try {
           await transporter.sendMail(mailOptions);
           console.log('Email sent successfully!');
       } catch (error) {
           console.log(error);
       }
   };

   sendMail(transporter, mailOptions);
   ```

### Detailed Explanation

1. **Environment Variables**: Using environment variables (`dotenv` package) ensures that sensitive information like email credentials are not hardcoded in the source code. This approach enhances security by keeping the credentials hidden from the codebase.

2. **Transporter Configuration**: The transporter object is configured to use Gmail's SMTP server. The `auth` object within the transporter requires a valid Gmail email address and an app password (generated from your Google account).

3. **Mail Options**: The `mailOptions` object specifies the email's sender, recipients, subject, body, and attachments. The `attachments` array allows for multiple file attachments, each defined by a filename, path, and content type.

4. **File Paths**: The `path` module ensures that file paths are correctly resolved regardless of the operating system. This prevents issues related to incorrect file paths, which can occur if paths are hardcoded.

5. **Error Handling**: The `sendMail` function includes a try-catch block to handle any errors that occur during the email sending process. This ensures that the program can gracefully handle failures and log appropriate error messages.

### Conclusion
The Email Sender with Nodemailer project provides a robust template for sending emails with attachments in a Node.js environment. By following the outlined steps and code snippets, you can easily set up and customize this project to fit your specific email-sending needs. This project is particularly useful for automating email notifications and integrating email functionality into your applications.
