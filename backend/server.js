import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Chat API
app.post("/chat", async (req, res) => {
  try {
    const { message, location } = req.body;

    // Send to n8n
    const response = await axios.post(process.env.N8N_WEBHOOK_URL, {
      message,
      location
    });

    // Send back to frontend
    res.json({
      reply: response.data
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});