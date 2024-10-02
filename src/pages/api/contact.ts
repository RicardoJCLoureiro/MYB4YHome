import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Use environment variables for email configuration
const {
  EMAIL_USER,
  EMAIL_PASSWORD,
  EMAIL_HOST,
  EMAIL_PORT,
} = process.env;

// Function to get a greeting based on the current time of day
function getGreeting(): string {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

// Function to get the current timestamp in 'dd/mm/yyyy hh:mm:ss' format
function getCurrentTimestamp(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// Function to replace newlines with <br> tags
function formatMessage(message: string): string {
    return message.replace(/\n/g, '<br>');
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: EMAIL_PORT === '465', // Use secure connection for port 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    // Create the email body content
    const emailContent = `
      ${getGreeting()},
        <br /><br />
      Below you can find the copy of the request for contact made at ${getCurrentTimestamp()}:
        <br />
        <br /><br />
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="border: 1px solid #ccc; padding: 8px;"><strong>Name:</strong></td>
          <td style="border: 1px solid #ccc; padding: 8px;">${name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 8px;"><strong>Email:</strong></td>
          <td style="border: 1px solid #ccc; padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 8px;"><strong>Phone:</strong></td>
          <td style="border: 1px solid #ccc; padding: 8px;">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 8px;"><strong>Message:</strong></td>
          <td style="border: 1px solid #ccc; padding: 8px;">${formatMessage(message)}</td>
        </tr>
      </table>
        <br />
      We will get in touch with you no longer than 24 hours after this request.
        <br /><br />
      Best regards,
      <br /><br /><br />
      MYB4Y Team
    `;

    // Define the email options
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER, // Send to the email specified in environment variable
      cc: email, // CC the user's email
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent, // Use HTML for the email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: 'Failed to send the message. Please try again later.' });
  }
}
