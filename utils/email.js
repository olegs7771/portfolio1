const nodemailer = require('nodemailer');

const sendMail = async (sender) => {
  //////////////////////////////////////////////
  // transport mailtrap in DEV
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  /////////////////////////////////////////////////
  try {
    let info = await transporter.sendMail({
      from: sender.email, // sender address
      to: 'olegs7771@gmail', // list of receivers
      subject: `Message from ${sender.name}`, // Subject line
      text: 'text', // plain text body
      html: `<b>${sender.message}</b>`, // html body
    });
    console.log('Message sent: %s', info.messageId);
  } catch (err) {
    console.log('error in mailer', err);
  }
};

module.exports = sendMail;
