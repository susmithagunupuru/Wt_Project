/* ============================================================
   RURAL DEVELOPMENT PORTAL — translations.js
   ─────────────────────────────────────────────────────────────
   HOW IT WORKS:
   1. Each key in TRANSLATIONS maps to one language code.
   2. Inside each language object, keys match the `data-i18n`
      attribute on HTML elements.
   3. applyTranslations() walks every [data-i18n] element and
      sets its textContent to the matching key in the active lang.
   4. setLang() stores the choice in localStorage so it survives
      a page refresh. On load, detectLanguage() picks up the
      saved preference, falls back to the browser locale, then
      to English.

   TO ADD A NEW LANGUAGE:
   • Add a new entry to TRANSLATIONS below (copy the 'en' block).
   • Add a <button> for it inside #langSelector in index.html.
   • Add its label to LANG_LABELS below.
   That's it — every [data-i18n] element will auto-update.
============================================================ */

// ─── Language display labels shown in the navbar button ──────
const LANG_LABELS = {
  en: '🇬🇧 EN',
  hi: '🇮🇳 HI',
  te: '🇮🇳 TE',
  ta: '🇮🇳 TA',
  mr: '🇮🇳 MR',
  bn: '🇮🇳 BN',
};

// ─── Translation dictionary ───────────────────────────────────
// Keys must exactly match the data-i18n attribute values in HTML.
const TRANSLATIONS = {

  /* ══════════════ ENGLISH (default) ══════════════════════════ */
  en: {
    // Navbar
    'nav.brand':        'SahayakAI',
    'nav.home':         'Home',
    'nav.schemes':      'Schemes & Jobs',
    'nav.eligibility':  'Eligibility',
    'nav.map':          'Nearby Services',
    'nav.faq':          'FAQ',
    'nav.login':        'Login / Sign Up',
    // Hero
    'hero.badge':       '🌿 Government of India Initiative',
    'hero.title.line1': 'Empowering',
    'hero.title.line2': 'Rural India',
    'hero.title.line3': 'Together',
    'hero.subtitle':    'Your one-stop gateway to government schemes, job opportunities, and essential services. Discover benefits you\'re eligible for, find nearby services, and build a better future for your village.',
    'hero.btn.schemes': '📋 Explore Schemes',
    'hero.btn.eligibility': '✅ Check Eligibility',
    'hero.btn.map':     '🗺️ Nearby Services',
    // Hero stats
    'stat.schemes':     'Active Schemes',
    'stat.states':      'States Covered',
    'stat.beneficiaries': 'Beneficiaries',
    'stat.disbursed':   'Total Disbursed',
    // Services section
    'services.tag':     '🌱 Key Services',
    'services.title':   'Everything You Need, In One Place',
    'services.desc':    'Access government schemes, job listings, nearby facilities, and expert guidance — all designed to uplift rural communities.',
    // Service cards
    'card.govschemes.title': 'Government Schemes',
    'card.govschemes.desc':  'Discover PM Kisan, MGNREGA, PM Awas, and 500+ welfare schemes tailored for rural citizens.',
    'card.govschemes.link':  'Browse Schemes →',
    'card.jobs.title':   'Job Opportunities',
    'card.jobs.desc':    'Find rural employment opportunities, skill development programs, and livelihood schemes.',
    'card.jobs.link':    'Find Jobs →',
    'card.eligibility.title': 'Eligibility Checker',
    'card.eligibility.desc':  'Answer a few simple questions and instantly see which schemes you qualify for.',
    'card.eligibility.link':  'Check Now →',
    'card.nearby.title': 'Nearby Services',
    'card.nearby.desc':  'Locate hospitals, banks, post offices, government offices, and schools near you.',
    'card.nearby.link':  'Find Services →',
    'card.ai.title':     'AI Assistant',
    'card.ai.desc':      'Chat with our AI in Hindi, Telugu, Tamil, and more. Get instant answers about any scheme.',
    'card.ai.link':      'Chat Now →',
    'card.docs.title':   'Document Help',
    'card.docs.desc':    'Get guidance on Aadhaar, ration card, income certificate, and other key documents.',
    'card.docs.link':    'Learn More →',
    'card.edu.title':    'Education Schemes',
    'card.edu.desc':     'Scholarships, mid-day meals, girl child programs, and higher education support.',
    'card.edu.link':     'Explore →',
    'card.agri.title':   'Agriculture Support',
    'card.agri.desc':    'Crop insurance, soil health cards, irrigation schemes, and farmer support programs.',
    'card.agri.link':    'View Programs →',
    // How it works
    'how.tag':           '⚡ Simple Process',
    'how.title':         'How It Works',
    'how.desc':          'Three simple steps to find and apply for benefits you deserve',
    'how.step1.title':   'Enter Your Details',
    'how.step1.desc':    'Provide basic info like age, income, state, and occupation on the eligibility checker.',
    'how.step2.title':   'See Eligible Schemes',
    'how.step2.desc':    'Our system instantly matches you with government schemes you qualify for.',
    'how.step3.title':   'Apply & Track',
    'how.step3.desc':    'Apply directly through the portal and track your application status in real-time.',
    // Popular schemes
    'popular.tag':       '🔥 Popular Schemes',
    'popular.title':     'Top Government Schemes',
    // Footer
    'footer.brand.desc': 'Empowering rural India through digital access to government schemes, employment, and essential services. A Government of India initiative.',
    'footer.services':   'Services',
    'footer.resources':  'Resources',
    'footer.contact':    'Contact',
    'footer.privacy':    'Privacy Policy · Terms of Use · Accessibility',
    // Schemes page
    'schemes.title':     'Schemes & Job Opportunities',
    'schemes.subtitle':  'Explore 500+ central and state government schemes and rural job opportunities',
    'schemes.tab.schemes': '📋 Government Schemes',
    'schemes.tab.jobs':  '💼 Job Opportunities',
    'schemes.search.placeholder': '🔍 Search schemes, jobs, keywords...',
    'schemes.filter.all': 'All',
    // Eligibility page
    'elig.title':        'Eligibility Checker',
    'elig.subtitle':     'Answer a few questions to discover which government schemes you qualify for',
    'elig.label.state':  'State / UT',
    'elig.label.age':    'Your Age',
    'elig.label.income': 'Annual Household Income',
    'elig.label.occ':    'Primary Occupation',
    'elig.btn.check':    '🔍 Check My Eligibility',
    'elig.btn.reset':    '↩ Reset',
    // Map page
    'map.title':         'Nearby Services',
    'map.subtitle':      'Find essential government services and facilities near you',
    // FAQ page
    'faq.title':         'Frequently Asked Questions',
    'faq.subtitle':      'Get answers to common questions about government schemes, eligibility, and applications',
    'faq.search.placeholder': '🔍 Search questions...',
    // Chatbot
    'chat.title':        '🤖 RuralSeva AI',
    'chat.placeholder':  'Ask about any scheme or service...',
  },

  /* ══════════════ HINDI ═══════════════════════════════════════ */
  hi: {
    'nav.brand':        '🌾 सहायक AI',
    'nav.home':         'होम',
    'nav.schemes':      'योजनाएं और नौकरियां',
    'nav.eligibility':  'पात्रता',
    'nav.map':          'नज़दीकी सेवाएं',
    'nav.faq':          'सामान्य प्रश्न',
    'nav.login':        'लॉगिन / साइन अप',
    'hero.badge':       '🌿 भारत सरकार की पहल',
    'hero.title.line1': 'सशक्त',
    'hero.title.line2': 'ग्रामीण भारत',
    'hero.title.line3': 'मिलकर',
    'hero.subtitle':    'सरकारी योजनाओं, रोज़गार के अवसरों और ज़रूरी सेवाओं के लिए आपका एकमात्र पोर्टल। अपनी पात्रता जानें, नज़दीकी सेवाएं खोजें और अपने गाँव का भविष्य बेहतर बनाएं।',
    'hero.btn.schemes': '📋 योजनाएं देखें',
    'hero.btn.eligibility': '✅ पात्रता जांचें',
    'hero.btn.map':     '🗺️ नज़दीकी सेवाएं',
    'stat.schemes':     'सक्रिय योजनाएं',
    'stat.states':      'राज्य शामिल',
    'stat.beneficiaries': 'लाभार्थी',
    'stat.disbursed':   'कुल वितरित',
    'services.tag':     '🌱 मुख्य सेवाएं',
    'services.title':   'हर ज़रूरत, एक जगह',
    'services.desc':    'सरकारी योजनाएं, नौकरी की सूची, नज़दीकी सुविधाएं और विशेषज्ञ मार्गदर्शन — सब कुछ ग्रामीण समुदायों के लिए।',
    'card.govschemes.title': 'सरकारी योजनाएं',
    'card.govschemes.desc':  'पीएम किसान, मनरेगा, पीएम आवास और 500+ कल्याण योजनाएं खोजें।',
    'card.govschemes.link':  'योजनाएं देखें →',
    'card.jobs.title':   'रोज़गार के अवसर',
    'card.jobs.desc':    'ग्रामीण रोज़गार, कौशल विकास कार्यक्रम और आजीविका योजनाएं।',
    'card.jobs.link':    'नौकरियां खोजें →',
    'card.eligibility.title': 'पात्रता जांचकर्ता',
    'card.eligibility.desc':  'कुछ सवालों के जवाब दें और जानें कि आप किन योजनाओं के लिए पात्र हैं।',
    'card.eligibility.link':  'अभी जांचें →',
    'card.nearby.title': 'नज़दीकी सेवाएं',
    'card.nearby.desc':  'आस-पास अस्पताल, बैंक, डाकघर, सरकारी कार्यालय और स्कूल खोजें।',
    'card.nearby.link':  'सेवाएं खोजें →',
    'card.ai.title':     'AI सहायक',
    'card.ai.desc':      'हिंदी, तेलुगू, तमिल और अधिक भाषाओं में हमारे AI से चैट करें।',
    'card.ai.link':      'चैट करें →',
    'card.docs.title':   'दस्तावेज़ सहायता',
    'card.docs.desc':    'आधार, राशन कार्ड, आय प्रमाण पत्र और अन्य दस्तावेज़ों पर मार्गदर्शन।',
    'card.docs.link':    'अधिक जानें →',
    'card.edu.title':    'शिक्षा योजनाएं',
    'card.edu.desc':     'छात्रवृत्ति, मध्याह्न भोजन, बालिका कार्यक्रम और उच्च शिक्षा सहायता।',
    'card.edu.link':     'खोजें →',
    'card.agri.title':   'कृषि सहायता',
    'card.agri.desc':    'फसल बीमा, मृदा स्वास्थ्य कार्ड, सिंचाई योजनाएं और किसान सहायता।',
    'card.agri.link':    'कार्यक्रम देखें →',
    'how.tag':           '⚡ सरल प्रक्रिया',
    'how.title':         'यह कैसे काम करता है',
    'how.desc':          'लाभ खोजने और आवेदन करने के तीन आसान चरण',
    'how.step1.title':   'अपनी जानकारी दर्ज करें',
    'how.step1.desc':    'पात्रता जांचकर्ता में आयु, आय, राज्य और पेशे की जानकारी दें।',
    'how.step2.title':   'पात्र योजनाएं देखें',
    'how.step2.desc':    'हमारी प्रणाली तुरंत आपको उन योजनाओं से मिलाती है जिनके लिए आप पात्र हैं।',
    'how.step3.title':   'आवेदन करें और ट्रैक करें',
    'how.step3.desc':    'पोर्टल के माध्यम से सीधे आवेदन करें और रीयल-टाइम में स्थिति ट्रैक करें।',
    'popular.tag':       '🔥 लोकप्रिय योजनाएं',
    'popular.title':     'शीर्ष सरकारी योजनाएं',
    'footer.brand.desc': 'सरकारी योजनाओं, रोज़गार और आवश्यक सेवाओं तक डिजिटल पहुंच के माध्यम से ग्रामीण भारत को सशक्त बनाना। भारत सरकार की पहल।',
    'footer.services':   'सेवाएं',
    'footer.resources':  'संसाधन',
    'footer.contact':    'संपर्क',
    'footer.privacy':    'गोपनीयता नीति · उपयोग की शर्तें · पहुंच',
    'schemes.title':     'योजनाएं और रोज़गार के अवसर',
    'schemes.subtitle':  '500+ केंद्र और राज्य सरकार की योजनाएं और ग्रामीण रोज़गार के अवसर',
    'schemes.tab.schemes': '📋 सरकारी योजनाएं',
    'schemes.tab.jobs':  '💼 रोज़गार के अवसर',
    'schemes.search.placeholder': '🔍 योजनाएं, नौकरियां, कीवर्ड खोजें...',
    'schemes.filter.all': 'सभी',
    'elig.title':        'पात्रता जांचकर्ता',
    'elig.subtitle':     'कुछ प्रश्नों के उत्तर दें और जानें आप किन सरकारी योजनाओं के लिए पात्र हैं',
    'elig.label.state':  'राज्य / केंद्रशासित प्रदेश',
    'elig.label.age':    'आपकी आयु',
    'elig.label.income': 'वार्षिक घरेलू आय',
    'elig.label.occ':    'मुख्य व्यवसाय',
    'elig.btn.check':    '🔍 पात्रता जांचें',
    'elig.btn.reset':    '↩ रीसेट करें',
    'map.title':         'नज़दीकी सेवाएं',
    'map.subtitle':      'अपने नज़दीकी आवश्यक सरकारी सेवाएं और सुविधाएं खोजें',
    'faq.title':         'अक्सर पूछे जाने वाले प्रश्न',
    'faq.subtitle':      'सरकारी योजनाओं, पात्रता और आवेदनों के बारे में सामान्य प्रश्नों के उत्तर पाएं',
    'faq.search.placeholder': '🔍 प्रश्न खोजें...',
    'chat.title':        '🤖 RuralSeva AI',
    'chat.placeholder':  'किसी भी योजना के बारे में पूछें...',
  },

  /* ══════════════ TELUGU ══════════════════════════════════════ */
  te: {
    'nav.brand':        'సహాయక AI',
    'nav.home':         'హోమ్',
    'nav.schemes':      'పథకాలు & ఉద్యోగాలు',
    'nav.eligibility':  'అర్హత',
    'nav.map':          'సమీప సేవలు',
    'nav.faq':          'తరచూ అడిగే ప్రశ్నలు',
    'nav.login':        'లాగిన్ / సైన్ అప్',
    'hero.badge':       '🌿 భారత ప్రభుత్వ చొరవ',
    'hero.title.line1': 'శక్తివంతం',
    'hero.title.line2': 'గ్రామీణ భారతం',
    'hero.title.line3': 'కలిసి',
    'hero.subtitle':    'ప్రభుత్వ పథకాలు, ఉద్యోగ అవకాశాలు మరియు అవసరమైన సేవలకు మీ ఒకే ద్వారం. మీకు అర్హత ఉన్న ప్రయోజనాలు కనుగొనండి, సమీప సేవలు వెతకండి.',
    'hero.btn.schemes': '📋 పథకాలు చూడండి',
    'hero.btn.eligibility': '✅ అర్హత తనిఖీ',
    'hero.btn.map':     '🗺️ సమీప సేవలు',
    'stat.schemes':     'చురుకైన పథకాలు',
    'stat.states':      'రాష్ట్రాలు కవర్',
    'stat.beneficiaries': 'లబ్ధిదారులు',
    'stat.disbursed':   'మొత్తం పంపిణీ',
    'services.tag':     '🌱 కీలక సేవలు',
    'services.title':   'మీకు కావలసింది అన్నీ ఒకే చోట',
    'services.desc':    'ప్రభుత్వ పథకాలు, ఉద్యోగ జాబితాలు, సమీప సదుపాయాలు మరియు నిపుణుల మార్గదర్శకత్వం — అన్నీ గ్రామీణ సమాజాల అభ్యున్నతి కోసం.',
    'card.govschemes.title': 'ప్రభుత్వ పథకాలు',
    'card.govschemes.desc':  'PM కిసాన్, MGNREGA, PM ఆవాస్ మరియు 500+ సంక్షేమ పథకాలు కనుగొనండి.',
    'card.govschemes.link':  'పథకాలు చూడండి →',
    'card.jobs.title':   'ఉద్యోగ అవకాశాలు',
    'card.jobs.desc':    'గ్రామీణ ఉపాధి అవకాశాలు, నైపుణ్య అభివృద్ధి కార్యక్రమాలు కనుగొనండి.',
    'card.jobs.link':    'ఉద్యోగాలు కనుగొనండి →',
    'card.eligibility.title': 'అర్హత తనిఖీదారు',
    'card.eligibility.desc':  'కొన్ని ప్రశ్నలకు సమాధానమివ్వండి మరియు మీరు ఏ పథకాలకు అర్హులో తెలుసుకోండి.',
    'card.eligibility.link':  'ఇప్పుడు తనిఖీ చేయండి →',
    'card.nearby.title': 'సమీప సేవలు',
    'card.nearby.desc':  'సమీపంలో ఆసుపత్రులు, బ్యాంకులు, తపాలా కార్యాలయాలు, ప్రభుత్వ కార్యాలయాలు కనుగొనండి.',
    'card.nearby.link':  'సేవలు కనుగొనండి →',
    'card.ai.title':     'AI సహాయకుడు',
    'card.ai.desc':      'తెలుగు, హిందీ, తమిళంలో మా AIతో చాట్ చేయండి. ఏ పథకం గురించైనా తక్షణ సమాధానాలు పొందండి.',
    'card.ai.link':      'చాట్ చేయండి →',
    'card.docs.title':   'పత్రాల సహాయం',
    'card.docs.desc':    'ఆధార్, రేషన్ కార్డ్, ఆదాయ సర్టిఫికేట్ మరియు ఇతర పత్రాలపై మార్గదర్శకత్వం.',
    'card.docs.link':    'మరింత తెలుసుకోండి →',
    'card.edu.title':    'విద్య పథకాలు',
    'card.edu.desc':     'స్కాలర్‌షిప్‌లు, మధ్యాహ్న భోజనం, బాలికల కార్యక్రమాలు మరియు ఉన్నత విద్య మద్దతు.',
    'card.edu.link':     'అన్వేషించండి →',
    'card.agri.title':   'వ్యవసాయ మద్దతు',
    'card.agri.desc':    'పంట బీమా, నేల ఆరోగ్య కార్డులు, నీటిపారుదల పథకాలు మరియు రైతు మద్దతు.',
    'card.agri.link':    'కార్యక్రమాలు చూడండి →',
    'how.tag':           '⚡ సరళమైన ప్రక్రియ',
    'how.title':         'ఇది ఎలా పని చేస్తుంది',
    'how.desc':          'మీకు అర్హమైన ప్రయోజనాలు కనుగొని దరఖాస్తు చేయడానికి మూడు సరళమైన దశలు',
    'how.step1.title':   'మీ వివరాలు నమోదు చేయండి',
    'how.step1.desc':    'అర్హత తనిఖీదారులో వయసు, ఆదాయం, రాష్ట్రం మరియు వృత్తి గురించి సమాచారం ఇవ్వండి.',
    'how.step2.title':   'అర్హమైన పథకాలు చూడండి',
    'how.step2.desc':    'మా వ్యవస్థ మీకు అర్హత ఉన్న ప్రభుత్వ పథకాలతో తక్షణమే మీరికీ కలుపుతుంది.',
    'how.step3.title':   'దరఖాస్తు & ట్రాక్ చేయండి',
    'how.step3.desc':    'పోర్టల్ ద్వారా నేరుగా దరఖాస్తు చేసి రియల్-టైమ్‌లో స్థితిని ట్రాక్ చేయండి.',
    'popular.tag':       '🔥 జనాదరణ పొందిన పథకాలు',
    'popular.title':     'అగ్ర ప్రభుత్వ పథకాలు',
    'footer.brand.desc': 'ప్రభుత్వ పథకాలు, ఉపాధి మరియు అవసరమైన సేవలకు డిజిటల్ యాక్సెస్ ద్వారా గ్రామీణ భారతాన్ని శక్తివంతం చేయడం. భారత ప్రభుత్వ చొరవ.',
    'footer.services':   'సేవలు',
    'footer.resources':  'వనరులు',
    'footer.contact':    'సంప్రదించండి',
    'footer.privacy':    'గోప్యతా విధానం · వినియోగ నిబంధనలు · యాక్సెస్',
    'schemes.title':     'పథకాలు & ఉద్యోగ అవకాశాలు',
    'schemes.subtitle':  '500+ కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాలు మరియు గ్రామీణ ఉద్యోగ అవకాశాలు',
    'schemes.tab.schemes': '📋 ప్రభుత్వ పథకాలు',
    'schemes.tab.jobs':  '💼 ఉద్యోగ అవకాశాలు',
    'schemes.search.placeholder': '🔍 పథకాలు, ఉద్యోగాలు, కీవర్డ్‌లు వెతకండి...',
    'schemes.filter.all': 'అన్నీ',
    'elig.title':        'అర్హత తనిఖీదారు',
    'elig.subtitle':     'కొన్ని ప్రశ్నలకు సమాధానమివ్వండి మరియు మీరు ఏ ప్రభుత్వ పథకాలకు అర్హులో తెలుసుకోండి',
    'elig.label.state':  'రాష్ట్రం / కేంద్రపాలిత ప్రాంతం',
    'elig.label.age':    'మీ వయసు',
    'elig.label.income': 'వార్షిక గృహ ఆదాయం',
    'elig.label.occ':    'ప్రాథమిక వృత్తి',
    'elig.btn.check':    '🔍 అర్హత తనిఖీ చేయండి',
    'elig.btn.reset':    '↩ రీసెట్',
    'map.title':         'సమీప సేవలు',
    'map.subtitle':      'మీ సమీపంలో అవసరమైన ప్రభుత్వ సేవలు మరియు సదుపాయాలు కనుగొనండి',
    'faq.title':         'తరచూ అడిగే ప్రశ్నలు',
    'faq.subtitle':      'ప్రభుత్వ పథకాలు, అర్హత మరియు దరఖాస్తులపై సాధారణ ప్రశ్నలకు సమాధానాలు పొందండి',
    'faq.search.placeholder': '🔍 ప్రశ్నలు వెతకండి...',
    'chat.title':        '🤖 RuralSeva AI',
    'chat.placeholder':  'ఏ పథకం గురించైనా అడగండి...',
  },

  /* ══════════════ TAMIL ═══════════════════════════════════════ */
  ta: {
    'nav.brand':        '🌾 கிராம வளர்ச்சி போர்டல்',
    'nav.home':         'முகப்பு',
    'nav.schemes':      'திட்டங்கள் & வேலைகள்',
    'nav.eligibility':  'தகுதி',
    'nav.map':          'அருகில் உள்ள சேவைகள்',
    'nav.faq':          'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'nav.login':        'உள்நுழை / பதிவு செய்',
    'hero.badge':       '🌿 இந்திய அரசின் முன்முயற்சி',
    'hero.title.line1': 'வலுவூட்டுதல்',
    'hero.title.line2': 'கிராமப்புற இந்தியா',
    'hero.title.line3': 'ஒன்றாக',
    'hero.subtitle':    'அரசு திட்டங்கள், வேலை வாய்ப்புகள் மற்றும் அத்தியாவசிய சேவைகளுக்கான உங்கள் ஒரே நுழைவாயில். நீங்கள் தகுதியான சலுகைகளை கண்டறியுங்கள்.',
    'hero.btn.schemes': '📋 திட்டங்களை ஆராயுங்கள்',
    'hero.btn.eligibility': '✅ தகுதி சரிபார்க்கவும்',
    'hero.btn.map':     '🗺️ அருகில் உள்ள சேவைகள்',
    'stat.schemes':     'செயலில் உள்ள திட்டங்கள்',
    'stat.states':      'மாநிலங்கள் உள்ளடக்கப்பட்டுள்ளன',
    'stat.beneficiaries': 'பயனாளிகள்',
    'stat.disbursed':   'மொத்தம் வழங்கப்பட்டது',
    'services.tag':     '🌱 முக்கிய சேவைகள்',
    'services.title':   'உங்களுக்கு தேவையானது அனைத்தும், ஒரே இடத்தில்',
    'services.desc':    'அரசு திட்டங்கள், வேலை பட்டியல்கள், அருகில் உள்ள வசதிகள் — கிராமப்புற சமூகங்களை உயர்த்த வடிவமைக்கப்பட்டவை.',
    'card.govschemes.title': 'அரசு திட்டங்கள்',
    'card.govschemes.desc':  'PM கிசான், MGNREGA, PM ஆவாஸ் மற்றும் 500+ நலத் திட்டங்களை கண்டறியுங்கள்.',
    'card.govschemes.link':  'திட்டங்களை பார்க்கவும் →',
    'card.jobs.title':   'வேலை வாய்ப்புகள்',
    'card.jobs.desc':    'கிராமப்புற வேலை வாய்ப்புகள், திறன் மேம்பாட்டு திட்டங்கள்.',
    'card.jobs.link':    'வேலைகளை கண்டறியுங்கள் →',
    'card.eligibility.title': 'தகுதி சரிபாரீட்டாளர்',
    'card.eligibility.desc':  'சில கேள்விகளுக்கு பதிலளிக்கவும், நீங்கள் எந்த திட்டங்களுக்கு தகுதியானவர் என்று அறியுங்கள்.',
    'card.eligibility.link':  'இப்போது சரிபாரவும் →',
    'card.nearby.title': 'அருகில் உள்ள சேவைகள்',
    'card.nearby.desc':  'அருகில் உள்ள மருத்துவமனைகள், வங்கிகள், அஞ்சல் அலுவலகங்கள் கண்டறியுங்கள்.',
    'card.nearby.link':  'சேவைகளை கண்டறியுங்கள் →',
    'card.ai.title':     'AI உதவியாளர்',
    'card.ai.desc':      'தமிழ், இந்தி, தெலுங்கு மற்றும் பலவற்றில் எங்கள் AIயுடன் அரட்டை அடிக்கவும்.',
    'card.ai.link':      'இப்போது அரட்டை →',
    'card.docs.title':   'ஆவண உதவி',
    'card.docs.desc':    'ஆதார், ரேஷன் கார்டு, வருமான சான்றிதழ் குறித்த வழிகாட்டுதல்.',
    'card.docs.link':    'மேலும் அறியுங்கள் →',
    'card.edu.title':    'கல்வி திட்டங்கள்',
    'card.edu.desc':     'உதவித்தொகை, மதிய உணவு, பெண் குழந்தை திட்டங்கள் மற்றும் உயர்கல்வி ஆதரவு.',
    'card.edu.link':     'ஆராயுங்கள் →',
    'card.agri.title':   'விவசாய ஆதரவு',
    'card.agri.desc':    'பயிர் காப்பீடு, மண் சுகாதார அட்டைகள், நீர்ப்பாசன திட்டங்கள்.',
    'card.agri.link':    'திட்டங்களை பாருங்கள் →',
    'how.tag':           '⚡ எளிய செயல்முறை',
    'how.title':         'இது எப்படி வேலை செய்கிறது',
    'how.desc':          'நீங்கள் தகுதியான சலுகைகளை கண்டறிந்து விண்ணப்பிக்க மூன்று எளிய படிகள்',
    'how.step1.title':   'உங்கள் விவரங்களை உள்ளிடுங்கள்',
    'how.step1.desc':    'தகுதி சரிபாரீட்டாளரில் வயது, வருமானம், மாநிலம் மற்றும் தொழில் பற்றிய தகவல்களை வழங்குங்கள்.',
    'how.step2.title':   'தகுதியான திட்டங்களை பாருங்கள்',
    'how.step2.desc':    'எங்கள் அமைப்பு உங்களுக்கு தகுதியான திட்டங்களுடன் உடனடியாக பொருத்துகிறது.',
    'how.step3.title':   'விண்ணப்பி & தடமறி',
    'how.step3.desc':    'போர்டல் வழியாக நேரடியாக விண்ணப்பிக்கவும் மற்றும் நிலையை நேரடியாக கண்காணிக்கவும்.',
    'popular.tag':       '🔥 பிரபலமான திட்டங்கள்',
    'popular.title':     'சிறந்த அரசு திட்டங்கள்',
    'footer.brand.desc': 'அரசு திட்டங்கள், வேலை மற்றும் அத்தியாவசிய சேவைகளுக்கான டிஜிட்டல் அணுகல் மூலம் கிராமப்புற இந்தியாவை வலுப்படுத்துதல்.',
    'footer.services':   'சேவைகள்',
    'footer.resources':  'வளங்கள்',
    'footer.contact':    'தொடர்பு',
    'footer.privacy':    'தனியுரிமை கொள்கை · பயன்பாட்டு விதிமுறைகள் · அணுகல்',
    'schemes.title':     'திட்டங்கள் & வேலை வாய்ப்புகள்',
    'schemes.subtitle':  '500+ மத்திய மற்றும் மாநில அரசு திட்டங்கள் மற்றும் கிராமப்புற வேலை வாய்ப்புகள்',
    'schemes.tab.schemes': '📋 அரசு திட்டங்கள்',
    'schemes.tab.jobs':  '💼 வேலை வாய்ப்புகள்',
    'schemes.search.placeholder': '🔍 திட்டங்கள், வேலைகள் தேடுங்கள்...',
    'schemes.filter.all': 'அனைத்தும்',
    'elig.title':        'தகுதி சரிபாரீட்டாளர்',
    'elig.subtitle':     'சில கேள்விகளுக்கு பதிலளிக்கவும், நீங்கள் எந்த அரசு திட்டங்களுக்கு தகுதியானவர் என்று அறியுங்கள்',
    'elig.label.state':  'மாநிலம் / யூடி',
    'elig.label.age':    'உங்கள் வயது',
    'elig.label.income': 'ஆண்டு வருமானம்',
    'elig.label.occ':    'முதன்மை தொழில்',
    'elig.btn.check':    '🔍 தகுதி சரிபார்க்கவும்',
    'elig.btn.reset':    '↩ மீட்டமை',
    'map.title':         'அருகில் உள்ள சேவைகள்',
    'map.subtitle':      'உங்களுக்கு அருகில் உள்ள அத்தியாவசிய அரசு சேவைகளை கண்டறியுங்கள்',
    'faq.title':         'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'faq.subtitle':      'அரசு திட்டங்கள், தகுதி மற்றும் விண்ணப்பங்கள் பற்றிய கேள்விகளுக்கு பதில்கள்',
    'faq.search.placeholder': '🔍 கேள்விகளை தேடுங்கள்...',
    'chat.title':        '🤖 RuralSeva AI',
    'chat.placeholder':  'எந்த திட்டத்தைப் பற்றியும் கேளுங்கள்...',
  },

  /* ══════════════ MARATHI ═════════════════════════════════════ */
  mr: {
    'nav.brand':        '🌾 ग्रामीण विकास पोर्टल',
    'nav.home':         'मुख्यपृष्ठ',
    'nav.schemes':      'योजना आणि नोकऱ्या',
    'nav.eligibility':  'पात्रता',
    'nav.map':          'जवळील सेवा',
    'nav.faq':          'वारंवार विचारले जाणारे प्रश्न',
    'nav.login':        'लॉगिन / नोंदणी',
    'hero.badge':       '🌿 भारत सरकारचा उपक्रम',
    'hero.title.line1': 'सशक्त करणे',
    'hero.title.line2': 'ग्रामीण भारत',
    'hero.title.line3': 'एकत्र',
    'hero.subtitle':    'सरकारी योजना, रोजगार संधी आणि आवश्यक सेवांसाठी तुमचे एकमात्र केंद्र. तुम्ही पात्र असलेले लाभ शोधा, जवळील सेवा मिळवा.',
    'hero.btn.schemes': '📋 योजना पाहा',
    'hero.btn.eligibility': '✅ पात्रता तपासा',
    'hero.btn.map':     '🗺️ जवळील सेवा',
    'stat.schemes':     'सक्रिय योजना',
    'stat.states':      'राज्ये समाविष्ट',
    'stat.beneficiaries': 'लाभार्थी',
    'stat.disbursed':   'एकूण वितरित',
    'services.tag':     '🌱 मुख्य सेवा',
    'services.title':   'तुम्हाला जे हवे ते सर्व, एकाच ठिकाणी',
    'services.desc':    'सरकारी योजना, नोकरीच्या याद्या, जवळील सुविधा आणि तज्ज्ञ मार्गदर्शन — सर्व ग्रामीण समुदायांना उन्नत करण्यासाठी.',
    'card.govschemes.title': 'सरकारी योजना',
    'card.govschemes.desc':  'PM किसान, MGNREGA, PM आवास आणि 500+ कल्याण योजना शोधा.',
    'card.govschemes.link':  'योजना पाहा →',
    'card.jobs.title':   'रोजगार संधी',
    'card.jobs.desc':    'ग्रामीण रोजगार संधी, कौशल्य विकास कार्यक्रम शोधा.',
    'card.jobs.link':    'नोकऱ्या शोधा →',
    'card.eligibility.title': 'पात्रता तपासक',
    'card.eligibility.desc':  'काही प्रश्नांची उत्तरे द्या आणि तुम्ही कोणत्या योजनांसाठी पात्र आहात ते जाणून घ्या.',
    'card.eligibility.link':  'आता तपासा →',
    'card.nearby.title': 'जवळील सेवा',
    'card.nearby.desc':  'जवळील रुग्णालये, बँका, टपाल कार्यालये, सरकारी कार्यालये शोधा.',
    'card.nearby.link':  'सेवा शोधा →',
    'card.ai.title':     'AI सहाय्यक',
    'card.ai.desc':      'मराठी, हिंदी, तेलुगूमध्ये आमच्या AIशी चॅट करा. कोणत्याही योजनेबद्दल त्वरित उत्तरे मिळवा.',
    'card.ai.link':      'आता चॅट करा →',
    'card.docs.title':   'कागदपत्र मदत',
    'card.docs.desc':    'आधार, रेशन कार्ड, उत्पन्न प्रमाणपत्र आणि इतर महत्त्वाच्या कागदपत्रांवर मार्गदर्शन.',
    'card.docs.link':    'अधिक जाणून घ्या →',
    'card.edu.title':    'शिक्षण योजना',
    'card.edu.desc':     'शिष्यवृत्ती, मध्यान्ह भोजन, मुलींचे कार्यक्रम आणि उच्च शिक्षण सहाय्य.',
    'card.edu.link':     'शोधा →',
    'card.agri.title':   'शेती सहाय्य',
    'card.agri.desc':    'पीक विमा, माती आरोग्य कार्ड, सिंचन योजना आणि शेतकरी सहाय्य.',
    'card.agri.link':    'कार्यक्रम पाहा →',
    'how.tag':           '⚡ सोपी प्रक्रिया',
    'how.title':         'हे कसे कार्य करते',
    'how.desc':          'तुम्ही पात्र असलेले लाभ शोधण्यासाठी आणि अर्ज करण्यासाठी तीन सोपे चरण',
    'how.step1.title':   'तुमचे तपशील प्रविष्ट करा',
    'how.step1.desc':    'पात्रता तपासकमध्ये वय, उत्पन्न, राज्य आणि व्यवसाय माहिती द्या.',
    'how.step2.title':   'पात्र योजना पाहा',
    'how.step2.desc':    'आमची प्रणाली तुम्हाला पात्र असलेल्या सरकारी योजनांशी त्वरित जुळवते.',
    'how.step3.title':   'अर्ज करा आणि ट्रॅक करा',
    'how.step3.desc':    'पोर्टलद्वारे थेट अर्ज करा आणि रिअल-टाइममध्ये स्थिती ट्रॅक करा.',
    'popular.tag':       '🔥 लोकप्रिय योजना',
    'popular.title':     'शीर्ष सरकारी योजना',
    'footer.brand.desc': 'सरकारी योजना, रोजगार आणि आवश्यक सेवांपर्यंत डिजिटल प्रवेशाद्वारे ग्रामीण भारताला सशक्त करणे.',
    'footer.services':   'सेवा',
    'footer.resources':  'संसाधने',
    'footer.contact':    'संपर्क',
    'footer.privacy':    'गोपनीयता धोरण · वापर अटी · प्रवेशयोग्यता',
    'schemes.title':     'योजना आणि रोजगार संधी',
    'schemes.subtitle':  '500+ केंद्र आणि राज्य सरकारी योजना आणि ग्रामीण रोजगार संधी',
    'schemes.tab.schemes': '📋 सरकारी योजना',
    'schemes.tab.jobs':  '💼 रोजगार संधी',
    'schemes.search.placeholder': '🔍 योजना, नोकऱ्या, कीवर्ड शोधा...',
    'schemes.filter.all': 'सर्व',
    'elig.title':        'पात्रता तपासक',
    'elig.subtitle':     'काही प्रश्नांची उत्तरे द्या आणि तुम्ही कोणत्या सरकारी योजनांसाठी पात्र आहात ते जाणून घ्या',
    'elig.label.state':  'राज्य / केंद्रशासित प्रदेश',
    'elig.label.age':    'तुमचे वय',
    'elig.label.income': 'वार्षिक घरगुती उत्पन्न',
    'elig.label.occ':    'प्राथमिक व्यवसाय',
    'elig.btn.check':    '🔍 पात्रता तपासा',
    'elig.btn.reset':    '↩ रीसेट',
    'map.title':         'जवळील सेवा',
    'map.subtitle':      'तुमच्या जवळील आवश्यक सरकारी सेवा आणि सुविधा शोधा',
    'faq.title':         'वारंवार विचारले जाणारे प्रश्न',
    'faq.subtitle':      'सरकारी योजना, पात्रता आणि अर्जांबद्दल सामान्य प्रश्नांची उत्तरे मिळवा',
    'faq.search.placeholder': '🔍 प्रश्न शोधा...',
    'chat.title':        '🤖 RuralSeva AI',
    'chat.placeholder':  'कोणत्याही योजनेबद्दल विचारा...',
  },

  /* ══════════════ BENGALI ═════════════════════════════════════ */
  bn: {
    'nav.brand':        '🌾 গ্রামীণ উন্নয়ন পোর্টাল',
    'nav.home':         'হোম',
    'nav.schemes':      'প্রকল্প ও চাকরি',
    'nav.eligibility':  'যোগ্যতা',
    'nav.map':          'কাছের সেবা',
    'nav.faq':          'সাধারণ প্রশ্নাবলী',
    'nav.login':        'লগইন / নিবন্ধন',
    'hero.badge':       '🌿 ভারত সরকারের উদ্যোগ',
    'hero.title.line1': 'ক্ষমতায়ন',
    'hero.title.line2': 'গ্রামীণ ভারত',
    'hero.title.line3': 'একসাথে',
    'hero.subtitle':    'সরকারি প্রকল্প, চাকরির সুযোগ এবং প্রয়োজনীয় সেবার জন্য আপনার একমাত্র প্রবেশদ্বার। আপনার যোগ্য সুবিধা খুঁজুন, কাছের সেবা পান।',
    'hero.btn.schemes': '📋 প্রকল্প দেখুন',
    'hero.btn.eligibility': '✅ যোগ্যতা যাচাই',
    'hero.btn.map':     '🗺️ কাছের সেবা',
    'stat.schemes':     'সক্রিয় প্রকল্প',
    'stat.states':      'রাজ্য অন্তর্ভুক্ত',
    'stat.beneficiaries': 'সুবিধাভোগী',
    'stat.disbursed':   'মোট বিতরণ',
    'services.tag':     '🌱 মূল সেবা',
    'services.title':   'আপনার প্রয়োজনীয় সব কিছু, এক জায়গায়',
    'services.desc':    'সরকারি প্রকল্প, চাকরির তালিকা, কাছের সুবিধা এবং বিশেষজ্ঞ পথনির্দেশনা — সব গ্রামীণ সম্প্রদায়ের উন্নয়নের জন্য।',
    'card.govschemes.title': 'সরকারি প্রকল্প',
    'card.govschemes.desc':  'PM কিসান, MGNREGA, PM আবাস এবং ৫০০+ কল্যাণ প্রকল্প খুঁজুন।',
    'card.govschemes.link':  'প্রকল্প দেখুন →',
    'card.jobs.title':   'চাকরির সুযোগ',
    'card.jobs.desc':    'গ্রামীণ কর্মসংস্থান সুযোগ, দক্ষতা উন্নয়ন কার্যক্রম খুঁজুন।',
    'card.jobs.link':    'চাকরি খুঁজুন →',
    'card.eligibility.title': 'যোগ্যতা পরীক্ষক',
    'card.eligibility.desc':  'কিছু প্রশ্নের উত্তর দিন এবং আপনি কোন প্রকল্পের জন্য যোগ্য তা জানুন।',
    'card.eligibility.link':  'এখনই পরীক্ষা করুন →',
    'card.nearby.title': 'কাছের সেবা',
    'card.nearby.desc':  'কাছের হাসপাতাল, ব্যাংক, পোস্ট অফিস, সরকারি অফিস খুঁজুন।',
    'card.nearby.link':  'সেবা খুঁজুন →',
    'card.ai.title':     'AI সহকারী',
    'card.ai.desc':      'বাংলা, হিন্দি, তেলুগুতে আমাদের AI-এর সাথে চ্যাট করুন।',
    'card.ai.link':      'এখন চ্যাট →',
    'card.docs.title':   'নথি সহায়তা',
    'card.docs.desc':    'আধার, রেশন কার্ড, আয় সনদপত্র এবং অন্যান্য নথি নিয়ে পথনির্দেশনা।',
    'card.docs.link':    'আরও জানুন →',
    'card.edu.title':    'শিক্ষা প্রকল্প',
    'card.edu.desc':     'বৃত্তি, মধ্যাহ্ন ভোজন, কন্যা শিশু কর্মসূচি এবং উচ্চশিক্ষা সহায়তা।',
    'card.edu.link':     'অন্বেষণ করুন →',
    'card.agri.title':   'কৃষি সহায়তা',
    'card.agri.desc':    'ফসল বীমা, মাটি স্বাস্থ্য কার্ড, সেচ প্রকল্প এবং কৃষক সহায়তা।',
    'card.agri.link':    'কার্যক্রম দেখুন →',
    'how.tag':           '⚡ সহজ প্রক্রিয়া',
    'how.title':         'এটি কীভাবে কাজ করে',
    'how.desc':          'আপনার যোগ্য সুবিধা খুঁজে পেতে এবং আবেদন করতে তিনটি সহজ ধাপ',
    'how.step1.title':   'আপনার বিবরণ দিন',
    'how.step1.desc':    'যোগ্যতা পরীক্ষকে বয়স, আয়, রাজ্য এবং পেশার তথ্য দিন।',
    'how.step2.title':   'যোগ্য প্রকল্প দেখুন',
    'how.step2.desc':    'আমাদের সিস্টেম তাৎক্ষণিকভাবে আপনাকে যোগ্য সরকারি প্রকল্পের সাথে মেলায়।',
    'how.step3.title':   'আবেদন করুন ও ট্র্যাক করুন',
    'how.step3.desc':    'পোর্টালের মাধ্যমে সরাসরি আবেদন করুন এবং রিয়েল-টাইমে অবস্থা ট্র্যাক করুন।',
    'popular.tag':       '🔥 জনপ্রিয় প্রকল্প',
    'popular.title':     'শীর্ষ সরকারি প্রকল্প',
    'footer.brand.desc': 'সরকারি প্রকল্প, কর্মসংস্থান এবং প্রয়োজনীয় সেবায় ডিজিটাল প্রবেশের মাধ্যমে গ্রামীণ ভারতকে ক্ষমতায়িত করা।',
    'footer.services':   'সেবা',
    'footer.resources':  'সম্পদ',
    'footer.contact':    'যোগাযোগ',
    'footer.privacy':    'গোপনীয়তা নীতি · ব্যবহারের শর্তাবলী · অ্যাক্সেসিবিলিটি',
    'schemes.title':     'প্রকল্প ও চাকরির সুযোগ',
    'schemes.subtitle':  '৫০০+ কেন্দ্রীয় ও রাজ্য সরকারি প্রকল্প এবং গ্রামীণ চাকরির সুযোগ',
    'schemes.tab.schemes': '📋 সরকারি প্রকল্প',
    'schemes.tab.jobs':  '💼 চাকরির সুযোগ',
    'schemes.search.placeholder': '🔍 প্রকল্প, চাকরি, কীওয়ার্ড খুঁজুন...',
    'schemes.filter.all': 'সব',
    'elig.title':        'যোগ্যতা পরীক্ষক',
    'elig.subtitle':     'কিছু প্রশ্নের উত্তর দিন এবং আপনি কোন সরকারি প্রকল্পের জন্য যোগ্য তা জানুন',
    'elig.label.state':  'রাজ্য / কেন্দ্রশাসিত অঞ্চল',
    'elig.label.age':    'আপনার বয়স',
    'elig.label.income': 'বার্ষিক পারিবারিক আয়',
    'elig.label.occ':    'প্রধান পেশা',
    'elig.btn.check':    '🔍 যোগ্যতা পরীক্ষা করুন',
    'elig.btn.reset':    '↩ রিসেট',
    'map.title':         'কাছের সেবা',
    'map.subtitle':      'আপনার কাছে প্রয়োজনীয় সরকারি সেবা এবং সুবিধা খুঁজুন',
    'faq.title':         'সাধারণ প্রশ্নাবলী',
    'faq.subtitle':      'সরকারি প্রকল্প, যোগ্যতা এবং আবেদন সম্পর্কে সাধারণ প্রশ্নের উত্তর পান',
    'faq.search.placeholder': '🔍 প্রশ্ন খুঁজুন...',
    'chat.title':        '🤖 RuralSeva AI',
    'chat.placeholder':  'যেকোনো প্রকল্প সম্পর্কে জিজ্ঞাসা করুন...',
  },
};

