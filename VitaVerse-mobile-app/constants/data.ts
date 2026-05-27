// ─── DOCTORS ─────────────────────────────────────────────────────
export type Doctor = {
  id: number; name: string; spec: string; exp: string;
  rating: number; fee: number; avail: string; dist: number;
  reviews: number; slots: string[]; tag: string;
  color: string; init: string;
};

export const DOCTORS: Doctor[] = [
  {id:1,name:"Dr. Riya Sharma", spec:"General Physician",exp:"8 yrs", rating:4.9,fee:300,avail:"Now",      dist:1.2,reviews:142,slots:["10:00 AM","11:00 AM","2:00 PM"], tag:"General",    color:"#00A896",init:"RS"},
  {id:2,name:"Dr. Arjun Kumar", spec:"Cardiologist",     exp:"14 yrs",rating:4.8,fee:600,avail:"Now",      dist:2.5,reviews:98, slots:["9:30 AM","12:00 PM","4:00 PM"],  tag:"Cardiology", color:"#028090",init:"AK"},
  {id:3,name:"Dr. Priya Mehta", spec:"Gynaecologist",    exp:"11 yrs",rating:4.9,fee:500,avail:"In 45 min",dist:3.1,reviews:210,slots:["11:30 AM","3:00 PM"],             tag:"Gynaecology",color:"#05668D",init:"PM"},
  {id:4,name:"Dr. Suresh Nair", spec:"Neurologist",      exp:"9 yrs", rating:4.7,fee:450,avail:"Tomorrow", dist:4.8,reviews:67, slots:["10:30 AM","2:30 PM"],             tag:"Neurology",  color:"#02C39A",init:"SN"},
  {id:5,name:"Dr. Ananya Bose", spec:"Dermatologist",    exp:"6 yrs", rating:4.6,fee:350,avail:"Now",      dist:1.8,reviews:55, slots:["9:00 AM","1:00 PM","5:00 PM"],   tag:"Dermatology",color:"#00A896",init:"AB"},
];

export const SPECS = ["All","General","Cardiology","Gynaecology","Neurology","Dermatology"];

// ─── INSURANCE PLANS ──────────────────────────────────────────────
export type Plan = {
  id: string; name: string; provider: string;
  premium: string; cover: string; amt: number;
  url: string; desc: string; feats: string[];
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {id:"p1",name:"Basic Cover",   provider:"Star Health",        premium:"₹3,500/yr",cover:"₹2L", amt:200000, url:"https://www.starhealth.in", desc:"Hospitalisation up to ₹2L. No OPD, no critical illness.", feats:["In-patient hospitalisation","Day-care procedures","Ambulance charges"]},
  {id:"p2",name:"Standard Plan", provider:"HDFC ERGO",          premium:"₹7,200/yr",cover:"₹5L", amt:500000, url:"https://www.hdfcergo.com",  desc:"Hospitalisation ₹5L + OPD + diagnostics + day-care.",   feats:["All Basic benefits","OPD consultations","Diagnostics & pathology","Pre & post hospitalisation"],popular:true},
  {id:"p3",name:"Comprehensive", provider:"ICICI Lombard",      premium:"₹14,000/yr",cover:"₹10L",amt:1000000,url:"https://www.icicilombard.com",desc:"₹10L cover · Critical illness · Maternity · International.",feats:["All Standard benefits","Critical illness cover","Maternity benefit","International cover","No-claim bonus"]},
  {id:"p4",name:"Senior Citizen",provider:"New India Assurance",premium:"₹22,000/yr",cover:"₹7L", amt:700000, url:"https://www.niacl.org.in", desc:"₹7L · Pre-existing conditions · AYUSH · Domiciliary care.", feats:["Pre-existing disease cover","AYUSH treatment","Domiciliary hospitalisation","Annual health check-up"]},
];

// ─── BILLING DATA ─────────────────────────────────────────────────
export const BILL_RANGES = [
  {l:"General OPD",    min:200,  max:800,   ico:"🩺"},
  {l:"Diagnostics",    min:500,  max:8500,  ico:"🧪"},
  {l:"Minor Surgery",  min:15000,max:50000, ico:"🔪"},
  {l:"Hospitalisation",min:20000,max:85000, ico:"🏥"},
  {l:"Major Surgery",  min:60000,max:200000,ico:"⚕️"},
  {l:"ICU (per day)",  min:8000, max:25000, ico:"🫀"},
];

