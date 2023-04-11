const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, content) => {
  console.log("[Before send your email]");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "thetheu3838@gmail.com", pass: "abnflqhvqpejtbrk" },
  });

  const mailOptions = {
    from: "thetheu3838@gmail.com",
    to,
    subject,
    text: content,
  };

  return transporter.sendMail(mailOptions, (err, info) => {
    if (err) return { err };
    else return { response: info.response };
  });
};

module.exports = { sendEmail };
