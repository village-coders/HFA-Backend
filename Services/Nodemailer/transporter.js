const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config()
const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    // service: "gmail",
    secure: false,
    port: 587,
    auth: {
        user: process.env.Nodemailer_User,
        pass: process.env.Nodemailer_Pass
    },
    tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
    },

})
module.exports = transporter

transporter.verify((err,success)=>{
    if(success){
        console.log("Ready to send email");        
    }else{
        console.log(err);        
    }
})