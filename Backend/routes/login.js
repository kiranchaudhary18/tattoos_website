// const { MongoClient, ObjectId } = require("mongodb");

// const dotenv = require("dotenv");

// dotenv.config();
// const uri = process.env.MONGODB_URI;
// const dbName = "userDB";

// let db, usersCollection;

// async function connectDB() {
//     if (!db) {
//         const client = new MongoClient(uri, { tls: true });
//         await client.connect();
//         console.log("✅ Connected to MongoDB");

//         db = client.db(dbName);
//         usersCollection = db.collection("users");
//     }
//     return { db, usersCollection };
// }

// module.exports = { connectDB, ObjectId };



// const express = require("express");
// const router = express.Router();
// const Login = require("../../Backend/models/Login");

// // 🟢 POST: Create a new user (without password)
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, mobile, designPreference, appointment } = req.body;

//     const newUser = new Login({
//       name,
//       email,
//       mobile,
//       designPreference,
//       appointment,
//     });

//     const savedUser = await newUser.save();
//     res.status(201).json({ message: "User created successfully", user: savedUser });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // 🟢 GET: Get all users (optional)
// router.get("/", async (req, res) => {
//   try {
//     const users = await Login.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;












const express = require("express");
const router = express.Router();
const Login = require("../../Backend/models/Login");
const sendEmail = require("../utils/sendEmail"); // <-- Background email function (optional)

// 🟢 POST: Create a new user fast
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, designPreference, appointment } = req.body;

    // Save user
    const newUser = new Login({
      name,
      email,
      mobile,
      designPreference,
      appointment,
    });

    const savedUser = await newUser.save();

    // 🚀 Instant response -> frontend will submit fast
    res.status(201).json({
      saved: true,
      user: savedUser,
      message: "User created successfully",
    });

    // 📨 Send email in background (NO WAITING)
    sendEmail({
      to: email,
      subject: "Tattoo Studio Appointment",
      text: `Hello ${name}, we have received your request.`,
    }).catch((err) => {
      console.log("Email sending failed:", err.message);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


// 🟢 GET Users
router.get("/", async (req, res) => {
  try {
    const users = await Login.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