// ─── GOVT SCHEMES ─────────────────────────────────────────────────
export const GOVT_SCHEMES = [
  {name:"Ayushman Bharat (PM-JAY)", cov:"₹5L per family/year",  elig:"Bottom 40% income families",         color:"#02C39A", url:"https://pmjay.gov.in"},
  {name:"MJPJAY (Maharashtra)",     cov:"₹1.5L per year",        elig:"Maharashtra BPL residents",           color:"#00A896", url:"https://www.jeevandayee.gov.in"},
  {name:"CGHS",                     cov:"OPD + hospitalisation",  elig:"Central Govt employees & pensioners", color:"#028090", url:"https://cghs.gov.in"},
  {name:"ESIS",                     cov:"Medical + cash benefits",elig:"Employees earning ≤ ₹21,000/month",  color:"#05668D", url:"https://esic.gov.in"},
];

export const GOVT_HOSPITALS = [
  {name:"AIIMS Mumbai",            type:"Central Govt",beds:1200,phone:"022-26521000",scheme:"Ayushman Bharat"},
  {name:"KEM Hospital",            type:"State Govt",  beds:1800,phone:"022-24107000",scheme:"MJPJAY"},
  {name:"Lokmanya Tilak Hospital", type:"Municipal",   beds:1400,phone:"022-24076381",scheme:"PM-JAY"},
  {name:"BYL Nair Hospital",       type:"Municipal",   beds:1100,phone:"022-23027600",scheme:"PM-JAY"},
];

// ─── TERMS / GLOSSARY ─────────────────────────────────────────────
export const TERMS = [
  {term:"Premium",          def:"The amount you pay regularly (monthly/yearly) to keep your insurance active."},
  {term:"Sum Insured",      def:"The maximum amount your insurer will pay for all claims combined in a policy year."},
  {term:"Deductible",       def:"The fixed amount you pay out-of-pocket before insurance coverage kicks in."},
  {term:"Co-payment",       def:"A fixed percentage of the claim you must pay yourself (e.g. 20% co-pay on ₹50K = you pay ₹10K)."},
  {term:"Waiting Period",   def:"Time after buying policy during which certain claims aren't covered — usually 2–4 years for pre-existing diseases."},
  {term:"Cashless",         def:"You don't pay upfront at network hospitals — insurer settles bills directly with hospital."},
  {term:"Reimbursement",    def:"You pay the hospital first, then claim back from insurer with bills and documents."},
  {term:"Network Hospital", def:"Hospitals tied up with your insurer where cashless treatment is available."},
  {term:"TPA",              def:"Third Party Administrator — processes your claims on behalf of insurer, issues your health card."},
  {term:"No-Claim Bonus",   def:"Reward for not making a claim — sum insured increases or premium reduces at renewal."},
  {term:"PM-JAY",           def:"Pradhan Mantri Jan Arogya Yojana — govt scheme giving ₹5L/year to low-income families."},
  {term:"Sub-limit",        def:"A cap on specific treatments within the policy (e.g. room rent capped at ₹3,000/day)."},
];

export const FAQ = [
  {q:"What is Ayushman Bharat?",      a:"PM-JAY provides up to ₹5L per family per year for hospitalisation to ~50 crore beneficiaries at zero cost at empanelled hospitals."},
  {q:"Bill is ₹50,000 — which plan?", a:"Standard Plan (₹5L cover) or above fully covers ₹50K. Basic plans (₹2L) also cover it. PM-JAY members get it free at empanelled hospitals."},
  {q:"How does cashless claim work?",  a:"Go to network hospital → show insurance card → hospital sends pre-auth to insurer → insurer approves → insurer pays hospital directly."},
  {q:"Is maternity covered?",          a:"Usually only in Comprehensive plans after 2–4 year waiting period. Some employer group policies include from day one."},
  {q:"What is TPA?",                   a:"A TPA processes your claims on behalf of insurer, issues your health card, manages pre-authorisations and bill settlements with hospitals."},
];

// ─── ORGANS (AR LEARNING) ─────────────────────────────────────────
export type Organ = {
  emoji: string; label: string; color: string;
  title: string; desc: string;
  conditions: string[]; facts: string[];
  prevention: string;
  websites: {name: string; url: string}[];
  bodyX: number; bodyY: number;
};

