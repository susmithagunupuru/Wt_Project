import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import connectDB from "./config.js";

// Import routes
import authRoutes from "./routes/auth.js";

dotenv.config();

/* ============================
   🔗 MongoDB Connection 
============================ */
connectDB();

const app = express();

/* ============================
   🌐 Middleware - CORS for frontend
============================ */
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));
app.use(express.json());

/* ============================
   🤖 Chat API (Existing)
============================ */
app.post("/chat", async (req, res) => {
  try {
    const { message, location } = req.body;

    const response = await axios.post(process.env.N8N_WEBHOOK_URL, {
      message,
      location
    });

    res.json({
      reply: response.data
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

/* ============================
   🔐 Auth Routes (Step 5 MAIN PART)
============================ */
// All auth APIs will be:
// POST /api/auth/register
// POST /api/auth/login
// POST /api/auth/send-otp
// POST /api/auth/verify-otp

app.use("/api/auth", authRoutes);

/* ============================
   🧪 Test Route (Optional but useful)
============================ */
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

/* ============================
   🚀 Server Start
============================ */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});