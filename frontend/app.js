/* ============================================================
   RURAL DEVELOPMENT PORTAL — app.js
   All data, state management, and interactivity
============================================================ */

/* =============================================================
   n8n WEBHOOK CONFIG
   Replace with your own n8n webhook URL before deploying.
============================================================= */
const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/ad62bcd6-ec00-4433-a97a-b2a41add8a16/chat';

/* =============================================================
   DATA
============================================================= */
const SCHEMES = [
  { id:1,  title:"PM Kisan Samman Nidhi",           category:"Agriculture",      state:"All India",      income:"low", desc:"Direct income support of ₹6,000/year to small and marginal farmer families. Paid in 3 equal instalments.", eligibility:"Farmer with less than 2 hectares land, annual income below ₹2L",         tag:"Agriculture",      color:"#2e7d32", tagClass:"tag-green", bpl:false, minAge:18, maxAge:100, occupation:["Farmer","Agricultural Labourer"],       applyLink:"https://pmkisan.gov.in/" },
  { id:2,  title:"MGNREGA (Job Card Scheme)",        category:"Employment",       state:"All India",      income:"bpl", desc:"Guarantees 100 days of wage employment per year to rural households. ₹220-330/day based on state.",          eligibility:"Rural household adult member willing to do unskilled work",              tag:"Employment",       color:"#1565c0", tagClass:"tag-blue",  bpl:true,  minAge:18, maxAge:65,  occupation:["Agricultural Labourer","Daily Wage Worker","Unemployed"],          applyLink:"https://nrega.nic.in/" },
  { id:3,  title:"PM Awas Yojana - Gramin",          category:"Housing",          state:"All India",      income:"bpl", desc:"Financial assistance of ₹1.2–1.3 lakh for construction of pucca houses for homeless rural families.",       eligibility:"Houseless families or those with kutcha/dilapidated houses, BPL category",tag:"Housing",          color:"#e65100", tagClass:"tag-red",   bpl:true,  minAge:18, maxAge:100, occupation:["Farmer","Agricultural Labourer","Daily Wage Worker","Unemployed"],  applyLink:"https://pmayg.nic.in/" },
  { id:4,  title:"Pradhan Mantri Fasal Bima Yojana", category:"Agriculture",      state:"All India",      income:"low", desc:"Crop insurance covering yield and post-harvest losses. Premium as low as 1.5–2% for farmers.",               eligibility:"All farmers including sharecroppers and tenant farmers growing notified crops",tag:"Agriculture",   color:"#2e7d32", tagClass:"tag-green", bpl:false, minAge:18, maxAge:100, occupation:["Farmer"],                                                              applyLink:"https://pmfby.gov.in/" },
  { id:5,  title:"Janani Suraksha Yojana",           category:"Health",           state:"All India",      income:"bpl", desc:"Cash assistance to pregnant women for institutional delivery. Up to ₹1,400 in rural areas.",                eligibility:"Below Poverty Line pregnant women, SC/ST women in any state",             tag:"Health",           color:"#ad1457", tagClass:"tag-red",   bpl:true,  minAge:18, maxAge:45,  occupation:["Farmer","Agricultural Labourer","Daily Wage Worker","Unemployed"],  applyLink:"https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309" },
  { id:6,  title:"Sukanya Samriddhi Yojana",         category:"Women & Child",    state:"All India",      income:"mid", desc:"Small savings scheme for girl child with 7.6% interest rate. Tax benefits under 80C.",                       eligibility:"Parents of girl child below 10 years. Max 2 girls per family.",           tag:"Women & Child",    color:"#6a1b9a", tagClass:"tag-amber", bpl:false, minAge:18, maxAge:50,  occupation:["Farmer","Self-Employed","Small Business Owner"],                   applyLink:"https://www.indiapost.gov.in/financial/pages/content/sukanya-samriddhi-account.aspx" },
  { id:7,  title:"PM Mudra Loan Yojana",             category:"Financial Aid",    state:"All India",      income:"mid", desc:"Collateral-free loans up to ₹10 lakh for small businesses. Shishu (₹50K), Kishore (₹5L), Tarun (₹10L).",  eligibility:"Non-farm micro/small enterprise, no default history in any bank",         tag:"Financial Aid",    color:"#f57f17", tagClass:"tag-amber", bpl:false, minAge:18, maxAge:65,  occupation:["Self-Employed","Small Business Owner","Artisan / Craftsman"],      applyLink:"https://www.mudra.org.in/" },
  { id:8,  title:"Skill India - PMKVY",              category:"Skill Development",state:"All India",      income:"low", desc:"Free skill training and certification for youth. Monetary rewards on successful certification.",              eligibility:"Indian youth 15–45 years, school dropout or unemployed",                 tag:"Skill Dev",        color:"#00695c", tagClass:"tag-green", bpl:false, minAge:15, maxAge:45,  occupation:["Student","Unemployed","Daily Wage Worker"],                         applyLink:"https://www.pmkvyofficial.org/" },
  { id:9,  title:"Chief Minister Relief Fund - AP",  category:"Financial Aid",    state:"Andhra Pradesh", income:"bpl", desc:"Direct cash relief for families affected by natural calamities, accidents, or severe illness.",               eligibility:"Andhra Pradesh residents, BPL families or those in financial distress",  tag:"Financial Aid",    color:"#f57f17", tagClass:"tag-amber", bpl:true,  minAge:18, maxAge:100, occupation:["Farmer","Agricultural Labourer","Daily Wage Worker","Unemployed"],  applyLink:"https://ap.meeseva.gov.in/" },
  { id:10, title:"YSR Rythu Bharosa",                category:"Agriculture",      state:"Andhra Pradesh", income:"low", desc:"₹13,500/year direct income support to farmers in Andhra Pradesh in 3 instalments.",                         eligibility:"Farmers with land records in AP, including registered tenant farmers",    tag:"Agriculture",      color:"#2e7d32", tagClass:"tag-green", bpl:false, minAge:18, maxAge:100, occupation:["Farmer"],                                                              applyLink:"https://ysrrythubharosa.ap.gov.in/" },
  { id:11, title:"Mukhyamantri Kisan Sahay Yojana",  category:"Agriculture",      state:"Gujarat",        income:"low", desc:"Crop damage compensation up to ₹20,000/hectare for Gujarat farmers facing natural calamities.",              eligibility:"Farmers in Gujarat, land holding up to 4 hectares",                     tag:"Agriculture",      color:"#2e7d32", tagClass:"tag-green", bpl:false, minAge:18, maxAge:100, occupation:["Farmer"],                                                              applyLink:"https://ikhedut.gujarat.gov.in/" },
  { id:12, title:"PMGSY - Road Connectivity",        category:"Employment",       state:"All India",      income:"bpl", desc:"Rural road construction generating local employment. Village roads connecting habitations >250 population.", eligibility:"Rural workers and contractors during construction phase",                 tag:"Employment",       color:"#1565c0", tagClass:"tag-blue",  bpl:false, minAge:18, maxAge:60,  occupation:["Agricultural Labourer","Daily Wage Worker","Unemployed"],          applyLink:"https://pmgsy.nic.in/" },
  { id:13, title:"PM Scholarship Scheme (Rural)",    category:"Education",        state:"All India",      income:"low", desc:"Scholarships for wards of ex-servicemen and police officers. ₹2,500–3,000/month for professional courses.",  eligibility:"Children of ex-servicemen/police, professional degree, income <₹6L/year",tag:"Education",        color:"#1565c0", tagClass:"tag-blue",  bpl:false, minAge:17, maxAge:30,  occupation:["Student"],                                                             applyLink:"https://scholarships.gov.in/" },
  { id:14, title:"National Rural Livelihood Mission",category:"Employment",       state:"All India",      income:"bpl", desc:"SHG-based livelihood enhancement for rural poor women — bank linkage and skill training.",                    eligibility:"Rural women from BPL families, SHG member or willing to form one",       tag:"Employment",       color:"#1565c0", tagClass:"tag-blue",  bpl:true,  minAge:18, maxAge:60,  occupation:["Agricultural Labourer","Daily Wage Worker","Unemployed","Artisan / Craftsman"], applyLink:"https://aajeevika.gov.in/" },
  { id:15, title:"Soil Health Card Scheme",          category:"Agriculture",      state:"All India",      income:"low", desc:"Free soil testing and health card with crop-wise recommendations to improve productivity.",                   eligibility:"All farmers with agricultural land, free service by state government",   tag:"Agriculture",      color:"#2e7d32", tagClass:"tag-green", bpl:false, minAge:18, maxAge:100, occupation:["Farmer"],                                                              applyLink:"https://soilhealth.dac.gov.in/" },
  { id:16, title:"Rashtriya Swasthya Bima Yojana",   category:"Health",           state:"All India",      income:"bpl", desc:"Health insurance of ₹5 lakh/year per family for cashless treatment at empanelled hospitals.",                eligibility:"BPL families, unorganised sector workers, MGNREGA workers",              tag:"Health",           color:"#ad1457", tagClass:"tag-red",   bpl:true,  minAge:0,  maxAge:100, occupation:["Farmer","Agricultural Labourer","Daily Wage Worker","Unemployed"],  applyLink:"https://www.nhp.gov.in/rashtriya-swasthya-bima-yojana_pg" },
];