export const ORGANS: Record<string, Organ> = {
  heart:{
    emoji:"🫀", label:"Heart", color:"#e05c5c",
    title:"Heart & Cardiovascular System",
    desc:"The heart is a muscular pump beating ~100,000 times per day, circulating 5L of blood per minute. It delivers oxygen and nutrients to every cell in the body.",
    conditions:["Hypertension","Coronary Artery Disease","Arrhythmia","Heart Failure","Myocardial Infarction"],
    facts:["Weighs 250–350g in adults","Has 4 chambers: 2 atria, 2 ventricles","Beats ~3 billion times in a lifetime","Generates enough pressure to squirt blood 9 metres"],
    prevention:"Regular cardio exercise, low sodium diet, no smoking, manage stress, annual BP checks.",
    websites:[
      {name:"American Heart Association",url:"https://www.heart.org"},
      {name:"BHF - British Heart Foundation",url:"https://www.bhf.org.uk"},
      {name:"WHO - Cardiovascular Diseases",url:"https://www.who.int/health-topics/cardiovascular-diseases"},
    ],
    bodyX:110, bodyY:108,
  },
  lungs:{
    emoji:"🫁", label:"Lungs", color:"#6b8cf5",
    title:"Respiratory System",
    desc:"The lungs facilitate gas exchange — pulling oxygen into the bloodstream and expelling carbon dioxide. Adults breathe 17,000–23,000 times per day.",
    conditions:["Asthma","COPD","Pneumonia","Pulmonary Embolism","Lung Cancer","Tuberculosis"],
    facts:["Combined surface area of ~70 sq metres","Left lung has 2 lobes; right has 3","Lungs float on water","You exhale ~200ml of water daily"],
    prevention:"No smoking, avoid air pollution, regular aerobic exercise, flu vaccinations.",
    websites:[
      {name:"American Lung Association",url:"https://www.lung.org"},
      {name:"British Lung Foundation",url:"https://www.blf.org.uk"},
    ],
    bodyX:95, bodyY:105,
  },
  brain:{
    emoji:"🧠", label:"Brain", color:"#f59b42",
    title:"Nervous System — Brain",
    desc:"The brain contains ~86 billion neurons and uses 20% of the body's energy. It coordinates all bodily functions, thought, memory, and emotion.",
    conditions:["Stroke","Migraine","Epilepsy","Alzheimer's Disease","Parkinson's Disease","Depression"],
    facts:["Weighs ~1.4 kg","Generates 23 watts of power","60% of the brain is fat","Neurons fire at up to 200 impulses/second"],
    prevention:"Mental stimulation, quality sleep, Mediterranean diet, manage blood pressure, avoid head trauma.",
    websites:[
      {name:"WHO - Mental Health",url:"https://www.who.int/health-topics/mental-health"},
      {name:"Alzheimer's Association",url:"https://www.alz.org"},
    ],
    bodyX:110, bodyY:30,
  },
  kidney:{
    emoji:"🫘", label:"Kidneys", color:"#a855f7",
    title:"Renal System — Kidneys",
    desc:"The kidneys filter ~200 litres of blood daily, removing waste as urine, regulating blood pressure, and maintaining electrolyte balance.",
    conditions:["Chronic Kidney Disease","Kidney Stones","Urinary Tract Infection","Renal Failure","Polycystic Kidney Disease"],
    facts:["Each kidney has ~1 million nephrons","Filter entire blood supply every 30 minutes","Regulate blood pH","Produce EPO for red blood cell production"],
    prevention:"Stay hydrated, low sodium diet, control blood sugar and BP, avoid overuse of NSAIDs.",
    websites:[
      {name:"National Kidney Foundation",url:"https://www.kidney.org"},
      {name:"Kidney Care UK",url:"https://www.kidneycareuk.org"},
    ],
    bodyX:95, bodyY:165,
  },
  liver:{
    emoji:"🟫", label:"Liver", color:"#d97706",
    title:"Hepatic System — Liver",
    desc:"The liver performs over 500 functions: detoxification, protein synthesis, bile production, and glucose regulation.",
    conditions:["Fatty Liver Disease","Hepatitis B & C","Cirrhosis","Liver Cancer","Jaundice"],
    facts:["Largest internal organ — ~1.5 kg","Only organ that can regenerate","Produces ~1L of bile daily","Stores vitamins A, D, E, K, B12"],
    prevention:"Limit alcohol, healthy weight, hepatitis vaccination, avoid raw shellfish, safe sex.",
    websites:[
      {name:"American Liver Foundation",url:"https://liverfoundation.org"},
      {name:"British Liver Trust",url:"https://britishlivertrust.org.uk"},
    ],
    bodyX:120, bodyY:150,
  },
};
