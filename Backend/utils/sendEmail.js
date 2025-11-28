const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ to, subject, text }) {
  try {
    await resend.emails.send({
      from: "TattooDreamers <kiran.chaudhary.cg@gmail.com>",   // FIXED ✔
      to,
      subject,
      text,
    });

    console.log("📩 Email sent successfully");
    return true;

  } catch (err) {
    console.log("❌ Email failed:", err);
    return false;
  }
}

module.exports = sendEmail;