const JOBS = [
  { id:101, title:"Gram Rozgar Sevak",       category:"Employment",   state:"Uttar Pradesh", income:"low", desc:"Village-level field officer for MGNREGA implementation. Salary ₹8,000–12,000/month.", eligibility:"10th pass, resident of same block, age 18–35 years",  tag:"Govt Job", color:"#1565c0", tagClass:"tag-blue",  bpl:false, minAge:18, maxAge:35, occupation:["Unemployed","Student"],                      applyLink:"https://nrega.nic.in/" },
  { id:102, title:"Asha Worker (Health)",    category:"Health",       state:"All India",     income:"low", desc:"Community health worker. Performance-based incentives ₹2,000–5,000/month.",            eligibility:"Female resident, 8th pass minimum, age 18–45",         tag:"Govt Job", color:"#ad1457", tagClass:"tag-red",   bpl:false, minAge:18, maxAge:45, occupation:["Unemployed","Agricultural Labourer"],        applyLink:"https://nhm.gov.in/" },
  { id:103, title:"Anganwadi Worker",        category:"Women & Child",state:"All India",     income:"low", desc:"Childcare and nutrition monitoring. ₹4,500 honorarium + performance bonus.",           eligibility:"Female, 10th pass, age 21–40, resident of village",    tag:"Govt Job", color:"#6a1b9a", tagClass:"tag-amber", bpl:false, minAge:21, maxAge:40, occupation:["Unemployed","Agricultural Labourer"],        applyLink:"https://wcd.nic.in/" },
  { id:104, title:"Dairy Farmer Cooperative",category:"Agriculture",  state:"Gujarat",       income:"low", desc:"Amul cooperative membership for dairy farmers. Assured milk procurement at MSP.",       eligibility:"Dairy farmer, min 2 milch cattle, Gujarat village resident", tag:"Self-Emp", color:"#2e7d32", tagClass:"tag-green", bpl:false, minAge:18, maxAge:70, occupation:["Farmer","Self-Employed"],                   applyLink:"https://amul.com/m/amul-dairy-news.php" },
];

/* =============================================================
   HELP CENTERS DATA  (for Nearby Services map page)
   Each entry: name, address, type, icon, mapsQuery
   — type drives color coding: hospital=red, sachivalayam=teal,
     bank=blue, school=green, govt=orange, default=indigo
============================================================= */
const CENTERS = [
  { name:"Primary Health Center",          address:"Near Bus Stand, Vijayawada",         type:"hospital",       icon:"🏥", mapsQuery:"Primary+Health+Center+Vijayawada" },
  { name:"Village Sachivalayam – Ward 12", address:"Ward 12, Vijayawada",                type:"sachivalayam",   icon:"🏛️", mapsQuery:"Village+Sachivalayam+Vijayawada+Ward+12" },
  { name:"State Bank of India",            address:"Main Road, Vijayawada Rural",         type:"bank",           icon:"🏦", mapsQuery:"SBI+Branch+Vijayawada" },
  { name:"Zilla Parishad High School",     address:"School Lane, Vijayawada Rural",       type:"school",         icon:"🏫", mapsQuery:"Zilla+Parishad+High+School+Vijayawada" },
  { name:"Gram Panchayat Office",          address:"Panchayat Bhavan, Village Road",      type:"govt",           icon:"🏢", mapsQuery:"Gram+Panchayat+Vijayawada" },
  { name:"Sub Health Centre – Bhimavaram", address:"Bhimavaram Village, Krishna Dist",    type:"hospital",       icon:"🏥", mapsQuery:"Sub+Health+Centre+Bhimavaram+Vijayawada" },
  { name:"India Post Office",              address:"Post Colony, Village Road",            type:"bank",           icon:"📮", mapsQuery:"Post+Office+Vijayawada+Rural" },
  { name:"Block Development Office (BDO)", address:"Block HQ, Vijayawada Rural",          type:"sachivalayam",   icon:"🏛️", mapsQuery:"Block+Development+Office+Vijayawada" },
];

