require("dotenv").config();
const transporter = require("./transporter");

const sendSuccessfulFeedbackEmail = (email, userFirstName) => {
  const options = {
    to: email,
    subject: "✅ Feedback Submitted Successfully",
    from: `"Halal Food Authority" <anike@halalfoodauthority.com>`,
    replyTo: "no-reply@halalfoodauthority.com",
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6; padding: 20px;">
        <p style="margin-bottom: 16px;">Hi ${userFirstName},</p>

        <p style="margin-bottom: 16px;">
          Thank you for your feedback. It has been sent successfully and our team will review it shortly.
        </p>

        <p style="margin-bottom: 16px;">
          We appreciate you taking the time to help us improve.
        </p>

        <p style="font-weight: bold;">HFA IT Team</p>
      </div>
    `,
  };

  transporter.sendMail(options, (err) => {
    if (err) {
      console.error("Email sending failed:", err.message);
    } else {
      console.log("User feedback confirmation email sent successfully");
    }
  });
};

module.exports = sendSuccessfulFeedbackEmail;
