import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "nidhee.dubey@ennomail.com",
    pass: "Noida1234!",
  },
});

export default transporter;