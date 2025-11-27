const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ to, subject, text }) {
  try {
    await resend.emails.send({
      from: "TattooDreamers <noreply@tattoo.com>",
      to,
      subject,
      text,
    });
    console.log("Email sent successfully");
  } catch (err) {
    console.log("Email failed:", err.message);
  }
}

module.exports = sendEmail;