const ALL_DATA = [...SCHEMES, ...JOBS];

const FAQS = [
  { category:"schemes",     q:"What is PM Kisan Samman Nidhi and how do I apply?",              a:"PM Kisan is a direct benefit transfer scheme providing ₹6,000/year to small farmers. Apply at your nearest Common Service Centre (CSC) or visit pmkisan.gov.in with Aadhaar, bank account details, and land records." },
  { category:"schemes",     q:"How many schemes can I apply for simultaneously?",                a:"You can apply for multiple schemes simultaneously as long as you meet the eligibility criteria for each. There is no restriction on applying to multiple government welfare schemes." },
  { category:"schemes",     q:"What documents are required to apply for housing scheme?",        a:"For PM Awas Yojana Gramin: Aadhaar card, bank passbook, BPL certificate, land certificate (or land-free declaration), mobile number, and recent photograph." },
  { category:"eligibility", q:"How is 'Below Poverty Line (BPL)' status determined?",           a:"BPL status is determined by state governments based on SECC data. Criteria include land ownership, type of house, income, and occupation. Contact your Gram Panchayat to check your BPL status." },
  { category:"eligibility", q:"I am a tenant farmer, can I apply for PM Kisan?",                a:"Yes, tenant farmers registered under state-specific tenant farmer schemes are eligible in some states. Check with your state agriculture department for specific rules." },
  { category:"eligibility", q:"Can a widow apply for government schemes independently?",         a:"Yes, widows have special provisions in many schemes. Widow/Single Mother category gets priority in housing schemes, MGNREGA, self-help groups, and several state-specific welfare schemes." },
  { category:"jobs",        q:"How can I find government job openings in rural areas?",          a:"Rural jobs are announced on state employment websites and our portal. You can also check at your Block Development Office (BDO) or Gram Panchayat office." },
  { category:"jobs",        q:"What is the age limit for ASHA worker recruitment?",              a:"ASHA workers are recruited between 18–45 years of age. The candidate must be a female resident of the same village, at least 8th pass educated." },
  { category:"documents",   q:"How do I get an income certificate for scheme applications?",    a:"Visit your Tehsil/Taluk office or apply online via your state's e-district portal. You need Aadhaar, ration card, and self-declaration of income. Processing takes 7–15 working days." },
  { category:"documents",   q:"My Aadhaar address differs from current residence. Does it matter?", a:"Some schemes require Aadhaar with current address. Update your address at any Aadhaar enrollment centre using a utility bill or bank statement as proof." },
  { category:"payment",     q:"I haven't received PM Kisan money. What should I do?",           a:"Check your status at pmkisan.gov.in. Common issues: wrong bank account, inactive account, Aadhaar not linked, or name mismatch. Visit your CSC or agriculture office for correction." },
  { category:"payment",     q:"How are MGNREGA wages paid?",                                     a:"MGNREGA wages are credited directly to the registered bank account within 7–15 days after work verification. Check payment status on nrega.nic.in." },
];

const MAP_SERVICES = [
  { type:'hospital', name:'Primary Health Centre - Ward 5',       addr:'NH-9, Vijayawada Rural, AP',         dist:'0.8 km', rating:'4.2', phone:'0866-XXXXXX' },
  { type:'hospital', name:'Sub Health Centre - Bhimavaram',       addr:'Bhimavaram Village, Krishna Dist',    dist:'2.1 km', rating:'3.8', phone:'NA' },
  { type:'bank',     name:'State Bank of India - Rural Branch',    addr:'Main Road, Vijayawada Rural',         dist:'1.2 km', rating:'4.0', phone:'0866-222XXX' },
  { type:'bank',     name:'India Post Office - Savings Bank',      addr:'Post Colony, Village Road',           dist:'0.5 km', rating:'4.5', phone:'0866-233XXX' },
  { type:'school',   name:'Zilla Parishad High School',            addr:'School Lane, Vijayawada Rural',       dist:'0.3 km', rating:'4.3', phone:'0866-244XXX' },
  { type:'school',   name:'Govt Primary School No. 2',             addr:'Gandhi Nagar, Vijayawada',            dist:'1.0 km', rating:'4.1', phone:'NA' },
  { type:'govt',     name:'Gram Panchayat Office',                 addr:'Panchayat Bhavan, Village Road',      dist:'0.2 km', rating:'3.5', phone:'0866-255XXX' },
  { type:'govt',     name:'Block Development Office (BDO)',         addr:'Block HQ, Vijayawada Rural',          dist:'4.5 km', rating:'3.7', phone:'0866-266XXX' },
];

