const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
//   
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "147899f082f96f",
      pass: "334cd097cfcfc1"
    }
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};