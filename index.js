// npm i nodemailer
// npm i dotenv
import 'dotenv/config';
import nodemailer from "nodemailer";
// npm i path
// npm i url
import path from "path";                   //for __dirname
import { join } from "path";                   //for __dirname
import { dirname } from "path";                   //for __dirname
import { fileURLToPath } from "url";              //for __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));              //for __dirname

// create tranporter--> copy from https://nodemailer.com/
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.MAILID,
        pass: process.env.PASSWORD, //use gmail APP PASSWORD (not gmail passowrd)
    },
});

const mailOptions = {
    from: {
        name: "Akshita Pathak",
        address: process.env.MAILID,
    }, // sender address
    to: "apathak1_be22@thapar.edu,s-1547@smartwonderschool.com", // list of receivers goes
    subject: "Sending email using nodemailer npm package", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    // cc:[],
    // bcc:[],
    attachments: [
        {
            filename: 'data.txt',
            path: path.join(__dirname, 'data.txt'),      //using path module
            contentType: 'text/plain',
        },
        {
            filename: 'image.png',
            path: path.join(__dirname, 'image.png'),      //using path module
            contentType: 'image/png',
        },
    ]//array of objects
}

const sendMail = async function (tranporter, mailOptions) {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        // alert('Email sent successfully!')
    } catch (error) {
        console.log(error);
    }
}

sendMail(transporter, mailOptions);