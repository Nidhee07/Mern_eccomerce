const sendEmail = require('../helper/sendEmail'); // Adjust the path accordingly

// Successful payment callback using Braintree
const handleSuccessfulPayment = async (req, res) => {
  try {
    // Handle successful payment logic here

    // Send email notification
    const to = 'nicenidhee01@gmail.com'; // Recipient's email
    const subject = 'Payment Successful';
    const text = 'Your payment was successful. Thank you!';

    await sendEmail(to, subject, text);

    res.json({ success: true, message: 'Payment successful. Email notification sent.' });
  } catch (error) {
    console.error('Error handling successful payment:', error);
    res.status(500).json({ error: 'Error handling successful payment' });
  }
};

// Use this callback for handling successful payment with Braintree
// For example, after a successful payment with Braintree
handleSuccessfulPayment(req, res);
