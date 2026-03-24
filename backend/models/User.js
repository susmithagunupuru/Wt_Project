import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, sparse: true },
  state: { type: String, trim: true },
  occupation: { type: String, trim: true },
  password: { type: String, required: true, minlength: 6 },
  otp: String,
  otpExpiry: Date
}, { timestamps: true });

export default mongoose.model("User", userSchema);
