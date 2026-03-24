const otpGenerator = require("otp-generator");

function generateOTP() {
  return otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    specialChars: false,
    upperCase: false
  });
}

module.exports = { generateOTP };