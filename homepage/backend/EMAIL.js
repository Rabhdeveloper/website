// Server (Node.js example)
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/submit-query', (req, res) => {
  const { email, query } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'agent-email@example.com',
    subject: 'Product Query Submitted',
    text: `Query from: ${email}\n\n${query}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email.');
    }
    res.status(200).send('Query submitted successfully!');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
