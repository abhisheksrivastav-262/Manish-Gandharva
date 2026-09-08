import {
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Sunrise,
  House,
  CarFront,
  Wallet,
  Presentation,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

export interface ServiceConsideration {
  title: string;
  body: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  category: "Insurance" | "Planning" | "Loans" | "Wealth & Events";
  icon: LucideIcon;
  to: string;
  tagline: string;
  description: string;
  whyImportant: string;
  keyBenefits: string[];
  howItHelps: string[];
  considerations: ServiceConsideration[];
  whatsappMessage: string;
  whatsappUrl: string;
}

const PHONE = "9829289538";

function wa(message: string) {
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "health-insurance",
    name: "Health Insurance",
    category: "Insurance",
    icon: HeartPulse,
    to: "/services/health-insurance",
    tagline: "Protect yourself and your family from unexpected medical expenses.",
    description:
      "Health Insurance is a financial protection plan that helps you manage hospitalisation and medical treatment costs, so a health emergency does not turn into a financial emergency for your family.",
    whyImportant:
      "Medical costs in India are rising every year. A single hospitalisation — planned surgery, accident, or critical illness — can cost lakhs of rupees and wipe out years of savings. Health insurance helps you stay financially prepared, access quality treatment without delay, and protect your long-term goals like child education and retirement from being disturbed by one medical event.",
    keyBenefits: [
      "Cashless hospitalisation support at network hospitals for planned and emergency treatment",
      "Protection of savings — medical bills do not force you to break investments or take debt",
      "Coverage for family members under individual or family floater options",
      "Support for pre- and post-hospitalisation expenses around the treatment",
      "Access to better hospitals and timely treatment without cost fear",
      "Tax benefits on premiums paid under applicable sections of Income Tax rules",
      "Annual health check-up and wellness support in many plans",
    ],
    howItHelps: [
      "When a medical emergency arrives, the first question should be 'which is the best treatment?' — not 'can we afford it?'. Health insurance removes that financial fear, so your family can focus fully on recovery while the plan helps handle large hospital bills.",
      "It protects your financial plan. Without coverage, families often withdraw from SIPs, break fixed deposits, or take personal loans for treatment. A suitable health cover keeps your child education, home, and retirement goals on track even during health setbacks.",
      "Over time, it builds medical discipline — regular check-ups, early diagnosis, and planned treatment — because you are no longer postponing care due to cost worries.",
    ],
    considerations: [
      { title: "Right sum insured", body: "Consider family size, age, city, and rising medical inflation. What felt sufficient 5 years ago may be inadequate today." },
      { title: "Waiting periods", body: "Pre-existing diseases and specific treatments often have waiting periods. Buying early helps you complete them sooner." },
      { title: "Network hospitals", body: "Check cashless network hospitals near your home in Udaipur and other cities you frequently visit." },
      { title: "Exclusions & sub-limits", body: "Read room-rent limits, co-pay clauses, and permanent exclusions carefully before choosing." },
      { title: "Claim process", body: "Understand cashless vs reimbursement process, documents needed, and whom to call during an emergency." },
      { title: "Renewability", body: "Prefer plans with lifelong renewability and a clean claim settlement record." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Health Insurance ke bare mein batayiye. Main iske benefits aur apne liye suitable options ke bare mein samajhna chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Health Insurance ke bare mein batayiye. Main iske benefits aur apne liye suitable options ke bare mein samajhna chahta/chahti hoon."
    ),
  },
  {
    id: "term-plan",
    name: "Term Plan",
    category: "Insurance",
    icon: ShieldCheck,
    to: "/services/term-plan",
    tagline: "Pure, affordable life cover to protect your family's future.",
    description:
      "A Term Plan is a pure life insurance plan that provides a large financial safety net to your family at a comparatively low premium. If something happens to you during the policy term, your family receives the assured amount to continue life without financial disruption.",
    whyImportant:
      "If your family depends on your income — for home loan EMIs, children's education, parents' care, or daily expenses — a term plan ensures those responsibilities do not collapse in your absence. It is the simplest, most cost-effective way to create a 50 lakh to multi-crore safety net for the people you love.",
    keyBenefits: [
      "High life cover at affordable premiums — maximum protection per rupee",
      "Income replacement for family to manage household and lifestyle expenses",
      "Protection for ongoing liabilities like home loans and education costs",
      "Option to enhance cover with critical illness and accidental riders",
      "Flexible policy term aligned to retirement or children's independence age",
      "Tax benefits on premiums and payouts as per prevailing tax rules",
      "Peace of mind that dependents will not face sudden financial hardship",
    ],
    howItHelps: [
      "A term plan acts as your family's financial backup. It ensures school fees continue, EMIs are paid, and your spouse does not have to make distress decisions about selling assets or stopping children's education.",
      "It brings discipline to long-term responsibility planning. By locking a suitable cover for 20–30 years, you convert an uncertain future risk into a planned, budgeted protection cost today.",
      "For young earners, starting early means lower premiums for the same large cover — a smart, forward-looking step in overall financial planning.",
    ],
    considerations: [
      { title: "Adequate sum assured", body: "Consider income, loans, dependents, future goals. Many families need 10–15x annual income or more." },
      { title: "Policy term length", body: "Cover your most financially critical years — typically till retirement or till children are settled." },
      { title: "Premium affordability", body: "Choose a premium you can sustain for the full term without breaks." },
      { title: "Nominee details", body: "Nominate correctly and update after major life events like marriage or childbirth." },
      { title: "Riders selection", body: "Critical illness or accidental benefit riders can add value, but understand extra cost and terms." },
      { title: "Honest disclosure", body: "Disclose health, smoking, and occupation details accurately — it protects future claims." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Term Plan ke bare mein batayiye. Main iske benefits aur family financial protection ke bare mein guidance lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Term Plan ke bare mein batayiye. Main iske benefits aur family financial protection ke bare mein guidance lena chahta/chahti hoon."
    ),
  },
  {
    id: "child-education-planning",
    name: "Child Education Planning",
    category: "Planning",
    icon: GraduationCap,
    to: "/services/child-education-planning",
    tagline: "Plan ahead so money never stops your child's dreams.",
    description:
      "Child Education Planning is a goal-based financial strategy that prepares you for schooling, graduation, professional courses, or even overseas education — with disciplined saving and investing started early.",
    whyImportant:
      "Education inflation in India is among the highest — professional courses that cost a few lakhs today may cost multiples in 10–15 years. Without early planning, parents often compromise on college choice or take heavy education loans. Starting early gives compounding more time and keeps your child's ambitions achievable.",
    keyBenefits: [
      "Clear education goal estimation — schooling to professional/Overseas stages",
      "Early-start advantage with long-term disciplined investing",
      "Separation of education corpus from other family goals",
      "Flexibility to plan for graduation, PG, coaching, or study abroad",
      "Reduced dependence on high-interest education loans later",
      "Protection layer so education continues even during income disruption",
      "Regular review to keep the plan aligned with rising costs",
    ],
    howItHelps: [
      "It converts a large, scary future expense into small, manageable monthly steps today. You know how much to save, where to channel it, and by when the corpus should be ready.",
      "It protects choice. When your child earns admission to a dream college, you can say 'yes' confidently instead of checking affordability at the last moment.",
      "It balances education with your other goals — retirement, home, emergency fund — so one goal does not silently damage the others.",
    ],
    considerations: [
      { title: "Start early", body: "Even small monthly amounts started 10–12 years early can make a large difference due to compounding." },
      { title: "Estimate realistically", body: "Factor education inflation (often 8–10%) and different cost slabs for India vs abroad." },
      { title: "Risk alignment", body: "Match investment approach to time horizon — longer horizons can consider growth-oriented options with guidance." },
      { title: "Protection first", body: "Ensure the parent's life and health cover is adequate so the education plan survives uncertainties." },
      { title: "Review periodically", body: "Revisit the goal amount every 1–2 years as fees and ambitions evolve." },
      { title: "Avoid mixing goals", body: "Keep education funds separate from retirement or emergency money to avoid last-minute conflicts." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Child Education Planning ke bare mein batayiye. Main apne child ke future education planning ke bare mein guidance lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Child Education Planning ke bare mein batayiye. Main apne child ke future education planning ke bare mein guidance lena chahta/chahti hoon."
    ),
  },
  {
    id: "retirement-planning",
    name: "Retirement Planning",
    category: "Planning",
    icon: Sunrise,
    to: "/services/retirement-planning",
    tagline: "Build financial independence for a relaxed retirement.",
    description:
      "Retirement Planning is a structured long-term strategy to build a corpus and income stream that supports your lifestyle after you stop earning — covering monthly expenses, healthcare, and dreams like travel or hobbies.",
    whyImportant:
      "With rising life expectancy, your retirement may last 25–30 years. Inflation will multiply today's expenses several times. Without a dedicated plan, even good earners risk depending on children or compromising lifestyle after 60. Early, systematic retirement planning gives you choice and dignity in later years.",
    keyBenefits: [
      "Clear retirement corpus target based on lifestyle and inflation",
      "Monthly expense and healthcare cost planning for post-retirement life",
      "Long-term disciplined investing aligned to retirement horizon",
      "Balance between growth and stability as retirement approaches",
      "Pension and income-stream thinking — not just lump-sum saving",
      "Reduced financial dependence on children in old age",
      "Legacy and estate considerations alongside retirement needs",
    ],
    howItHelps: [
      "It answers the big question: 'How much is enough?' You get a realistic monthly saving number today instead of guessing, and every year of early action reduces the burden significantly.",
      "It protects your future purchasing power. A plan that factors inflation ensures Rs 50,000 of today's lifestyle does not become unaffordable 20 years later.",
      "It gives emotional freedom — the confidence that after decades of work, you can choose how to spend time, not worry about how to manage expenses.",
    ],
    considerations: [
      { title: "Start as early as possible", body: "Delay of even 5 years can sharply increase the monthly amount needed for the same corpus." },
      { title: "Factor inflation", body: "Healthcare and lifestyle inflation must be included — nominal savings alone mislead." },
      { title: "Healthcare buffer", body: "Keep a separate medical contingency; health costs rise fastest after 60." },
      { title: "Review asset mix", body: "Gradually shift from aggressive to stable as retirement nears, with professional guidance." },
      { title: "Do not dip into corpus", body: "Avoid using retirement funds for short-term goals; keep them ring-fenced." },
      { title: "Plan withdrawal strategy", body: "Think in advance about how you will draw monthly income sustainably post-retirement." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Retirement Planning ke bare mein batayiye. Main apne retirement goals aur financially independent future ke bare mein guidance lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Retirement Planning ke bare mein batayiye. Main apne retirement goals aur financially independent future ke bare mein guidance lena chahta/chahti hoon."
    ),
  },
  {
    id: "home-loan",
    name: "Home Loan",
    category: "Loans",
    icon: House,
    to: "/services/home-loan",
    tagline: "Responsible guidance for your dream home purchase.",
    description:
      "Home Loan guidance helps you plan, compare, and manage housing finance smartly — from eligibility and down payment to EMI comfort, tenure, interest types, and documentation — so your dream home strengthens, not strains, your finances.",
    whyImportant:
      "A home is usually the biggest financial decision of life, with commitments of 15–25 years. Wrong tenure, over-borrowing, or ignoring total interest cost can trap your monthly budget for decades. Right guidance ensures you buy within capacity and keep other goals like education and retirement intact.",
    keyBenefits: [
      "Eligibility and budget assessment before you shortlist property",
      "Down payment and EMI planning aligned to monthly cash flow",
      "Comparison of fixed vs floating rates and tenure impact",
      "Understanding of total interest cost — not just EMI amount",
      "Documentation, CIBIL, and approval process guidance",
      "Balance of home goal with emergency fund and other goals",
      "Prepayment and part-payment strategy to reduce interest burden",
    ],
    howItHelps: [
      "It prevents emotional over-buying. You enter property discussions with a clear, pre-decided budget and EMI comfort zone, so brokers and offers do not push you beyond capacity.",
      "It saves lakhs in interest over time. Small differences in rate, tenure, and prepayment discipline compound into very large savings across a 20-year loan.",
      "It keeps your overall plan healthy — home ownership progresses alongside SIPs, insurance, and emergency reserves instead of pausing them for years.",
    ],
    considerations: [
      { title: "EMI comfort rule", body: "Keep total EMIs within a sustainable share of take-home income; avoid stretching to the maximum eligibility." },
      { title: "Total cost, not just EMI", body: "Compare total interest across tenures — shorter tenure means higher EMI but much lower total cost." },
      { title: "Rate type", body: "Understand fixed vs floating, reset clauses, and processing fees before signing." },
      { title: "Credit score", body: "A healthy CIBIL and timely repayments improve approval chances and rate options." },
      { title: "Emergency buffer", body: "Maintain 6 months of EMIs as reserve even after down payment." },
      { title: "Legal & property checks", body: "Verify title, approvals, and RERA status independently of loan processing." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Home Loan ke bare mein batayiye. Main home loan eligibility, EMI planning aur suitable options ke bare mein guidance lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Home Loan ke bare mein batayiye. Main home loan eligibility, EMI planning aur suitable options ke bare mein guidance lena chahta/chahti hoon."
    ),
  },
  {
    id: "car-loan",
    name: "Car Loan",
    category: "Loans",
    icon: CarFront,
    to: "/services/car-loan",
    tagline: "Smart vehicle financing that fits your budget.",
    description:
      "Car Loan guidance helps you finance your vehicle sensibly — choosing the right loan amount, tenure, and EMI so your car brings comfort without disturbing monthly savings and long-term goals.",
    whyImportant:
      "A car is a depreciating asset with added fuel, insurance, and maintenance costs. An oversized car EMI quietly eats into SIPs and emergency savings for 5–7 years. Smart financing keeps the total cost of ownership comfortable and planned.",
    keyBenefits: [
      "Budget-first car selection aligned to income and savings",
      "Loan vs down payment optimisation to reduce interest",
      "Tenure comparison — shorter tenure, lower total interest",
      "Understanding of processing fees, foreclosure, and insurance bundling",
      "Eligibility and CIBIL guidance for smoother approval",
      "Total ownership cost view — EMI plus fuel, service, insurance",
      "Repayment plan that protects ongoing investments",
    ],
    howItHelps: [
      "It keeps aspiration and affordability balanced. You choose a car you can enjoy without guilt, knowing EMIs, fuel, and servicing are already accounted for.",
      "It avoids long-term drag. A well-structured 3–5 year plan closes faster and cheaper than a stretched tenure that looks easy monthly but costs far more overall.",
      "It preserves wealth habits — your SIPs and emergency fund continue alongside the car EMI instead of pausing for years.",
    ],
    considerations: [
      { title: "Down payment size", body: "Higher down payment reduces principal, interest, and EMI stress." },
      { title: "Tenure sweet spot", body: "Very long tenures lower EMI but increase total interest significantly." },
      { title: "Ownership costs", body: "Add insurance, servicing, and fuel to EMI before deciding affordability." },
      { title: "New vs pre-owned", body: "Evaluate depreciation and loan terms for both routes objectively." },
      { title: "Foreclosure terms", body: "Check prepayment charges and lock-in periods in advance." },
      { title: "Do not over-borrow", body: "Avoid topping up lifestyle features through larger loans." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Car Loan ke bare mein batayiye. Main car financing options, EMI planning aur suitable loan ke bare mein guidance lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Car Loan ke bare mein batayiye. Main car financing options, EMI planning aur suitable loan ke bare mein guidance lena chahta/chahti hoon."
    ),
  },
  {
    id: "education-loan",
    name: "Education Loan",
    category: "Loans",
    icon: GraduationCap,
    to: "/services/education-loan",
    tagline: "Fund higher education without burdening family finances.",
    description:
      "Education Loan guidance helps students and parents fund graduation, professional, or overseas education through suitable financing — with clarity on eligibility, collateral, moratorium, repayment, and total cost.",
    whyImportant:
      "Quality higher education — especially professional or international courses — can cost tens of lakhs. Without structured financing, families either compromise on college choice or liquidate retirement savings. A well-planned education loan protects both the career dream and family finances.",
    keyBenefits: [
      "Course and college-wise funding planning for India and abroad",
      "Eligibility, collateral, and co-applicant requirement clarity",
      "Moratorium and repayment schedule understanding from day one",
      "Comparison of interest rates, margins, and processing charges",
      "Documentation and approval process guidance",
      "Repayment planning aligned to expected career and income",
      "Reduced pressure on parents' retirement and emergency funds",
    ],
    howItHelps: [
      "It keeps career options open. Students can choose the right course and institution on merit rather than settling for what the family can pay upfront.",
      "It builds financial responsibility. With a clear repayment roadmap, the student understands the investment in their own future and plans early career moves accordingly.",
      "It protects the family balance sheet — parents do not need to break long-term investments or pause retirement planning for education costs.",
    ],
    considerations: [
      { title: "Borrow only what is needed", body: "Include tuition, living, travel, and buffer — but avoid inflating lifestyle expenses through the loan." },
      { title: "Understand moratorium", body: "Know when interest accrues, when repayment starts, and how it affects total cost." },
      { title: "Compare lenders", body: "Rates, margins, collateral needs, and repayment flexibility vary widely." },
      { title: "Co-applicant role", body: "Parents usually co-sign — understand their liability clearly." },
      { title: "Repayment capacity", body: "Project realistic starting salaries for the chosen field before fixing loan size." },
      { title: "Tax awareness", body: "Understand applicable deductions on education loan interest as per current tax rules." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Education Loan ke bare mein batayiye. Main higher education funding, eligibility aur repayment options ke bare mein guidance lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Education Loan ke bare mein batayiye. Main higher education funding, eligibility aur repayment options ke bare mein guidance lena chahta/chahti hoon."
    ),
  },
  {
    id: "personal-loan",
    name: "Personal Loan",
    category: "Loans",
    icon: Wallet,
    to: "/services/personal-loan",
    tagline: "Responsible borrowing for short-term personal needs.",
    description:
      "Personal Loan guidance helps you handle urgent or short-term needs — medical gaps, events, travel, or consolidation — with responsible borrowing, clear repayment planning, and full awareness of the true cost.",
    whyImportant:
      "Personal loans are quick and collateral-free, but carry higher interest rates. Without planning, they can spiral into multiple loans and EMI stress. Right guidance ensures you borrow only when justified, at the best available terms, with a fixed exit plan.",
    keyBenefits: [
      "Need assessment — borrow only for genuine, planned requirements",
      "Eligibility and credit-score improvement guidance",
      "Tenure and EMI planning to avoid over-extension",
      "Comparison of rates, fees, and prepayment terms across options",
      "Consolidation thinking to replace costlier scattered debt",
      "Fixed repayment roadmap with clear closure date",
      "Protection of long-term goals from short-term borrowing",
    ],
    howItHelps: [
      "It brings clarity in urgent moments. Instead of panic-borrowing from the first available option, you compare calmly and choose the lowest-cost, fastest-exit route.",
      "It prevents debt traps. A defined tenure and EMI cap ensure the loan closes on schedule rather than rolling into fresh borrowing.",
      "It keeps your credit health intact — timely, planned repayment strengthens your profile for future home or business needs.",
    ],
    considerations: [
      { title: "High interest awareness", body: "Personal loan rates are typically higher than home or car loans — factor total cost." },
      { title: "Avoid multiple loans", body: "Stacking loans multiplies EMI stress; consolidate or pause before adding new debt." },
      { title: "Check all charges", body: "Processing fees, GST, late penalties, and foreclosure terms add up." },
      { title: "Keep tenure short", body: "Shorter tenure means faster freedom, even if EMI is slightly higher." },
      { title: "Maintain credit discipline", body: "Pay EMIs on time; defaults damage CIBIL for years." },
      { title: "Have an exit plan", body: "Fix a prepayment or closure target from the start." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Personal Loan ke bare mein batayiye. Main personal financial requirements, eligibility aur repayment options ke bare mein guidance lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Personal Loan ke bare mein batayiye. Main personal financial requirements, eligibility aur repayment options ke bare mein guidance lena chahta/chahti hoon."
    ),
  },
  {
    id: "financial-literacy",
    name: "Financial Literacy Event",
    category: "Wealth & Events",
    icon: Presentation,
    to: "/services/financial-literacy",
    tagline: "Simple-language workshops that build money confidence.",
    description:
      "Financial Literacy Events are interactive workshops and awareness sessions — for schools, colleges, corporates, and community groups — that explain budgeting, saving, insurance, SIP, and goal planning in simple, practical language.",
    whyImportant:
      "Most money mistakes do not come from low income, but from low awareness — no budgeting, no insurance, random investing, and debt traps. One clear 60–90 minute session can change how dozens of families think about money for years. Financial knowledge truly is financial power.",
    keyBenefits: [
      "Budgeting and cash-flow basics anyone can start immediately",
      "Saving discipline and emergency fund understanding",
      "Insurance fundamentals — protection before investment",
      "SIP and investing concepts without jargon",
      "Goal-based planning mindset for education, home, retirement",
      "Debt awareness — responsible credit use and trap avoidance",
      "Customised content for students, employees, families, or businesses",
    ],
    howItHelps: [
      "It removes fear of finance. Attendees realise money management is a set of simple habits — track, save, protect, invest — not complex mathematics reserved for experts.",
      "It creates action. Every session ends with practical next steps participants can apply the same week, from starting a budget sheet to reviewing existing insurance.",
      "For organisations, it builds a financially calmer team — employees who understand money make better decisions at work and home alike.",
    ],
    considerations: [
      { title: "Audience fit", body: "Content is customised — students need budgeting basics, employees need tax and goal planning." },
      { title: "Session length", body: "Standard 60–90 minutes with Q&A; half-day deep dives available for corporates." },
      { title: "No selling", body: "Sessions are purely educational; no product pushing during events." },
      { title: "Advance booking", body: "Book 3–4 weeks ahead for proper customisation and scheduling." },
      { title: "Follow-up material", body: "Attendees receive reference guides to continue learning after the event." },
      { title: "Language comfort", body: "Sessions can be conducted in simple Hindi/English mix for maximum clarity." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe Financial Literacy Event ke bare mein batayiye. Main workshop/event organise karne ya attend karne ke bare mein jankari lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe Financial Literacy Event ke bare mein batayiye. Main workshop/event organise karne ya attend karne ke bare mein jankari lena chahta/chahti hoon."
    ),
  },
  {
    id: "sip-wealth-creation",
    name: "SIP Wealth Creation",
    category: "Wealth & Events",
    icon: TrendingUp,
    to: "/services/sip-wealth-creation",
    tagline: "Disciplined monthly investing for long-term goals.",
    description:
      "SIP Wealth Creation is a disciplined approach of investing a fixed amount regularly — typically monthly — toward long-term goals like child education, retirement, or wealth building, harnessing time and consistency.",
    whyImportant:
      "Wealth is rarely built by timing the market; it is built by time in the market with discipline. SIP converts irregular saving into an automatic habit, smooths market ups and downs over years, and lets compounding work quietly in the background toward large future goals.",
    keyBenefits: [
      "Automated investment discipline — pay yourself first every month",
      "Start small — begin with modest amounts and increase gradually",
      "Rupee-cost averaging across market ups and downs over time",
      "Goal-linked investing for education, retirement, home, or wealth",
      "Flexibility to pause, increase, or stop as life situations change",
      "Long-term compounding potential over 10–15+ year horizons",
      "Progress tracking and periodic review with professional guidance",
    ],
    howItHelps: [
      "It makes big goals feel achievable. A distant Rs 50 lakh or Rs 1 crore target becomes a clear monthly number you can start this month itself.",
      "It removes emotion from investing. Instead of reacting to market news, you follow a steady plan that buys across highs and lows automatically.",
      "It aligns money with life. Each SIP can be tagged to a specific dream — child's college, your retirement, a future home — so every instalment has meaning.",
    ],
    considerations: [
      { title: "Long horizon matters", body: "SIP works best over 7–15+ years; short-term expectations often disappoint." },
      { title: "Market-linked, not guaranteed", body: "Returns fluctuate; no one can promise fixed SIP returns. Plan accordingly." },
      { title: "Right fund selection", body: "Fund choice should match your risk appetite, goal, and horizon — not past hype." },
      { title: "Do not stop in falls", body: "Pausing SIPs during market dips defeats the averaging advantage." },
      { title: "Step-up when income grows", body: "Increasing SIP 5–10% yearly can dramatically boost the final corpus." },
      { title: "Review, don't churn", body: "Review annually with guidance; frequent switching harms compounding." },
    ],
    whatsappMessage:
      "Namaste Manish ji, mujhe SIP Wealth Creation ke bare mein batayiye. Main systematic investment planning aur long-term wealth goals ke bare mein guidance lena chahta/chahti hoon.",
    whatsappUrl: wa(
      "Namaste Manish ji, mujhe SIP Wealth Creation ke bare mein batayiye. Main systematic investment planning aur long-term wealth goals ke bare mein guidance lena chahta/chahti hoon."
    ),
  },
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.id === id);
}