const CHAT_RESPONSES = {
  en: {
    welcome: "Namaste! 🙏 I'm RuralSeva AI, your guide to government schemes and rural services. How can I help you today?",
    suggestions: ["PM Kisan details", "Housing scheme apply", "MGNREGA registration", "Nearest hospital"],
    responses: {
      'pm kisan':   "PM Kisan Samman Nidhi provides ₹6,000/year to small farmers in 3 instalments. Visit pmkisan.gov.in or your nearest CSC centre with Aadhaar, bank passbook and land records. 🌾",
      'mgnrega':    "MGNREGA guarantees 100 days employment/year to rural households. Register at your Gram Panchayat with Aadhaar and bank account. Wages are ₹220–330/day depending on the state. 💼",
      'housing':    "PM Awas Yojana Gramin gives ₹1.2–1.3 lakh for pucca house construction. Apply at Block Development Office with Aadhaar, BPL certificate, and bank details. 🏠",
      'hospital':   "The nearest PHC is 0.8 km away on NH-9. For emergencies, call 108 (free ambulance). ASHA workers can guide you to free government health services. 🏥",
      'loan':       "PM Mudra Yojana: Shishu up to ₹50,000, Kishore up to ₹5 lakh, Tarun up to ₹10 lakh — all collateral-free. Apply at any bank with business plan and Aadhaar. 💰",
      'scholarship':"NSP (National Scholarship Portal) at scholarships.gov.in has 100+ state and central scholarships. Apply before the September deadline. 🎓",
      default:      "I can help with PM Kisan, MGNREGA, housing, health services, loans, and more. Could you be more specific? 😊"
    }
  },
  hi: {
    welcome: "नमस्ते! 🙏 मैं RuralSeva AI हूँ। सरकारी योजनाओं के बारे में मैं आपकी मदद करूँगा।",
    suggestions: ["पीएम किसान जानकारी", "आवास योजना", "मनरेगा पंजीकरण", "नजदीकी अस्पताल"],
    responses: {
      'pm kisan': "पीएम किसान में किसानों को ₹6,000 प्रति वर्ष मिलते हैं। pmkisan.gov.in पर आधार, बैंक पासबुक और भूमि रिकॉर्ड लेकर आवेदन करें। 🌾",
      default:    "मैं पीएम किसान, मनरेगा, आवास योजना के बारे में बता सकता हूँ। कृपया बताएं आप क्या जानना चाहते हैं? 😊"
    }
  },
  te: {
    welcome: "నమస్కారం! 🙏 నేను RuralSeva AI. ప్రభుత్వ పథకాల గురించి మీకు సహాయం చేస్తాను.",
    suggestions: ["PM కిసాన్ వివరాలు", "గృహ పథకం", "MGNREGA నమోదు", "సమీప ఆసుపత్రి"],
    responses: {
      'pm kisan': "PM కిసాన్‌లో చిన్న రైతులకు సంవత్సరానికి ₹6,000 అందజేస్తారు. pmkisan.gov.in లేదా సమీప CSC కేంద్రంలో దరఖాస్తు చేయండి. 🌾",
      default:    "పీఎం కిసాన్, మనరేగా, గృహ పథకాల గురించి సహాయం చేయగలను. మీకు ఏమి కావాలో చెప్పండి. 😊"
    }
  },
  ta: {
    welcome: "வணக்கம்! 🙏 நான் RuralSeva AI. அரசு திட்டங்கள் பற்றி உங்களுக்கு உதவுவேன்.",
    suggestions: ["PM கிசான் விவரங்கள்", "வீட்டு திட்டம்", "MGNREGA பதிவு", "அருகிலுள்ள மருத்துவமனை"],
    responses: {
      'pm kisan': "PM கிசான் சிறு விவசாயிகளுக்கு ஆண்டுக்கு ₹6,000 வழங்குகிறது. pmkisan.gov.in அல்லது அருகிலுள்ள CSC மையத்தில் விண்ணப்பிக்கவும். 🌾",
      default:    "PM கிசான், MGNREGA, வீட்டு திட்டங்கள் பற்றி உதவ முடியும். நீங்கள் என்ன தெரிந்து கொள்ள விரும்புகிறீர்கள்? 😊"
    }
  },
  mr: {
    welcome: "नमस्कार! 🙏 मी RuralSeva AI आहे. सरकारी योजना बद्दल मी तुम्हाला मदत करेन.",
    suggestions: ["PM किसान माहिती", "घर योजना", "MGNREGA नोंदणी", "जवळचे रुग्णालय"],
    responses: {
      'pm kisan': "PM किसानमध्ये लहान शेतकऱ्यांना वर्षाला ₹6,000 मिळतात. pmkisan.gov.in किंवा जवळच्या CSC केंद्रात अर्ज करा. 🌾",
      default:    "PM किसान, MGNREGA, घर योजना बद्दल मदत करू शकतो. तुम्हाला काय हवे आहे ते सांगा. 😊"
    }
  }
};

/* =============================================================
   STATE
============================================================= */
let currentPage     = 'home';
let currentLang     = 'en';
let chatLang        = 'en';
let chatOpen        = false;
let isDark          = false;
let currentUser     = null;
let savedSchemes    = new Set();
let schemeType      = 'scheme';
let currentPageNum  = 1;
let filteredSchemes = [...SCHEMES];
let activeMapFilter = 'all';
let recognition     = null;
let micActive       = false;
const pageHistory   = [];

/* =============================================================
   NAVIGATION & HISTORY
============================================================= */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  if (pageHistory[pageHistory.length - 1] !== page) pageHistory.push(page);
  currentPage = page;
  window.scrollTo(0, 0);
  if (page === 'schemes')     renderSchemes();
  if (page === 'map')         renderMapResults();
  if (page === 'faq')         renderFaq();
}

function goBack() {
  if (pageHistory.length > 1) {
    pageHistory.pop();
    const prev = pageHistory[pageHistory.length - 1];
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + prev).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navEl = document.getElementById('nav-' + prev);
    if (navEl) navEl.classList.add('active');
    currentPage = prev;
    window.scrollTo(0, 0);
    if (prev === 'schemes') renderSchemes();
    if (prev === 'map')     renderMapResults();
    if (prev === 'faq')     renderFaq();
  } else {
    navigate('home');
  }
}

/* =============================================================
   THEME
============================================================= */
function toggleTheme() {
  isDark = !isDark;
  document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = isDark ? '☀️' : '🌙';
}

/* =============================================================
   LANGUAGE
============================================================= */
/*
 * toggleLang() — opens/closes the language dropdown.
 * setLang()    — defined in translations.js (handles persistence,
 *                applyTranslations(), and navbar button update).
 * Both are called from inline onclick attributes in index.html.
 */
function toggleLang() {
  document.getElementById('langSelector').classList.toggle('open');
}

