const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Feedback", feedbackSchema);

//controller/feedbackController.js
const Feedback = require("../models/Feedback");
const nodemailer = require("nodemailer");

const sendFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const feedback = new Feedback({ name, email, message });
    await feedback.save();

    // Setup Gmail Transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,  // your gmail
        pass: process.env.GMAIL_PASS   // your gmail app password
      }
    });

    // Mail options
    let mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself (admin)
      subject: "New Feedback Received",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send Mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Feedback submitted & email sent successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { sendFeedback };
