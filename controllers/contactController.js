const sendMail = require('../utils/email');

const contact = async (req, res, next) => {
  console.log('req.body', req.body);

  //VALIDATE FIELDS NAME & EMAIL
  if (req.body.name === '') {
    return res.status(400).json({ name: 'Name empty' });
  }
  if (req.body.email === '') {
    return res.status(400).json({ email: 'Email empty' });
  }
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(req.body.email)) {
    return res.status(400).json({ email: 'Wrong email format' });
  }

  const payload = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  console.log('payload', payload);
  try {
    sendMail(payload, (err, data) => {
      if (err) {
        return res.status(400).json({
          // status: `Error to send email. Sorry for inconvenience.
          //     Please contact me by other means.`,
          status: err,
        });
      }

      res.status(200).json({
        status: 'Message was sent. Thank you!',
        response: `${data}`,
      });
    });
  } catch (err) {
    console.log('err :', err.response);
  }
};

module.exports = { contact };
