import nodemailer, { Mail } from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

interface EmailDetails {
  sender: Mail.Address;
  recipients: Mail.Address[];
  subject: string;
  message: string;
}
export const sendMail = async (details: EmailDetails) => {
  const { sender, recipients, subject, message } = details;
  return await transport.sendMail({
    from: sender,
    to: recipients,
    subject,
    html: message,
    text: message,
  });
};
