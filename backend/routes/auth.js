import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// Debug log for all incoming requests
router.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log("📥 Request body:", req.body);
  next();
});

// REGISTER - Enhanced with full debugging
router.post("/register", async (req, res) => {
  try {
    console.log("🔐 Starting registration process...");
    
    const { name, mobile, phone, state, occupation, email, password } = req.body;
    const userPhone = phone || mobile; // Handle both frontend 'mobile' and backend 'phone'

    // Validation
    if (!name || !mobile || !password) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ 
        success: false, 
        msg: "Please provide name, mobile, and password" 
      });
    }

    // Check if user exists by mobile
    console.log(`🔍 Checking if user exists: ${mobile}`);
    const userExists = await User.findOne({ phone: userPhone });
    if (userExists) {
      console.log("❌ User already exists:", mobile);
      return res.status(400).json({ 
        success: false, 
        msg: "Mobile number already registered" 
      });
    }

    // Hash password
    console.log("🔐 Hashing password...");
    const hashedPass = await bcrypt.hash(password, 12);
    console.log("✅ Password hashed");

    // Create and save user
    const user = new User({
      name: name.trim(),
      phone: userPhone,
      state: state?.trim() || "",
      occupation: occupation?.trim() || "",
      email: email?.trim() || "",
      password: hashedPass
    });

    console.log("💾 Saving user to MongoDB...");
    const savedUser = await user.save();
    console.log("✅ User Saved:", savedUser._id);

    res.status(201).json({ 
      success: true, 
      msg: "User registered successfully",
      userId: savedUser._id 
    });

  } catch (err) {
    console.error("💥 Registration Error:", err.message);
    console.error("Full error:", err);
    
    res.status(500).json({ 
      success: false, 
      msg: "Server error during registration. Please try again.",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// GET all users - For testing
router.get("/all-users", async (req, res) => {
  try {
    console.log("👥 Fetching all users...");
    const users = await User.find({}, '-password'); // exclude password
    console.log(`✅ Found ${users.length} users`);
    
    res.json({
      success: true,
      count: users.length,
      users: users.map(u => ({
        id: u._id,
        name: u.name,
        mobile: u.mobile,
        state: u.state,
        occupation: u.occupation,
        email: u.email,
        createdAt: u.createdAt
      }))
    });
  } catch (err) {
    console.error("💥 Error fetching users:", err.message);
    res.status(500).json({ 
      success: false, 
      msg: "Error fetching users" 
    });
  }
});

export default router;
