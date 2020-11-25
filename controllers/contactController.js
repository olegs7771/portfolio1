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

  const payload = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.text,
  };

  try {
    sendMail(payload, (cb) => {
      console.log('cb', cb);
      if (cb.code === 'EAUTH') {
        return res.status(400).json({ status: 'Error to send mail' });
      }
      res
        .status(200)
        .json({ status: 'success', response: 'Email was sent successfully' });
    });
  } catch (err) {
    console.log('err :', err);
  }
};

module.exports = { contact };
