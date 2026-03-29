# 🌾 SahayakAI - Rural Empowerment Portal

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-v20-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-009EDB.svg)](https://mongodb.com/)

**SahayakAI** is a modern, multilingual web application designed to empower rural India by providing easy access to government schemes, job opportunities, eligibility checkers, nearby services, and an AI chatbot. Built as a Government of India initiative simulator.

## ✨ Features

| Feature | Description |
|---------|-------------|
| **🏦 500+ Schemes** | PM Kisan, MGNREGA, PMAY, Ayushman Bharat & more |
| **✅ Eligibility Checker** | AI-powered matching based on income, age, occupation |
| **🗺️ Nearby Services** | Hospitals, banks, schools, govt offices (Google Maps) |
| **🤖 Multilingual Chatbot** | Hindi, Telugu, Tamil, Marathi, Bengali, English |
| **🔐 Secure Auth** | Mobile OTP login/register, bcrypt password hashing |
| **📱 Fully Responsive** | Mobile-first design with dark/light theme toggle |
| **⚡ Real-time** | Instant eligibility results & scheme recommendations |

## 📱 Screenshots

![Hero Section](frontend/screenshot-hero.png) <!-- Add screenshots here -->
![Eligibility Checker](frontend/screenshot-eligibility.png)
![Schemes Page](frontend/screenshot-schemes.png)
![Map Services](frontend/screenshot-map.png)

## 📁 Project Structure

```
wtproject/
├── README.md                 # 📄 This file
├── TODO.md                   # ✅ Task tracker
├── backend/                  # Node.js/Express API
│   ├── server.js             # 🚀 Main server
│   ├── config.js             # MongoDB connection
│   ├── models/User.js        # User schema
│   ├── routes/auth.js        # Auth endpoints
│   ├── otpService.js         # SMS OTP logic
│   ├── package.json          # Backend deps
│   └── .env.example          # Env template
└── frontend/                 # Vanilla JS SPA
    ├── index.html            # Main app
    ├── app.js                # Frontend logic
    ├── styles.css            # Responsive styles
    └── translations.js       # i18n support
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm/yarn

### 1. Clone & Install
```bash
git clone <repo-url>
cd wtproject

# Backend
cd backend
npm install

# Frontend (static - no install needed)
cd ../frontend
```

### 2. Environment Setup ⚠️ SECURITY FIRST

**✅ .env is protected by .gitignore** - Never committed to GitHub!

1. Copy template:
```bash
cd backend
cp .env.example .env
```

2. **EDIT `.env`** with your real values:
```
MONGO_URI=mongodb://127.0.0.1:27017/sahayakai
# or Atlas: mongodb+srv://user:pass@cluster0.mongodb.net/sahayakai

PORT=5000
JWT_SECRET=change-me-to-64-random-characters!!!
N8N_WEBHOOK_URL=https://your-n8n-webhook-url.com/chat
```

**🚨 NEVER commit `.env` - Git will reject it!**
**✅ Safe to push entire repo to public GitHub now.**

### 3. Run Development
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend (VSCode Live Server)
# Open frontend/index.html (http://127.0.0.1:5500)

# Production
npm start  # Backend only (serves frontend static files)
```

**Backend serves frontend automatically at `http://localhost:5000`**

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login with OTP/password |
| `POST` | `/api/auth/send-otp` | Send OTP to mobile |
| `POST` | `/api/auth/verify-otp` | Verify OTP & login |
| `GET`  | `/api/auth/all-users` | Get all users (admin) |
| `POST` | `/chat` | AI Chatbot |

## 🗄️ Database Schema

**User Model** (`backend/models/User.js`):
```javascript
{
  name: String,
  mobile: String (unique),
  email: String,
  password: String (hashed),
  state: String,
  occupation: String
}
```

## 🎨 Frontend Pages

1. **🏠 Home** - Hero, stats, services grid
2. **📋 Schemes & Jobs** - Filterable scheme cards
3. **✅ Eligibility** - Smart form + results
4. **🗺️ Map** - Google Maps + nearby services
5. **❓ FAQ** - Expandable question categories
6. **🔐 Auth Modal** - OTP-based login/register

## 🌍 Multi-Language Support

| Language | Code |
|----------|------|
| English | `en` |
| Hindi | `hi` |
| Telugu | `te` |
| Tamil | `ta` |
| Marathi | `mr` |
| Bengali | `bn` |

## 🛠️ Development Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

**npm run dev** - Hot reload with nodemon

## 🔧 Configuration

### CORS
Frontend: `http://127.0.0.1:5500` (VSCode Live Server)
Production: Update `backend/server.js`

### MongoDB
```bash
# Local
mongod

# Atlas (recommended)
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/sahayakai
```

## 🚀 Deployment

### Backend (Recommended: Render)
```
1. Push to GitHub
2. render.com → New Web Service
3. Build: npm install
4. Start: npm start
```

### Frontend (Netlify/Vercel)
Drag `frontend/` folder → Instant deploy

## 🤖 Chatbot Integration

**Current**: Simple scheme matcher
**Upgrade**: 
- n8n webhook (`N8N_WEBHOOK_URL`)
- OpenAI/Groq API
- LangChain for scheme RAG

## 📊 Testing

```bash
# Backend tests (Postman)
POST http://localhost:5000/api/auth/register
{
  "name": "Test User",
  "mobile": "9876543210"
}

# Frontend
Open frontend/index.html
```

## 🔒 Security Features

- ✅ bcrypt password hashing
- ✅ MongoDB/Mongoose validation
- ✅ CORS protection
- ✅ OTP verification
- ✅ Rate limiting ready (express-rate-limit)

## 📈 Future Enhancements

- [ ] Payment gateway (Razorpay/UPI)
- [ ] Push notifications
- [ ] PWA support
- [ ] Admin dashboard
- [ ] Analytics (scheme applications)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| CORS Error | Update `origin: '*'` in dev |
| Mongo Connect | Check `MONGO_URI` format |
| OTP not sending | Configure Twilio/Fast2SMS |
| Static files 404 | Backend serves `/frontend/` |

## 📝 License

ISC License - Free to use/modify/distribute.

## 🙌 Contributing

1. Fork repository
2. Create feature branch
3. Submit PR with description
4. Follow existing code style

**Made with ❤️ for Rural India**

---
*⭐ Star the repo if you found it helpful!*  
*🌾 Government of India Initiative Simulator*

