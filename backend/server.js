import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import connectDB from "./config.js";

// Import routes
import authRoutes from "./routes/auth.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
   🤖 Serve static files from frontend directory
============================ */
app.use(express.static(path.join(__dirname, "../frontend")));

// Chat API
app.post("/chat", async (req, res) => {
  try {
    const { text, lang, context } = req.body;

    const response = await axios.post(process.env.N8N_WEBHOOK_URL, {
      message,
      location
    });
    // Simple scheme matching
    const schemes = [
      { name: "PM KISAN", state: "All", benefits: "₹6000/year", applyLink: "https://pmkisan.gov.in" },
      { name: "YSR Rythu Bharosa", state: "Andhra Pradesh", benefits: "Financial support", applyLink: "https://ysrrythubharosa.ap.gov.in" },
      { name: "Pradhan Mantri Awas Yojana", state: "All", benefits: "Housing subsidy", applyLink: "https://pmaymis.gov.in" },
      { name: "MGNREGA", state: "All", benefits: "100 days wage employment", applyLink: "https://nrega.nic.in" },
      { name: "Ayushman Bharat", state: "All", benefits: "Health coverage ₹5L", applyLink: "https://www.pmjay.gov.in" },
      // Add more from the JSON
    ];

    const lowerText = text.toLowerCase();
    const matched = schemes.find(s => lowerText.includes(s.name.toLowerCase()));

    let reply;
    if (matched) {
      reply = `${matched.name}: ${matched.benefits}. Apply at ${matched.applyLink}`;
    } else {
      reply = "I'm sorry, I couldn't find information on that. Please ask about government schemes like PM Kisan.";
    }

    res.json({
      reply: reply
    });

  } catch (error) {
    console.error('Error:', error.message);
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
app.get("/api", (req, res) => {
  res.send("🚀 API is running...");
});

/* ============================
   🌐 Serve Frontend
============================ */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

/* ============================
   🚀 Server Start
============================ */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});