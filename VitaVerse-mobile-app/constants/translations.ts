export type Lang = "en" | "hi" | "mr";

export type Translations = {
  welcomeBack: string; goodMorning: string; tagline: string;
  yourModules: string; upcoming: string;
  consult: string; finance: string; arLearn: string;
  dashboard: string; profile: string; reminders: string;
  consultDesc: string; financeDesc: string; arDesc: string;
  dashDesc: string; profileDesc: string; remindersDesc: string;
  findDoctors: string; appointments: string; stats: string;
  searchPlaceholder: string;
  nearestFirst: string; sortedNearest: string;
  doctorsAvailable: string; bookBtn: string;
  yourAppts: string; patientReviews: string;
  selectSlot: string; consultType: string;
  cancel: string; confirmBooking: string; apptBooked: string;
  insurance: string; billing: string; govt: string; terms: string;
  billChecker: string; billCheckerSub: string;
  plansAvail: string; viewPlan: string; noPlan: string;
  insurancePlans: string; selectPlan: string; selected: string;
  seeFeatures: string; showLess: string;
  buyNow: string; visitWebsite: string;
  govtSchemes: string; centralStateSchemes: string;
  nearbyHospitals: string; glossary: string;
  askAI: string; aiDesc: string; typicalCosts: string; saveOnHealth: string;
  arModule: string; arTitle: string; arSub: string;
  arView: string; overview: string; facts: string;
  conditions: string; prevention: string; learnMore: string;
  dashModule: string; dashTitle: string; dashSub: string;
  weeklySummary: string; healthInsight: string; allVitals: string;
  account: string; profileTitle: string; profileSub: string;
  editProfile: string; saveProfile: string;
  healthDetails: string; preferences: string; recentActivity: string;
  profileSaved: string; darkMode: string; language: string;
  settings: string; home: string; ar: string; vitals: string;
};

