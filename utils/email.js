const nodemailer = require('nodemailer');

const sendMail = async (sender, cb) => {
  //////////////////////////////////////////////
  let transporter;
  if (process.env.NODE_ENV === 'production') {
    // SENDGRID in PROD
    // transporter = nodemailer.createTransport({
    //   service: 'Sendgrid',
    //   auth: {
    //     user: process.env.SENDGRID_USERNAME,
    //     pass: process.env.SENDGRID_PASSWORD,
    //   },
    // });
    transporter = nodemailer.createTransport({
      host: process.env.GMAIL_HOST,
      port: process.env.GMAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  } else {
    // transport mailtrap in DEV
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  /////////////////////////////////////////////////
  try {
    let info = await transporter.sendMail({
      from: sender.email, // sender address
      to: 'olegs7771@gmail.com', // list of receivers
      subject: `Message from ${sender.email}`, // Subject line
      text: 'text', // plain text body
      html: `<b>${sender.message}</b>`, // html body
    });
    cb(null, info.messageId);
    console.log('Message sent: %s', info.messageId);
  } catch (err) {
    console.log('error in mailer', err);
    cb(err, null); //create object with key 'error' for cb
  }
};

module.exports = sendMail;