/* =============================================================
   HERO PARTICLES (floating dots)
============================================================= */
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1.5;
    const left = Math.random() * 100;
    const delay = Math.random() * 14;
    const dur   = Math.random() * 10 + 10;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%; bottom:-10px;
      animation-duration:${dur}s;
      animation-delay:${delay}s;
      opacity:0;
    `;
    container.appendChild(p);
  }
}

/* =============================================================
   HOME — scheme preview
============================================================= */
function renderHomeSchemes() {
  const grid = document.getElementById('homeSchemeCards');
  if (!grid) return;
  grid.innerHTML = SCHEMES.slice(0, 3).map(s => schemeCardHTML(s)).join('');
}

/* =============================================================
   SCHEMES PAGE
============================================================= */
function setSchemeType(type) {
  schemeType = type;
  document.getElementById('btnScheme').style.background = type === 'scheme' ? 'var(--green-700)' : 'var(--gray-500)';
  document.getElementById('btnJob').style.background    = type === 'job'    ? 'var(--green-700)' : 'var(--gray-500)';
  currentPageNum = 1;
  applyFilters();
}

function applyFilters() {
  const search   = document.getElementById('filterSearch').value.toLowerCase();
  const state    = document.getElementById('filterState').value;
  const cat      = document.getElementById('filterCategory').value;
  const income   = document.getElementById('filterIncome').value;
  const source   = schemeType === 'scheme' ? SCHEMES : JOBS;
  filteredSchemes = source.filter(s => {
    if (search && !s.title.toLowerCase().includes(search) && !s.desc.toLowerCase().includes(search)) return false;
    if (state  && s.state !== state && s.state !== 'All India') return false;
    if (cat    && s.category !== cat) return false;
    if (income === 'bpl' && !s.bpl) return false;
    if (income === 'low' && s.income === 'mid') return false;
    return true;
  });
  currentPageNum = 1;
  renderSchemes();
}

function clearFilters() {
  ['filterSearch','filterState','filterCategory','filterIncome'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  filteredSchemes = schemeType === 'scheme' ? [...SCHEMES] : [...JOBS];
  renderSchemes();
}

function renderSchemes() {
  const perPage = 9;
  const total   = filteredSchemes.length;
  const pages   = Math.ceil(total / perPage);
  const start   = (currentPageNum - 1) * perPage;
  const slice   = filteredSchemes.slice(start, start + perPage);
  const grid    = document.getElementById('schemesGrid');
  const pag     = document.getElementById('schemesPagination');
  if (!grid) return;
  if (slice.length === 0) {
    grid.innerHTML = '<div class="no-results"><div class="icon">🔍</div><p>No schemes found. Try adjusting filters.</p></div>';
    if (pag) pag.innerHTML = '';
    return;
  }
  grid.innerHTML = slice.map(s => schemeCardHTML(s)).join('');
  if (pag) {
    let html = '';
    for (let i = 1; i <= pages; i++)
      html += `<button class="page-btn ${i === currentPageNum ? 'active' : ''}" onclick="goSchPage(${i})">${i}</button>`;
    pag.innerHTML = html;
  }
}

function goSchPage(p) { currentPageNum = p; renderSchemes(); window.scrollTo(0, 240); }

function schemeCardHTML(s) {
  const saved = savedSchemes.has(s.id);
  // Escape title and applyLink safely for inline onclick attribute
  const safeTitle = s.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const safeLink  = (s.applyLink || '').replace(/'/g, "\\'");
  return `
  <div class="scheme-card">
    <div class="scheme-card-header" style="background:${s.color}18">
      <span class="scheme-cat-badge tag ${s.tagClass}" style="background:${s.color}20;color:${s.color};border-color:${s.color}40">${s.tag}</span>
      ${s.state !== 'All India'
        ? `<span class="tag tag-amber" style="font-size:0.7rem">${s.state}</span>`
        : '<span class="tag tag-green" style="font-size:0.7rem">All India</span>'}
    </div>
    <div class="scheme-card-body">
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="scheme-meta">
        <div class="scheme-meta-item"><span class="label">Eligibility:</span><span>${s.eligibility}</span></div>
      </div>
      <div class="scheme-card-actions">
        <!-- Apply Now — calls openApplyLink() which validates URL, confirms, then opens in new tab -->
        <button class="btn-apply" onclick="openApplyLink('${safeLink}', '${safeTitle}')">
           Apply Now
        </button>
        <button class="btn-save ${saved ? 'saved' : ''}" onclick="toggleSave(${s.id},this)" title="Save">${saved ? '★' : '☆'}</button>
      </div>
    </div>
  </div>`;
}

/* =============================================================
   APPLY LINK — validate URL → modal confirm → open in new tab
============================================================= */
/**
 * openApplyLink(url, title)
 *  1. Validates the URL is non-empty and well-formed.
 *  2. Shows a professional confirmation modal (replaces window.confirm).
 *  3. Opens the official portal in a new tab on confirmation.
 *  4. If URL is missing or invalid → shows a clear alert.
 *
 * @param {string} url   - applyLink from the scheme/job data object
 * @param {string} title - scheme or job title for the toast message
 */
let _pendingRedirectUrl  = null;
let _pendingRedirectTitle = null;

function openApplyLink(url, title) {
  // ── Validation: empty or placeholder ──────────────────────
  if (!url || url.trim() === '') {
    alert('⚠️ Application link not available for this scheme.\nPlease visit your nearest Common Service Centre (CSC) or Gram Panchayat to apply offline.');
    return;
  }

  // ── Validation: must start with https:// or http:// ───────
  let validUrl;
  try {
    validUrl = new URL(url);
    if (!['http:', 'https:'].includes(validUrl.protocol)) throw new Error('Bad protocol');
  } catch (_) {
    alert('⚠️ Application link is not valid.\nPlease contact your local government office for assistance.');
    return;
  }

  // ── Store pending redirect and populate modal ──────────────
  _pendingRedirectUrl   = url;
  _pendingRedirectTitle = title;
  document.getElementById('redirectModalSite').textContent = validUrl.hostname;

  // ── Wire up the Continue button for this specific redirect ─
  // Capture url/title into local vars BEFORE closeRedirectModal() nulls
  // the globals — otherwise the redirect fires with a null URL.
  document.getElementById('redirectModalConfirm').onclick = function () {
    const targetUrl   = _pendingRedirectUrl;
    const targetTitle = _pendingRedirectTitle;
    closeRedirectModal();
    showToast(`🚀 Redirecting to official portal for "${targetTitle}"…`);
    setTimeout(() => { window.location.href = targetUrl; }, 400);
  };

  // ── Show the modal ─────────────────────────────────────────
  const overlay = document.getElementById('redirectModal');
  overlay.classList.add('open');
  overlay.addEventListener('click', _redirectOverlayClick);
}

/** Close the redirect confirmation modal and clean up. */
function closeRedirectModal() {
  const overlay = document.getElementById('redirectModal');
  overlay.classList.remove('open');
  overlay.removeEventListener('click', _redirectOverlayClick);
  _pendingRedirectUrl   = null;
  _pendingRedirectTitle = null;
}

/** Click-outside-to-dismiss handler for the redirect modal overlay. */
function _redirectOverlayClick(e) {
  if (e.target === document.getElementById('redirectModal')) closeRedirectModal();
}

function toggleSave(id, btn) {
  if (!currentUser) { openModal(); return; }
  if (savedSchemes.has(id)) {
    savedSchemes.delete(id);
    btn.textContent = '☆'; btn.classList.remove('saved');
    showToast('Removed from saved schemes');
  } else {
    savedSchemes.add(id);
    btn.textContent = '★'; btn.classList.add('saved');
    showToast('✨ Scheme saved!');
  }
}

/* =============================================================
   ELIGIBILITY CHECKER
============================================================= */
function checkEligibility() {
  const age        = parseInt(document.getElementById('eli-age').value);
  const income     = parseInt(document.getElementById('eli-income').value);
  const state      = document.getElementById('eli-state').value;
  const occupation = document.getElementById('eli-occupation').value;
  const special    = document.getElementById('eli-special').value;

  if (!age || !income || !state || !occupation) {
    showToast('⚠️ Please fill required fields (Age, Income, State, Occupation)');
    return;
  }

  const incomeLakhs = income / 100000;
  const isBPL       = special === 'Below Poverty Line (BPL)' || income < 50000;

  const eligible = ALL_DATA.filter(s => {
    if (age < s.minAge || age > s.maxAge) return false;
    if (s.bpl && !isBPL) return false;
    if (s.income === 'bpl' && !isBPL) return false;
    if (s.income === 'low' && incomeLakhs > 2) return false;
    if (s.income === 'mid' && incomeLakhs > 5) return false;
    if (s.state !== 'All India' && s.state !== state) return false;
    if (s.occupation && s.occupation.length > 0 && !s.occupation.includes(occupation)) return false;
    return true;
  });

  document.getElementById('eligResultsPlaceholder').style.display = 'none';
  const results = document.getElementById('eligResults');
  const list    = document.getElementById('eligSchemesList');
  const score   = document.getElementById('matchScore');
  results.style.display = 'block';

  const pct = Math.round((eligible.length / ALL_DATA.length) * 100);
  score.innerHTML = `✅ <strong>${eligible.length} schemes found</strong> matching your profile &nbsp;<span style="opacity:0.7">Match rate: ${pct}%</span>`;

  if (eligible.length === 0) {
    list.innerHTML = '<div class="results-placeholder"><div class="icon">😔</div><h3>No exact matches</h3><p>Try relaxing some criteria or check with your local Panchayat office.</p></div>';
    return;
  }
  list.innerHTML = eligible.map(s => `
    <div class="eligible-card">
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
      <span class="eligible-tag">${s.category}</span>
      <span class="eligible-tag" style="margin-left:0.35rem">${s.state === 'All India' ? 'All India' : s.state}</span>
      <br><button class="btn-apply" style="margin-top:0.75rem;padding:0.5rem 1rem;width:auto;font-size:0.85rem" onclick="applyScheme('${s.title.replace(/'/g,"\\'")}')">Apply Now</button>
    </div>`).join('');
}

/* =============================================================
   MAP
============================================================= */
/* =============================================================
   MAP PAGE — render existing service list + CENTERS cards
============================================================= */
function renderMapResults() {
  const list = document.getElementById('mapResults');
  if (!list) return;
  const items = activeMapFilter === 'all'
    ? MAP_SERVICES
    : MAP_SERVICES.filter(s => s.type === activeMapFilter);
  const icons = { hospital:'🏥', bank:'🏦', school:'🏫', govt:'🏛️' };
  list.innerHTML = items.map(s => `
    <div class="map-result-card">
      <h4>${icons[s.type] || '📍'} ${s.name}</h4>
      <p>${s.addr}</p>
      ${s.phone !== 'NA' ? `<p>📞 ${s.phone}</p>` : ''}
      <div class="dist">📍 ${s.dist} away · ⭐ ${s.rating}</div>
    </div>`).join('');

  // Also render CENTERS cards below the existing results
  renderCenters();
}

/* =============================================================
   CENTERS — dynamic help center cards
   Color coding: hospital=red, sachivalayam=teal,
   bank=blue, school=green, govt=orange, default=indigo
============================================================= */

/** Maps center type to a CSS class and accent colour */
const CENTER_TYPE_META = {
  hospital:     { cls: 'center-hospital',     label: 'Hospital',      color: '#e53935' },
  sachivalayam: { cls: 'center-sachivalayam',  label: 'Sachivalayam',  color: '#00897b' },
  bank:         { cls: 'center-bank',          label: 'Bank / Post',   color: '#1565c0' },
  school:       { cls: 'center-school',        label: 'School',        color: '#2e7d32' },
  govt:         { cls: 'center-govt',          label: 'Govt Office',   color: '#e65100' },
};

/**
 * renderCenters()
 * Dynamically builds cards from the CENTERS array using
 * document.createElement for clean, framework-free DOM work.
 * Appended to both #centersSidebar (map sidebar) and
 * #centersList (map overlay panel).
 */
function renderCenters() {
  const targets = [
    document.getElementById('centersSidebar'),
    document.getElementById('centersList'),
  ];

  targets.forEach(container => {
    if (!container) return;
    container.innerHTML = ''; // clear before re-render

    // Section heading
    const heading = document.createElement('div');
    heading.className = 'centers-section-heading';
    heading.innerHTML = '🏢 Help Centers Nearby';
    container.appendChild(heading);

    CENTERS.forEach(center => {
      const meta = CENTER_TYPE_META[center.type] || {
        cls: 'center-default', label: 'Service', color: '#3949ab'
      };

      // ── Card wrapper ───────────────────────────────────────
      const card = document.createElement('div');
      card.className = `center-card ${meta.cls}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('title', `Open ${center.name} in Google Maps`);

      // Click → open Google Maps location in new tab
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${center.mapsQuery}`;
      card.addEventListener('click', () => {
        window.open(mapsUrl, '_blank', 'noopener,noreferrer');
        showToast(`🗺️ Opening ${center.name} in Google Maps…`);
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') card.click();
      });

      // ── Icon ──────────────────────────────────────────────
      const iconEl = document.createElement('div');
      iconEl.className = 'center-card-icon';
      iconEl.style.background = meta.color + '18';
      iconEl.style.color = meta.color;
      iconEl.textContent = center.icon;

      // ── Body ──────────────────────────────────────────────
      const body = document.createElement('div');
      body.className = 'center-card-body';

      const nameEl = document.createElement('h4');
      nameEl.className = 'center-card-name';
      nameEl.textContent = center.name;

      const addrEl = document.createElement('p');
      addrEl.className = 'center-card-addr';
      addrEl.textContent = center.address;

      // ── Type badge ────────────────────────────────────────
      const badge = document.createElement('span');
      badge.className = 'center-type-badge';
      badge.style.background = meta.color + '1a';
      badge.style.color = meta.color;
      badge.style.borderColor = meta.color + '40';
      badge.textContent = meta.label;

      // ── Maps CTA link ─────────────────────────────────────
      const mapsLink = document.createElement('a');
      mapsLink.className = 'center-maps-link';
      mapsLink.href = mapsUrl;
      mapsLink.target = '_blank';
      mapsLink.rel = 'noopener noreferrer';
      mapsLink.textContent = '🗺️ View on Maps →';
      mapsLink.addEventListener('click', e => e.stopPropagation()); // prevent double-trigger

      body.appendChild(nameEl);
      body.appendChild(addrEl);
      body.appendChild(badge);
      body.appendChild(mapsLink);

      card.appendChild(iconEl);
      card.appendChild(body);
      container.appendChild(card);
    });
  });
}

function filterMap(btn, type) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeMapFilter = type;
  renderMapResults();
}

function searchMap() {
  const q = document.getElementById('mapSearch').value.trim() || 'Vijayawada, AP';
  // Update the Google Maps iframe src to the new location
  const frame = document.getElementById('googleMapFrame');
  if (frame) {
    const encoded = encodeURIComponent(q);
    frame.src = `https://maps.google.com/maps?q=${encoded}&z=13&output=embed`;
  }
  // Update the location label overlay
  const label = document.getElementById('mapLocationText');
  if (label) label.textContent = q;
  showToast(`🗺️ Map updated to "${q}"`);
}

