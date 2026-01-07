const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

exports.sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate(async (snap) => {
    const data = snap.data();

    const mailOptions = {
      from: "Thinkbiz Website <YOUR_GMAIL@gmail.com>",
      to: "YOUR_PERSONAL_EMAIL@gmail.com",
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
  });
