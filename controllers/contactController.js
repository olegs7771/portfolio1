const sendMail = require('../utils/email');

const contact = async (req, res, next) => {
  console.log('req.body', req.body);

  try {
    sendMail({
      name: req.body.name,
      email: req.body.email,
      message: req.body.text,
    });
    res
      .status(200)
      .json({ status: 'success', response: 'Email was sent successfully' });
  } catch (err) {
    console.log('err :', err);
  }
};

module.exports = { contact };