/** Toggle the floating centers panel on the map */
function toggleCentersPanel() {
  const panel = document.getElementById('centersPanel');
  if (panel) panel.classList.toggle('collapsed');
}

function highlightPin(el) {
  const label = el.querySelector('text:last-child');
  if (label) showToast('📍 ' + label.textContent);
}

/* =============================================================
   FAQ
============================================================= */
function renderFaq(filter = 'all') {
  const list = document.getElementById('faqList');
  if (!list) return;
  const items = filter === 'all' ? FAQS : FAQS.filter(f => f.category === filter);
  list.innerHTML = items.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFaq(${i})">
        ${f.q}
        <span class="faq-icon">▼</span>
      </button>
      <div class="faq-answer">${f.a}</div>
    </div>`).join('');
}

function toggleFaq(i) {
  document.getElementById('faq-' + i).classList.toggle('open');
}

function filterFaq(cat, btn) {
  document.querySelectorAll('.faq-cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderFaq(cat);
}

/* =============================================================
   CHATBOT
============================================================= */
function toggleChatbot() {
  chatOpen = !chatOpen;
  document.getElementById('chatbotWindow').classList.toggle('open', chatOpen);
  if (chatOpen && document.getElementById('chatMessages').children.length === 0) initChat();
}

function initChat() {
  const data = CHAT_RESPONSES[chatLang] || CHAT_RESPONSES.en;
  addChatMsg('bot', data.welcome);
  renderSuggestions(data.suggestions);
}

function addChatMsg(who, text) {
  const msgs = document.getElementById('chatMessages');
  const div  = document.createElement('div');
  div.className = `chat-msg ${who}`;
  div.innerHTML = `
    ${who === 'bot'  ? '<span class="msg-icon">🌾</span>' : ''}
    <div class="msg-bubble">${text}</div>
    ${who === 'user' ? '<span class="msg-icon">👤</span>' : ''}`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function renderSuggestions(sugs) {
  const el = document.getElementById('chatSuggestions');
  el.innerHTML = sugs.map(s =>
    `<button class="suggestion-btn" onclick="sendChatText('${s.replace(/'/g,"\\'")}')"> ${s}</button>`
  ).join('');
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const text  = input.value.trim();
  if (!text) return;
  sendChatText(text);
  input.value = '';
}

