// All copy and data for the site lives here. Layout and behavior are in app.js —
// editing this file should never require touching anything else.
//
// Strings starting with "TODO" render with a dashed "draft" outline so gaps are
// visible in preview. Search this file for TODO before deploying.

window.CONTENT = {
  version: "0.0.2",

  hero: {
    name: "Santiago Labarca",
    eyebrow: "Strategy & operations · Berkeley Haas MBA ’27 · I also build",
    tagline: "I structure ambiguous problems, then ship the fix.",
    sub: "Strategy with execution attached: pricing, risk and go-to-market work across fintech, banking and sports, in Chile, Mexico and the US. I co-founded and ran a company before any of it — and today I build my own AI tools, because I'd rather ship the automation than write the memo about it.",
  },

  // Experience. Every result belongs to one theme and one company, so the same cards
  // can be shown grouped either way (the "By theme / By company" switch).
  themes: [
    { id: "strategy", label: "Strategy & new markets", blurb: "Sizing the opportunity, then designing the org and incentives to capture it." },
    { id: "product", label: "Product & growth", blurb: "Removing friction so customers adopt on their own — and measuring whether they did." },
    { id: "data", label: "Data & risk models", blurb: "Models that change where people spend their time, not dashboards nobody opens." },
    { id: "ownership", label: "Ownership & leadership", blurb: "Owning outcomes across teams I don't manage, and building the ones I do." },
    { id: "ai", label: "AI & automation", blurb: "Picking the workflow worth automating, then shipping it — not just recommending it." },
  ],

  // Newest first — this is the order of the company view.
  companies: [
    {
      id: "sea",
      name: "Sports & Entertainment Advisors",
      place: "San Francisco, US",
      context: "Sports consulting firm focused on ticketing and revenue optimization for professional teams, leagues and event properties.",
      roles: [{ title: "Consulting Intern, Strategy & Business Operations", period: "2026" }],
    },
    {
      id: "s3",
      name: "Berkeley Haas — Social Sector Solutions",
      place: "Bay Area, US",
      context: "Student consulting engagement, coached by McKinsey.",
      roles: [{ title: "Consulting Team Lead", period: "2026" }],
    },
    {
      id: "xepelin",
      name: "Xepelin",
      place: "Santiago, Chile · Mexico City, Mexico",
      context: "LatAm B2B lending fintech specialized in supply chain finance; $110M Series B backed by Kaszek, DST, PayPal and Avenir.",
      roles: [
        { title: "Partnerships Lead", period: "2024–2025" },
        { title: "Portfolio Lead", period: "2022–2024" },
        { title: "Portfolio Associate", period: "2021–2022" },
      ],
      stages: [
        { id: "partnerships", label: "Partnerships Lead · 2024–2025" },
        { id: "portfolio", label: "Portfolio Associate → Lead · 2021–2024" },
      ],
    },
    {
      id: "consorcio",
      name: "Grupo Consorcio",
      place: "Santiago, Chile",
      context: "Insurance and banking group with over $20B in consolidated assets and a $5.4B loan portfolio.",
      roles: [
        { title: "Sr. Internal Consultant", period: "2021" },
        { title: "Internal Consultant", period: "2020" },
      ],
    },
    {
      id: "btg",
      name: "BTG Pactual",
      place: "Santiago, Chile",
      context: "Latin American investment bank — Asset Management, Real Estate.",
      roles: [{ title: "Real Estate Intern", period: "2019" }],
    },
    {
      id: "agora",
      name: "Agora Medios",
      place: "Chile",
      context: "Music festivals for school and university students across Chile, founded with two classmates.",
      roles: [{ title: "Co-founder & COO", period: "2014–2019" }],
    },
    {
      id: "personal",
      name: "Independent projects",
      place: "Berkeley, US",
      context: "Software I design, build and run myself.",
      roles: [{ title: "Builder", period: "2026–present" }],
    },
  ],

  // Each result: big metric + one-line outcome; expanding shows the supporting detail.
  // `role` is the title held when it happened; `stage` only applies to companies with stages.
  results: [
    // Sports & Entertainment Advisors
    {
      company: "sea", theme: "strategy", role: "Consulting Intern",
      metric: "$10M",
      headline: "Pricing & inventory strategy for a client's move into a 3×-capacity arena",
      bullets: [
        "Unlocked ~$10M in incremental annual revenue (~100% growth)",
        "Sized the sales org needed to capture it",
        "Designed a new rep commission structure",
      ],
    },
    {
      company: "sea", theme: "data", role: "Consulting Intern",
      metric: "40% / 60%",
      headline: "Automated renewal-risk model for a full season-ticket base",
      bullets: [
        "Scored every account for renewal risk automatically",
        "Drove campaign sequencing and outreach priority",
        "Focused rep effort on the ~40% of accounts carrying ~60% of renewal revenue",
      ],
    },
    {
      company: "sea", theme: "ai", role: "Consulting Intern",
      metric: "5 → 1",
      headline: "Built the firm's AI roadmap and shipped the top pick",
      bullets: [
        "Scored five recurring workflows on frequency, risk and value",
        "Shipped the top-ranked automation for client deliverable production",
        "Embedded it into new-hire onboarding",
      ],
    },

    // Haas S3
    {
      company: "s3", theme: "strategy", role: "Consulting Team Lead",
      metric: "Team lead",
      headline: "Operations improvement & digital transformation for a 10,000+ home senior community",
      bullets: [
        "Leading the student consulting team for the community's administrative body",
        "Two processes in scope: assessment collections, and resale/escrow",
      ],
    },

    // Xepelin — Partnerships
    {
      company: "xepelin", stage: "partnerships", theme: "product", role: "Partnerships Lead",
      metric: "4× MAU",
      headline: "Turned partnerships into a product-led growth motion",
      bullets: [
        "Launched API integrations and a self-serve customer/partner portal",
        "Standardized onboarding and adoption workflows to remove friction at scale",
      ],
    },
    {
      company: "xepelin", stage: "partnerships", theme: "product", role: "Partnerships Lead",
      metric: "+150%",
      headline: "Net revenue from $500K to $1.25M a year",
      bullets: [
        "Built a data-driven engine to diagnose funnel bottlenecks",
        "Shipped prioritized retention and acquisition fixes; tracked impact through cohort and churn analysis",
        "Grew customer lifetime value along the way",
      ],
    },
    {
      company: "xepelin", stage: "partnerships", theme: "product", role: "Partnerships Lead",
      metric: "−40%",
      headline: "Time-to-active, with an end-to-end client playbook",
      bullets: [
        "Playbook from lead generation through contract close, onboarding and ongoing management",
        "Raised the self-serve rate and cut operations time by 25%",
      ],
    },
    {
      company: "xepelin", stage: "partnerships", theme: "ownership", role: "Partnerships Lead",
      metric: "−30%",
      headline: "Merged three siloed teams into one 8-person org",
      bullets: [
        "Serving banks and SMB finance institutions",
        "Redesigned workflows, roles and capacity planning; cut overhead 30%",
      ],
    },

    // Xepelin — Portfolio
    {
      company: "xepelin", stage: "portfolio", theme: "data", role: "Portfolio Lead",
      metric: "15% → 65%",
      headline: "Found the 15% of clients driving 65% of defaults",
      bullets: [
        "Built an invoice-level risk pricing and provisions system",
        "Analyzed payor payment patterns to deprioritize the riskiest clients",
        "Improved portfolio health and loss-adjusted unit economics",
      ],
    },
    {
      company: "xepelin", stage: "portfolio", theme: "data", role: "Portfolio Lead",
      metric: "Bi-weekly",
      headline: "Ran the C-level performance committee",
      bullets: [
        "Turned granular default data into risk tiers and action plans",
        "Aligned owners and OKRs; accelerated decisions on credit policy and customer prioritization",
      ],
    },
    {
      company: "xepelin", stage: "portfolio", theme: "ownership", role: "Portfolio Lead",
      metric: "200%+",
      headline: "Built a portfolio team and took it to Mexico",
      bullets: [
        "Built and guided a three-person portfolio strategy team",
        "Expanded operations internationally into Mexico",
        "Portfolio grew from $84M to $267M",
      ],
    },

    // Grupo Consorcio
    {
      company: "consorcio", theme: "strategy", role: "Internal Consultant",
      metric: "$800M",
      headline: "New mortgage product for state-subsidized housing",
      bullets: [
        "Modeled and introduced the product, expanding the addressable market by $800M a year",
        "Partnered with Product/Engineering, Risk and Legal",
        "Presented it directly to the board of directors",
      ],
    },
    {
      company: "consorcio", theme: "product", role: "Internal Consultant",
      metric: "2 days → instant",
      headline: "Chile's first digital mortgage pre-approval",
      bullets: [
        "Directed and executed the system end to end with design, product engineering and legal",
        "Approval time went from two days to instant results",
      ],
    },
    {
      company: "consorcio", theme: "ownership", role: "Sr. Internal Consultant",
      metric: "6 projects",
      headline: "Chaired a cross-entity steering committee of 8+ senior managers",
      bullets: [
        "Owned prioritization and trade-off calls across the bank's and insurer's real estate units",
        "Closed six cross-entity projects end to end",
      ],
    },

    // BTG Pactual
    {
      company: "btg", theme: "data", role: "Real Estate Intern",
      metric: "Cap rates",
      headline: "Real estate valuation model to set investment return thresholds",
      bullets: [
        "Built a data-driven valuation model",
        "Benchmarked regional and international cap rates",
        "Presented to senior leadership",
      ],
    },

    // Agora Medios
    {
      company: "agora", theme: "ownership", role: "Co-founder & COO",
      metric: "$1M+",
      headline: "Co-founded and ran a student music-festival company",
      bullets: [
        "Festivals for school and university students across Chile",
        "Reached over $1M in annual revenue — while in college",
      ],
    },

    // Independent
    {
      company: "personal", theme: "ai", role: "Builder",
      metric: "In use daily",
      headline: "Sydney: a multi-user AI assistant, built and run solo",
      bullets: [
        "Chat assistant + web app with real users",
        "See “Things I've built” below for how it works",
      ],
      link: "#projects",
    },
  ],

  projects: [
    {
      name: "Sydney",
      kicker: "Personal AI assistant · in daily use since 2026",
      brief:
        "An assistant that lives in a Telegram chat. You write to her the way you'd tell a person — “pay the electricity bill friday” — and she files it with the date already set. Real users rely on her every day.",
      stats: [
        { value: "2", label: "ways in: a chat and a web app, same data" },
        { value: "3", label: "integrations: tasks, Google Calendar + Gmail, Sheets" },
        { value: "EN / ES", label: "bilingual web app" },
      ],
      boxes: [
        { title: "Talk, don't fill forms", text: "Tasks from plain sentences.", detail: "Dates are read out of the sentence and shown back before saving — a wrong date is invisible until the reminder fires on the wrong day." },
        { title: "Two briefings a day", text: "Morning: what's coming. Evening: what's still open.", detail: "Sent to each user at their own local time." },
        { title: "Calendar & email", text: "Add events, see the day, triage the inbox.", detail: "Surfaces only the emails from real people that actually need a reply." },
        { title: "Money owed", text: "Who owes you, and what you owe.", detail: "Tracked per user, in a shared spreadsheet." },
        { title: "Voice notes", text: "Speak instead of typing.", detail: "Transcribed automatically, then handled like any message." },
        { title: "Private by design", text: "Invite-only; each user sees only their own data.", detail: "Access is decided in one place, and a rejected sign-in never reveals who has an account." },
      ],
      approach: {
        title: "How I handled the hardest problem",
        steps: [
          { label: "Problem", text: "Users told me the assistant sometimes confirmed a task as done when it wasn't. For an assistant, trust is the product: one false “done” and people stop relying on it." },
          { label: "Diagnosis", text: "The obvious fix — stricter instructions to the AI — was tried three times and failed three times. Instructions can ask; they can't enforce." },
          { label: "Fix", text: "I moved the guarantee out of the AI and into the system: every reply is checked against what actually happened. An unverified claim is retried once, then replaced with an honest “I couldn't do that.”" },
          { label: "Result", text: "Users get the action or the truth — never a false confirmation. Same principle I use in operations: controls, not reminders." },
        ],
      },
      stack: ["Node.js", "OpenAI GPT-5 mini", "MCP", "Next.js", "TypeScript", "Postgres", "Vercel"],
      links: [
        { label: "Live web app", href: "https://task-dashboard-six-snowy.vercel.app", note: "invite-only" },
        { label: "Assistant code", href: "https://github.com/slabarcaf/melissa-bot" },
        { label: "Web app code", href: "https://github.com/slabarcaf/task-dashboard" },
      ],
    },
    {
      name: "Form auto-register bot",
      kicker: "Automation · weekly job",
      brief:
        "A weekly sign-up arrives by email as a brand-new Google Form — new link, new fields, every time. This bot finds it, understands it, and submits it on my behalf.",
      boxes: [
        { title: "Finds the form", text: "Reads the weekly email.", detail: "Nothing about the form is hard-coded — it's rediscovered every run." },
        { title: "Never double-submits", text: "Remembers what it already did.", detail: "Safe to re-run at any time." },
        { title: "Fails loudly", text: "If anything breaks, I get a message.", detail: "With a one-tap link to finish it by hand." },
      ],
      approach: {
        title: "What changed along the way",
        steps: [
          { label: "Plan", text: "Submit the form directly, with nothing to install." },
          { label: "Finding", text: "Submissions were rejected: the form requires a signed-in Google account, even though anyone can view it." },
          { label: "Pivot", text: "Scrapped the plan and moved to a signed-in browser that fills and submits the form automatically." },
        ],
      },
      stack: ["Node.js", "Playwright", "Gmail API", "Telegram"],
      links: [{ label: "Code is private — ask me for a walkthrough", href: null }],
    },
  ],

  about: {
    photo: "assets/photo.jpg",
    bio: [
      "I'm from Santiago, Chile. I co-founded my first company the year I started college — music festivals for students across the country — and ran it as COO until I graduated.",
      "Since then I've worked where finance meets operations: internal consulting at a bank and insurance group, then four years scaling a B2B lending fintech from Chile into Mexico. Today I'm doing my MBA at Berkeley Haas on a merit scholarship, and building AI tools on the side.",
    ],
    interests: [
      "Golf — national overall champion, 2004 & 2006; co-president of the Haas Golf Club",
      "Competitive mountain biking",
      "Fintech",
      "Building with AI",
    ],
    education: [
      { school: "UC Berkeley, Haas School of Business", degree: "MBA · merit-based scholarship", period: "2025–2027" },
      { school: "Universidad de Chile", degree: "B.S. Business Administration · with Distinction", period: "2014–2019" },
    ],
    links: [
      { label: "Email", href: "mailto:santiago.labarca@berkeley.edu" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/santiagolabarca/" },
      { label: "GitHub", href: "https://github.com/slabarcaf" },
    ],
    resume: "assets/Santiago-Labarca-Resume.pdf",
  },
};
