export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const TRUST_STATS = [
  { value: "10,000+", label: "Meetings Captured" },
  { value: "99.2%", label: "Transcription Accuracy" },
  { value: "50K+", label: "Action Items Generated" },
  { value: "4.9/5", label: "User Rating" },
] as const;

export interface Feature {
  title: string;
  description: string;
  icon: string;
  span: "default" | "wide" | "tall";
}

export const FEATURES: Feature[] = [
  {
    title: "Live Transcription",
    description:
      "Words appear the moment they're spoken. Multi-speaker identification means you always know who said what — no post-meeting guesswork.",
    icon: "waveform",
    span: "wide",
  },
  {
    title: "Real-Time AI Analyst",
    description:
      "While you focus on the conversation, Lilah surfaces rolling summaries, key facts, action items, and follow-up questions — live.",
    icon: "sparkle",
    span: "default",
  },
  {
    title: "In-Meeting Research",
    description:
      "Someone makes a claim? Ask Lilah. She'll search the web and your past meetings to give you an answer before the topic moves on.",
    icon: "search",
    span: "default",
  },
  {
    title: "Meeting Prep Agent",
    description:
      "Share an agenda and attendees. Lilah prepares briefing notes, relevant past context, and suggested talking points so you walk in sharp.",
    icon: "clipboard",
    span: "wide",
  },
  {
    title: "Speaker Profiles",
    description:
      "Live profiles for each participant — tracking contributions, sentiment shifts, and speaking patterns throughout the conversation.",
    icon: "users",
    span: "default",
  },
  {
    title: "Ghost Writer",
    description:
      "AI-powered note suggestions appear inline as you type, fully aware of the meeting context. Your notes, supercharged.",
    icon: "pencil",
    span: "default",
  },
  {
    title: "Structured Minutes",
    description:
      "End your meeting and Lilah auto-generates polished minutes — attendees, decisions, action items, next steps. Export to PDF, Markdown, or DOCX.",
    icon: "document",
    span: "default",
  },
  {
    title: "Knowledge Gardener",
    description:
      "Every meeting feeds your searchable knowledge base. Lilah connects themes across conversations so nothing falls through the cracks.",
    icon: "brain",
    span: "default",
  },
];

export interface PricingPlan {
  name: string;
  priceUSD: number;
  yearlyPriceUSD: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    priceUSD: 0,
    yearlyPriceUSD: 0,
    period: "forever",
    description: "Get started with the essentials",
    features: [
      "3 meetings per month",
      "15 minute meeting limit",
      "Real-time transcription",
      "Multi-speaker identification",
      "Basic meeting summaries",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    priceUSD: 14.99,
    yearlyPriceUSD: 149,
    period: "/month",
    description: "Everything you need to own every meeting",
    features: [
      "Unlimited meetings & duration",
      "Real-time AI insights & research",
      "Speaker profile analysis",
      "Meeting prep agent",
      "Ghost writer & smart notes",
      "Export to PDF, Markdown, DOCX",
      "Knowledge base & search",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does Lilah hear my meetings?",
    answer:
      "Lilah captures audio directly from your system — no browser extensions, no bots joining your call. On desktop, our app uses system audio loopback to listen to Zoom, Teams, Google Meet, or any other platform. Your meeting participants never know Lilah is there.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All data is encrypted at rest and in transit. Each user gets their own private database — your transcripts and insights are never shared or used to train AI models. We take privacy as seriously as you do.",
  },
  {
    question: "Does it work with Zoom, Teams, and Google Meet?",
    answer:
      "Yes — Lilah works with any meeting platform. Since we capture system audio directly, there's no integration or plugin required. If you can hear it, Lilah can transcribe it.",
  },
  {
    question: "What happens when I hit my free meeting limit?",
    answer:
      "You'll still have access to all your past transcripts and notes. You just won't be able to start new live sessions until your limit resets the following month — or you can upgrade to Pro for unlimited meetings.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, no contracts and no questions asked. Cancel from your account settings and you'll retain access through the end of your billing period. Your data stays yours.",
  },
  {
    question: "How accurate is the transcription?",
    answer:
      "Lilah uses Deepgram's industry-leading speech recognition, delivering 99%+ accuracy across accents and speaking styles. Multi-speaker diarization means we correctly attribute who said what, even in fast-paced conversations.",
  },
  {
    question: "Is there a desktop app?",
    answer:
      "Yes. Our Electron-based desktop app provides the best experience — capturing system audio directly without any browser limitations. It works on macOS and Windows, with Linux coming soon.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Start Your Meeting",
    description:
      "Click record and Lilah begins listening. No bots, no plugins — just seamless system audio capture.",
  },
  {
    step: 2,
    title: "Get Live Intelligence",
    description:
      "Insights, action items, fact-checks, and research surface in real time as the conversation flows.",
  },
  {
    step: 3,
    title: "Walk Away Prepared",
    description:
      "Structured minutes, action items, and a full transcript — saved automatically to your knowledge base.",
  },
] as const;
