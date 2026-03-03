const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: "amsoft07@gmail.com",
    pass: "itmauzpebnudygjp",
  },
});


async function sendEmail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: '"Library Solutions" <amsoft07@gmail.com>',
      to: to,
      subject: subject,
      text: text,
      html: html
    });
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = {
  sendEmail
};