/* ============================================================
   LANGUAGE ENGINE
   ─────────────────────────────────────────────────────────────
   detectLanguage()   — Picks saved pref → browser locale → 'en'
   applyTranslations()— Walks every [data-i18n] and updates text;
                        also handles [data-i18n-placeholder].
   setLang()          — Public function; saves to localStorage,
                        updates navbar button, fires translation.
============================================================ */

/**
 * Detect the best language to use on first load.
 * Priority: localStorage → browser language → 'en'
 */
function detectLanguage() {
  const saved = localStorage.getItem('rdp_lang');
  if (saved && TRANSLATIONS[saved]) return saved;

  // Try to map the browser locale to a supported language
  const browserLang = (navigator.language || navigator.userLanguage || 'en')
    .toLowerCase()
    .split('-')[0]; // e.g. "hi-IN" → "hi"

  return TRANSLATIONS[browserLang] ? browserLang : 'en';
}

/**
 * Walk all [data-i18n] elements and set their text content.
 * Also updates [data-i18n-placeholder] for input placeholders.
 * @param {string} lang - language code, e.g. 'en', 'hi', 'te'
 */
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update placeholder attributes (inputs / textareas)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update <html lang=""> for accessibility
  document.documentElement.lang = lang;
}

/**
 * Set active language, persist it, update UI.
 * Called from both the dropdown buttons and DOMContentLoaded.
 * @param {string} lang - language code
 */
function setLang(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';      // Fallback guard

  currentLang = lang;                         // Update global state
  localStorage.setItem('rdp_lang', lang);     // Persist preference

  // Update the navbar toggle button label
  const btn = document.querySelector('.btn-lang');
  if (btn) btn.textContent = '🌐 ' + (LANG_LABELS[lang] || 'EN').split(' ')[1];

  // Close the dropdown
  const sel = document.getElementById('langSelector');
  if (sel) sel.classList.remove('open');

  // Apply all translations
  applyTranslations(lang);

  // Highlight the active language option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('onclick') === `setLang('${lang}')`);
  });

  // Show user-friendly toast
  const langName = {
    en: 'English', hi: 'हिन्दी', te: 'తెలుగు',
    ta: 'தமிழ்',  mr: 'मराठी', bn: 'বাংলা'
  };
  showToast('🌐 ' + (langName[lang] || lang.toUpperCase()));
}