async function fetchN8nReply(userText) {
  const url = (N8N_WEBHOOK_URL || '').trim();
  if (!url) throw new Error('n8n webhook URL not configured. Set N8N_WEBHOOK_URL in app.js');

  const payload = {
    text: userText,
    lang: chatLang,
    context: {
      page: currentPage,
      source: 'ruralseva-chatbot'
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    mode: 'cors'
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => '');
    throw new Error(`n8n webhook failed ${response.status}: ${response.statusText} ${responseText}`);
  }

  const data = await response.json().catch(() => null);
  if (!data || typeof data !== 'object' || !data.reply) {
    throw new Error('Invalid n8n response; expected JSON with `reply` field');
  }

  return data.reply;
}

async function sendChatText(text) {
  addChatMsg('user', text);
  document.getElementById('chatSuggestions').innerHTML = '';

  const msgs   = document.getElementById('chatMessages');
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot';
  typing.id = 'typing';
  typing.innerHTML = '<span class="msg-icon">🌾</span><div class="msg-bubble"><div class="dot-anim"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;

  try {
    const n8nReply = await fetchN8nReply(text);
    document.getElementById('typing')?.remove();
    addChatMsg('bot', n8nReply);
    speakText(n8nReply); // Speak the reply
    renderSuggestions(CHAT_RESPONSES.en.suggestions);
  } catch (error) {
    console.error('n8n chatbot error:', error);
    document.getElementById('typing')?.remove();

    // Fallback to built-in static reply when n8n is unavailable
    const data  = CHAT_RESPONSES[chatLang] || CHAT_RESPONSES.en;
    const lower = text.toLowerCase();
    let reply   = CHAT_RESPONSES.en.responses.default;
    const allR  = { ...CHAT_RESPONSES.en.responses, ...(data.responses || {}) };
    for (const [key, val] of Object.entries(allR)) {
      if (lower.includes(key)) { reply = val; break; }
    }
    addChatMsg('bot', `🔁 ${reply}`);
    speakText(reply); // Speak the fallback reply
    renderSuggestions(CHAT_RESPONSES.en.suggestions);
    showToast('⚠️ n8n not reachable; using local response fallback.');
  }
}

