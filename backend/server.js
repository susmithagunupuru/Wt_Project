import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from frontend directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend")));

// Chat API
app.post("/chat", async (req, res) => {
  try {
    const { text, lang, context } = req.body;

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

    // Send back to frontend
    res.json({
      reply: reply
    });

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});