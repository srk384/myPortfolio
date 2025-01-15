import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json(); // Parse the request body
    const { name, email, message } = body;

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email.' }),
      { status: 500 }
    );
  }
}