function setChatLang(btn, lang) {
  chatLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('chatMessages').innerHTML = '';
  initChat();
}

/* =============================================================
   MICROPHONE — robust implementation
============================================================= */
function toggleMic() {
  const btn = document.getElementById('micBtn');
  if (micActive) {
    try { recognition && recognition.stop(); } catch(e) {}
    micActive = false; btn.classList.remove('active'); return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast('⚠️ Voice input not supported. Please use Chrome or Edge.');
    return;
  }
  const start = () => {
    recognition = new SpeechRecognition();
    const langMap = { en:'en-IN', hi:'hi-IN', te:'te-IN', ta:'ta-IN', mr:'mr-IN', bn:'bn-IN' };
    recognition.lang             = langMap[chatLang] || 'en-IN';
    recognition.continuous       = false;
    recognition.interimResults   = true;
    recognition.maxAlternatives  = 1;
    recognition.onstart  = () => { micActive = true; btn.classList.add('active'); btn.title = 'Listening…'; showToast('🎤 Listening… speak now'); };
    recognition.onresult = (e) => {
      let interim = '', final = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t; else interim += t;
      }
      document.getElementById('chatInput').value = final || interim;
      if (final.trim()) { micActive = false; btn.classList.remove('active'); sendChat(); }
    };
    const errMap = {
      'not-allowed':   '🎤 Mic permission denied. Allow microphone in browser settings.',
      'no-speech':     '🎤 No speech detected. Please try again.',
      'audio-capture': '🎤 No microphone found on this device.',
      'network':       '🎤 Network error during speech recognition.',
      'aborted':       ''
    };
    recognition.onerror = (e) => { micActive = false; btn.classList.remove('active'); const m = errMap[e.error] || ('🎤 Error: ' + e.error); if (m) showToast(m); };
    recognition.onend   = () => { micActive = false; btn.classList.remove('active'); btn.title = 'Voice input'; };
    try { recognition.start(); } catch(e) { micActive = false; btn.classList.remove('active'); showToast('⚠️ Could not start microphone.'); }
  };
  if (navigator.mediaDevices?.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(start)
      .catch(() => showToast('🎤 Microphone permission denied. Allow mic access in browser settings.'));
  } else {
    start();
  }
}

/* =============================================================
   VOICE ASSISTANT — Text-to-Speech
============================================================= */
function speakText(text) {
  console.log('Attempting to speak:', text);
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel(); // Cancel any previous speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = chatLang === 'hi' ? 'hi-IN' : chatLang === 'te' ? 'te-IN' : chatLang === 'ta' ? 'ta-IN' : chatLang === 'mr' ? 'mr-IN' : 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onstart = () => console.log('Speech started');
    utterance.onend = () => console.log('Speech ended');
    utterance.onerror = (e) => console.error('Speech error:', e);
    speechSynthesis.speak(utterance);
  } else {
    console.warn('Text-to-speech not supported in this browser.');
  }
}

/* =============================================================
   AUTH MODAL — Login & Sign Up
============================================================= */
function openModal() {
  document.getElementById('loginModal').classList.add('open');
}
function closeModal() {
  document.getElementById('loginModal').classList.remove('open');
}
function handleOverlayClick(e) {
  if (e.target === document.getElementById('loginModal')) closeModal();
}

function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tabLogin').classList.toggle('active', isLogin);
  document.getElementById('tabRegister').classList.toggle('active', !isLogin);
  document.getElementById('loginForm').style.display    = isLogin  ? 'flex' : 'none';
  document.getElementById('registerForm').style.display = !isLogin ? 'flex' : 'none';

  // Update header text
  const heroText = document.getElementById('modalHeroText');
  const heroSub  = document.getElementById('modalHeroSub');
  if (isLogin) {
    heroText.textContent = 'Welcome Back';
    heroSub.textContent  = 'Sign in to access your personalized portal';
  } else {
    heroText.textContent = 'Create Account';
    heroSub.textContent  = 'Join millions of rural citizens benefiting today';
  }
}

function togglePass(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text'; btn.textContent = '🙈';
  } else {
    input.type = 'password'; btn.textContent = '👁';
  }
}

function doLogin() {
  const mobile = document.getElementById('loginMobile').value.trim() || 'User';
  currentUser  = { name: mobile.split('@')[0] || 'User', initials: (mobile[0] || 'U').toUpperCase() };
  updateAuthUI();
  closeModal();
  showToast('✅ Welcome back, ' + currentUser.name + '!');
}

async function doRegister() {
  const name = document.getElementById("regName").value;
  const mobile = document.getElementById("regMobile").value;
  const state = document.getElementById("regState").value;
  const occupation = document.getElementById("regOccupation").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPass").value;
  const confirm = document.getElementById("regPassConfirm").value;
  const terms = document.getElementById("termsCheck").checked;

  if (!terms) {
    alert("Please accept Terms");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        mobile,
        state,
        occupation,
        email,
        password
      })
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Registration Successful");
      closeModal();
    } else {
      alert(data.msg);
    }

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
}

function updateAuthUI() {
  const area = document.getElementById('authArea');
  if (currentUser) {
    area.innerHTML = `<div class="user-chip"><div class="user-avatar">${currentUser.initials}</div>${currentUser.name}</div>`;
  } else {
    area.innerHTML = `<button class="btn-login" onclick="openModal()">Login / Sign Up</button>`;
  }
}

/* =============================================================
   TOAST
============================================================= */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

/* =============================================================
   MOBILE MENU
============================================================= */
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* =============================================================
   CLICK OUTSIDE (lang selector)
============================================================= */
document.addEventListener('click', (e) => {
  const sel = document.getElementById('langSelector');
  if (!e.target.closest('.btn-lang') && !e.target.closest('#langSelector')) {
    sel.classList.remove('open');
  }
});

/* =============================================================
   INIT
============================================================= */
window.addEventListener('DOMContentLoaded', () => {
  pageHistory.push('home');
  renderHomeSchemes();
  filteredSchemes = [...SCHEMES];
  initHeroParticles();

  /* ── Language initialisation ─────────────────────────────────
     detectLanguage() (from translations.js) tries:
       1. localStorage  →  saved user preference
       2. navigator.language  →  browser locale
       3. 'en'  →  safe fallback
     setLang() then applies all [data-i18n] translations and
     highlights the active option in the dropdown.
  ────────────────────────────────────────────────────────────── */
  setLang(detectLanguage());
});