export const T: Record<Lang, Translations> = {
  en: {
    welcomeBack:"WELCOME BACK", goodMorning:"Good morning, Sophie 👋",
    tagline:"Your health platform is ready. Everything you need — in one place.",
    yourModules:"YOUR MODULES", upcoming:"UPCOMING",
    consult:"Consult a Doctor", finance:"Health Finance",
    arLearn:"AR Learning", dashboard:"Health Dashboard",
    profile:"Profile", reminders:"Reminders",
    consultDesc:"Find specialists, book consultations",
    financeDesc:"Insurance, billing, govt schemes",
    arDesc:"Explore 3D anatomical models",
    dashDesc:"Monitor vitals and trends",
    profileDesc:"Your details and activity",
    remindersDesc:"Medication alerts & tips",
    findDoctors:"🔍 Find Doctors", appointments:"📅 Appointments", stats:"📊 Stats",
    searchPlaceholder:"Search doctor or specialty...",
    nearestFirst:"📍 Sort Nearest", sortedNearest:"📍 Sorted Nearest",
    doctorsAvailable:"DOCTORS AVAILABLE", bookBtn:"Book →",
    yourAppts:"YOUR APPOINTMENTS", patientReviews:"PATIENT REVIEWS",
    selectSlot:"SELECT TIME SLOT", consultType:"CONSULTATION TYPE",
    cancel:"Cancel", confirmBooking:"Confirm Booking",
    apptBooked:"✓ Appointment booked successfully!",
    insurance:"🛡️ Insurance", billing:"💰 Billing",
    govt:"🏥 Govt", terms:"📖 Terms",
    billChecker:"💰 Bill Amount Checker",
    billCheckerSub:"Enter your expected bill — we'll show which plans cover it",
    plansAvail:"plan(s) cover", viewPlan:"View Plan →",
    noPlan:"No standard plan covers this amount. Consider PM-JAY.",
    insurancePlans:"AVAILABLE INSURANCE PLANS",
    selectPlan:"Select Plan", selected:"✓ Selected",
    seeFeatures:"See features ▼", showLess:"Show less ▲",
    buyNow:"Buy Now →", visitWebsite:"Visit Official Website →",
    govtSchemes:"🇮🇳 Government Health Schemes",
    centralStateSchemes:"CENTRAL & STATE SCHEMES",
    nearbyHospitals:"NEARBY GOVERNMENT HOSPITALS",
    glossary:"HEALTH FINANCE GLOSSARY",
    askAI:"Still confused? Ask our AI",
    aiDesc:"Finance assistant · Insurance · Claim help",
    typicalCosts:"TYPICAL MEDICAL COSTS IN INDIA",
    saveOnHealth:"💡 Save on Healthcare Costs",
    arModule:"MODULE 01", arTitle:"AR Anatomical Learning",
    arSub:"Select a body system — tap the body diagram to explore",
    arView:"AR VIEW", overview:"overview", facts:"facts",
    conditions:"conditions", prevention:"prevention",
    learnMore:"Learn More Online →",
    dashModule:"MODULE 02", dashTitle:"Health Dashboard",
    dashSub:"Sample vital parameters for health awareness",
    weeklySummary:"Weekly Summary", healthInsight:"💡 Health Insight",
    allVitals:"All Vitals at a Glance",
    account:"ACCOUNT", profileTitle:"Your Profile",
    profileSub:"Manage your personal details and activity",
    editProfile:"✏️ Edit Profile", saveProfile:"💾 Save Profile",
    healthDetails:"Health Details", preferences:"Preferences",
    recentActivity:"Recent Activity",
    profileSaved:"✓ Profile saved successfully!",
    darkMode:"Dark Mode", language:"Language",
    settings:"SETTINGS",
    home:"Home", ar:"AR", vitals:"Vitals",
  },
  hi: {
    welcomeBack:"वापस स्वागत है", goodMorning:"सुप्रभात, Sophie 👋",
    tagline:"आपका स्वास्थ्य मंच तैयार है। सब कुछ एक जगह।",
    yourModules:"आपके मॉड्यूल", upcoming:"आगामी",
    consult:"डॉक्टर से परामर्श", finance:"स्वास्थ्य वित्त",
    arLearn:"AR शिक्षा", dashboard:"स्वास्थ्य डैशबोर्ड",
    profile:"प्रोफ़ाइल", reminders:"अनुस्मारक",
    consultDesc:"विशेषज्ञ खोजें, परामर्श बुक करें",
    financeDesc:"बीमा, बिलिंग, सरकारी योजनाएं",
    arDesc:"3D शारीरिक मॉडल",
    dashDesc:"महत्वपूर्ण संकेतों की निगरानी",
    profileDesc:"आपका विवरण और गतिविधि",
    remindersDesc:"दवा अलर्ट और सुझाव",
    findDoctors:"🔍 डॉक्टर खोजें", appointments:"📅 अपॉइंटमेंट", stats:"📊 आंकड़े",
    searchPlaceholder:"डॉक्टर या विशेषता खोजें...",
    nearestFirst:"📍 निकटतम क्रमबद्ध करें", sortedNearest:"📍 निकटतम क्रमबद्ध",
    doctorsAvailable:"डॉक्टर उपलब्ध", bookBtn:"बुक करें →",
    yourAppts:"आपकी अपॉइंटमेंट", patientReviews:"मरीज़ समीक्षाएं",
    selectSlot:"समय स्लॉट चुनें", consultType:"परामर्श प्रकार",
    cancel:"रद्द करें", confirmBooking:"बुकिंग की पुष्टि करें",
    apptBooked:"✓ अपॉइंटमेंट सफलतापूर्वक बुक हो गई!",
    insurance:"🛡️ बीमा", billing:"💰 बिलिंग",
    govt:"🏥 सरकारी", terms:"📖 शर्तें",
    billChecker:"💰 बिल राशि जांचकर्ता",
    billCheckerSub:"अपना अपेक्षित बिल दर्ज करें — हम बताएंगे कौन सी योजनाएं कवर करती हैं",
    plansAvail:"योजनाएं कवर करती हैं", viewPlan:"योजना देखें →",
    noPlan:"कोई मानक योजना इस राशि को कवर नहीं करती। PM-JAY पर विचार करें।",
    insurancePlans:"उपलब्ध बीमा योजनाएं",
    selectPlan:"योजना चुनें", selected:"✓ चुना गया",
    seeFeatures:"विशेषताएं देखें ▼", showLess:"कम दिखाएं ▲",
    buyNow:"अभी खरीदें →", visitWebsite:"आधिकारिक वेबसाइट पर जाएं →",
    govtSchemes:"🇮🇳 सरकारी स्वास्थ्य योजनाएं",
    centralStateSchemes:"केंद्रीय और राज्य योजनाएं",
    nearbyHospitals:"निकटवर्ती सरकारी अस्पताल",
    glossary:"स्वास्थ्य वित्त शब्दावली",
    askAI:"अभी भी भ्रमित? हमारे AI से पूछें",
    aiDesc:"वित्त सहायक · बीमा · दावा सहायता",
    typicalCosts:"भारत में सामान्य चिकित्सा लागत",
    saveOnHealth:"💡 स्वास्थ्य लागत बचाएं",
    arModule:"मॉड्यूल 01", arTitle:"AR शारीरिक शिक्षा",
    arSub:"शरीर प्रणाली चुनें — अन्वेषण के लिए टैप करें",
    arView:"AR दृश्य", overview:"अवलोकन", facts:"तथ्य",
    conditions:"स्थितियां", prevention:"रोकथाम",
    learnMore:"ऑनलाइन और जानें →",
    dashModule:"मॉड्यूल 02", dashTitle:"स्वास्थ्य डैशबोर्ड",
    dashSub:"स्वास्थ्य जागरूकता के लिए नमूना महत्वपूर्ण संकेत",
    weeklySummary:"साप्ताहिक सारांश", healthInsight:"💡 स्वास्थ्य अंतर्दृष्टि",
    allVitals:"एक नज़र में सभी महत्वपूर्ण संकेत",
    account:"खाता", profileTitle:"आपकी प्रोफ़ाइल",
    profileSub:"अपना व्यक्तिगत विवरण प्रबंधित करें",
    editProfile:"✏️ प्रोफ़ाइल संपादित करें", saveProfile:"💾 प्रोफ़ाइल सहेजें",
    healthDetails:"स्वास्थ्य विवरण", preferences:"प्राथमिकताएं",
    recentActivity:"हाल की गतिविधि",
    profileSaved:"✓ प्रोफ़ाइल सफलतापूर्वक सहेजी गई!",
    darkMode:"डार्क मोड", language:"भाषा",
    settings:"सेटिंग्स",
    home:"होम", ar:"AR", vitals:"जीवन संकेत",
  },
  mr: {
    welcomeBack:"परत स्वागत", goodMorning:"सुप्रभात, Sophie 👋",
    tagline:"तुमचे आरोग्य व्यासपीठ तयार आहे. सर्वकाही एकाच ठिकाणी.",
    yourModules:"तुमचे मॉड्यूल", upcoming:"आगामी",
    consult:"डॉक्टरांशी सल्लामसलत", finance:"आरोग्य वित्त",
    arLearn:"AR शिक्षण", dashboard:"आरोग्य डॅशबोर्ड",
    profile:"प्रोफाइल", reminders:"स्मरणपत्र",
    consultDesc:"तज्ञ शोधा, सल्लामसलत बुक करा",
    financeDesc:"विमा, बिलिंग, सरकारी योजना",
    arDesc:"3D शरीर मॉडेल",
    dashDesc:"महत्त्वाच्या संकेतांचे निरीक्षण",
    profileDesc:"तुमचे तपशील आणि क्रियाकलाप",
    remindersDesc:"औषध सूचना आणि टिप्स",
    findDoctors:"🔍 डॉक्टर शोधा", appointments:"📅 अपॉइंटमेंट", stats:"📊 आकडेवारी",
    searchPlaceholder:"डॉक्टर किंवा विशेषता शोधा...",
    nearestFirst:"📍 जवळचे क्रमवारी", sortedNearest:"📍 जवळचे क्रमवारी",
    doctorsAvailable:"डॉक्टर उपलब्ध", bookBtn:"बुक करा →",
    yourAppts:"तुमच्या अपॉइंटमेंट", patientReviews:"रुग्ण पुनरावलोकने",
    selectSlot:"वेळ स्लॉट निवडा", consultType:"सल्लामसलत प्रकार",
    cancel:"रद्द करा", confirmBooking:"बुकिंग निश्चित करा",
    apptBooked:"✓ अपॉइंटमेंट यशस्वीरित्या बुक झाली!",
    insurance:"🛡️ विमा", billing:"💰 बिलिंग",
    govt:"🏥 सरकारी", terms:"📖 अटी",
    billChecker:"💰 बिल रक्कम तपासणी",
    billCheckerSub:"तुमचे अपेक्षित बिल टाका — आम्ही सांगतो कोणत्या योजना कव्हर करतात",
    plansAvail:"योजना कव्हर करतात", viewPlan:"योजना पहा →",
    noPlan:"कोणतीही मानक योजना ही रक्कम कव्हर करत नाही. PM-JAY विचारात घ्या.",
    insurancePlans:"उपलब्ध विमा योजना",
    selectPlan:"योजना निवडा", selected:"✓ निवडले",
    seeFeatures:"वैशिष्ट्ये पहा ▼", showLess:"कमी दाखवा ▲",
    buyNow:"आता खरेदी करा →", visitWebsite:"अधिकृत वेबसाइटला भेट द्या →",
    govtSchemes:"🇮🇳 सरकारी आरोग्य योजना",
    centralStateSchemes:"केंद्रीय आणि राज्य योजना",
    nearbyHospitals:"जवळचे सरकारी रुग्णालये",
    glossary:"आरोग्य वित्त शब्दकोश",
    askAI:"अजूनही गोंधळलेले? आमच्या AI ला विचारा",
    aiDesc:"वित्त सहाय्यक · विमा · दावा मदत",
    typicalCosts:"भारतातील सामान्य वैद्यकीय खर्च",
    saveOnHealth:"💡 आरोग्य खर्च वाचवा",
    arModule:"मॉड्यूल 01", arTitle:"AR शारीरिक शिक्षण",
    arSub:"शरीर प्रणाली निवडा — अन्वेषणासाठी टॅप करा",
    arView:"AR दृश्य", overview:"आढावा", facts:"तथ्ये",
    conditions:"परिस्थिती", prevention:"प्रतिबंध",
    learnMore:"ऑनलाइन अधिक जाणून घ्या →",
    dashModule:"मॉड्यूल 02", dashTitle:"आरोग्य डॅशबोर्ड",
    dashSub:"आरोग्य जागरूकतेसाठी नमुना महत्त्वपूर्ण संकेत",
    weeklySummary:"साप्ताहिक सारांश", healthInsight:"💡 आरोग्य अंतर्दृष्टी",
    allVitals:"एका दृष्टीक्षेपात सर्व महत्त्वपूर्ण संकेत",
    account:"खाते", profileTitle:"तुमची प्रोफाइल",
    profileSub:"तुमचे वैयक्तिक तपशील व्यवस्थापित करा",
    editProfile:"✏️ प्रोफाइल संपादित करा", saveProfile:"💾 प्रोफाइल जतन करा",
    healthDetails:"आरोग्य तपशील", preferences:"प्राधान्ये",
    recentActivity:"अलीकडील क्रियाकलाप",
    profileSaved:"✓ प्रोफाइल यशस्वीरित्या जतन केली!",
    darkMode:"डार्क मोड", language:"भाषा",
    settings:"सेटिंग्ज",
    home:"होम", ar:"AR", vitals:"जीवन संकेत",
  },
};
