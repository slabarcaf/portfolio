// All copy and data for the site lives here. Layout and behavior are in app.js —
// editing this file should never require touching anything else.
//
// Strings starting with "TODO" render with a dashed "draft" outline so gaps are
// visible in preview. Search this file for TODO before deploying.

window.CONTENT = {
  version: "0.1.0",

  name: "Santiago Labarca",
  photo: "/assets/photo.jpg",
  resume: "/assets/Santiago-Labarca-Resume.pdf",

  // Each version of the page is reached through an opaque key in the path (/k7q2), so the
  // lens names never show up in links. "/" (or an unknown key) is the default version.
  // To rotate a link, change its key here; vercel.json already sends any one-segment path
  // to index.html.
  lensKeys: { k7q2: "ops", m3xd: "strategy", f9tw: "founder" },

  // Lenses change the eyebrow, the second bio line, which journey stop starts open, and the
  // order of the "all the numbers" table (theme ids). Bio parts: plain strings, or { w, tip }
  // for a highlighted phrase that shows `tip` on hover/tap.
  lenses: {
    default: {
      eyebrow: "Santiago → Mexico City → Berkeley",
      line2: ["Ran a ", { w: "festival company", tip: "Agora Medios: music festivals for students across Chile. Co-founded with two classmates; $1M+ a year in revenue." }, " in college, then helped take a fintech's portfolio from ", { w: "$84M to $267M", tip: "Xepelin, 2021–2025. Built the portfolio team and expanded it from Chile into Mexico." }, "."],
      focus: null,
      order: null,
    },
    ops: {
      eyebrow: "Strategy & operations · Berkeley Haas MBA ’27",
      line2: ["Turned a fintech's partnerships into ", { w: "4× monthly users", tip: "Xepelin: API integrations and a self-serve partner portal; net revenue $500K → $1.25M." }, " and merged ", { w: "three teams into one", tip: "One 8-person org serving banks and SMB lenders, with 30% less overhead." }, "."],
      focus: "xepelin",
      order: ["product", "ownership", "data", "strategy", "ai"],
    },
    strategy: {
      eyebrow: "Strategy · Berkeley Haas MBA ’27",
      line2: ["Found ", { w: "$10M a year", tip: "Sports & Entertainment Advisors: pricing and inventory for a client moving into an arena 3× the size." }, " in an arena move and an ", { w: "$800M market", tip: "Grupo Consorcio: a mortgage product for state-subsidized housing, presented to the board." }, " for a bank."],
      focus: "sea",
      order: ["strategy", "data", "product", "ownership", "ai"],
    },
    founder: {
      eyebrow: "Founder, operator, builder",
      line2: ["Co-founded a ", { w: "$1M+ festival company", tip: "Agora Medios: music festivals for students across Chile, run as COO while in college." }, " in college, then built a fintech's ", { w: "team in Mexico", tip: "Xepelin: built a three-person portfolio team and expanded operations into Mexico." }, "."],
      focus: "agora",
      order: ["ownership", "ai", "product", "strategy", "data"],
    },
  },
  bio: {
    line1: ["From ", { w: "Santiago, Chile", tip: "Universidad de Chile, B.S. Business Administration with Distinction." }, ", now at ", { w: "Berkeley Haas", tip: "MBA ’27 on a merit scholarship. Co-president of the Haas Golf Club." }, "."],
    line3: ["Now I build the ", { w: "AI tools", tip: "Like Sydney, an assistant that lives in Telegram. Real people use it every day." }, " I use every day."],
  },

  // Labels for the photo strip under the intro; placeholders until real photos exist.
  strip: ["TODO photo: Agora festival", "TODO photo: Golf", "TODO photo: Mexico City", "TODO photo: Xepelin team", "TODO photo: Berkeley", "TODO photo: Mountain bike"],

  // The journey: one stop per screen, oldest first. `companies` pull in the matching results
  // (shown under "Open the story"); a lens's `focus` matches the first company id.
  journey: [
    {
      companies: ["agora"], years: "2014–2019", place: "Santiago, Chile",
      org: "Agora Medios", role: "Co-founder & COO",
      metric: "$1M+", label: "annual revenue",
      line: "Started a music-festival company for students with two classmates, and ran it until I graduated.",
      photo: "TODO photo: Agora crowd or stage",
    },
    {
      companies: ["btg"], years: "2019", place: "Santiago, Chile",
      org: "BTG Pactual", role: "Real Estate Intern",
      metric: null, label: null,
      line: "Built the valuation model that set return thresholds for real estate investments.",
      photo: null,
    },
    {
      companies: ["consorcio"], years: "2020–2021", place: "Santiago, Chile",
      org: "Grupo Consorcio", role: "Internal Consultant",
      metric: "$800M", label: "a year in new addressable market",
      line: "Designed a mortgage for state-subsidized housing and took it to the board. Then launched Chile's first instant digital mortgage pre-approval.",
      photo: "TODO photo: Consorcio",
    },
    {
      companies: ["xepelin"], years: "2021–2025", place: "Santiago → Mexico City",
      org: "Xepelin", role: "Portfolio Associate → Lead → Partnerships Lead",
      metric: "$84M → $267M", label: "portfolio, while I ran portfolio strategy",
      line: "Found the 15% of clients driving 65% of defaults, built the team that fixed it, and took it to Mexico.",
      photo: "TODO photo: Mexico City / Xepelin team",
    },
    {
      companies: ["sea", "s3", "personal"], years: "2025–2027", place: "Berkeley & San Francisco",
      org: "Haas MBA · Sports & Entertainment Advisors", role: "MBA candidate · Strategy intern",
      metric: "$10M", label: "incremental annual revenue, one arena move",
      line: "Priced a pro team's move into an arena 3× the size and shipped the firm's first AI automation. On the side, I build Sydney.",
      photo: "TODO photo: Berkeley / arena",
    },
  ],

  // Theme ids order the "all the numbers" table per lens. Each result has one.
  themes: ["strategy", "product", "data", "ownership", "ai"],

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
        "See “What I build” below for how it works",
      ],
      link: "#projects",
    },
  ],

  projects: [
    {
      name: "Sydney",
      kicker: "Personal AI assistant · in daily use since 2026",
      brief: "An assistant that lives in a Telegram chat. You write to her like you'd tell a person, and she files the task with the date already set. Real users rely on her every day.",
      // The chat shown in the phone mock-up.
      chat: [
        { me: true, text: "pay the electricity bill friday" },
        { me: false, text: "Saved: Pay the electricity bill · Fri. I'll remind you that morning." },
        { me: true, text: "what's left for today?" },
        { me: false, text: "2 things: reply to Diego, book the court for Saturday." },
      ],
      stats: [
        { value: "2", label: "ways in: a chat and a web app, same data" },
        { value: "3", label: "integrations: tasks, Google Calendar + Gmail, Sheets" },
        { value: "EN / ES", label: "bilingual" },
      ],
      approach: {
        title: "The hardest problem",
        steps: [
          { label: "Problem", text: "The assistant sometimes said a task was done when it wasn't. One false “done” and people stop trusting it." },
          { label: "Diagnosis", text: "Stricter instructions to the AI failed three times. Instructions can ask; they can't enforce." },
          { label: "Fix", text: "Every reply is checked against what actually happened. An unverified claim is retried once, then replaced with an honest “I couldn't do that.”" },
          { label: "Result", text: "Users get the action or the truth, never a false confirmation. Controls, not reminders." },
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
      brief: "A weekly sign-up arrives by email as a brand-new Google Form. This bot finds it, fills it and submits it for me, and messages me if anything breaks.",
      stack: ["Node.js", "Playwright", "Gmail API", "Telegram"],
      links: [{ label: "Code is private — ask me for a walkthrough", href: null }],
    },
  ],

  // Off the clock: photo cards (placeholders until real photos) and the random-facts deck.
  offClock: [
    { photo: "TODO photo: Golf", caption: "Golf: national overall champion in Chile, 2004 & 2006. Co-president of the Haas Golf Club." },
    { photo: "TODO photo: Mountain biking", caption: "Raced the national mountain-bike championships. Still ride, and bike to work." },
    { photo: "TODO photo: Family farm", caption: "Grew up around my family's farm in Chile. Still ride horses when I can." },
  ],
  facts: [
    "Robotics team in college: made it to the world championship in St. Louis, then coached the team for two years.",
    "Spent a month running a farm near Bergen, Norway: plums, cherries, apples and a quail operation.",
    "Home-brewed beer for two years, for friends and family gatherings.",
    "I've made five kinds of cheese, with milk from local farms.",
    "Lived with four friends in a house with a home gym, a climbing wall and a dog.",
    "Fourth of five siblings.",
    "Six months in Bordeaux, organizing château visits for the university wine club.",
    "My siblings and I made 300 bottles of wine from our family's own grapes.",
    "At least one live concert a month: Latin American rock, ’80s and ’90s rock, indie pop.",
    "I spearfish. Our crew has dived 5+ spots along the Chilean coast.",
    "At 18, I turned an abandoned Instagram account into a Russian-tourism page, grew it to 40K followers and sold it.",
    "Interned at a shipping company in Ipswich, UK, as the only non-Brit in town.",
    "Bought an ex-mining Toyota truck at auction at 20. I still drive that same red truck.",
    "Same hiking trip with my college friends every year since 2013.",
    "Built chapels and homes for small towns across Chile as the volunteer crew's logistics coordinator.",
    "Taught English to kids in La Pincoya, one of Santiago's most underserved neighborhoods.",
  ],

  about: {
    education: [
      { school: "UC Berkeley, Haas School of Business", degree: "MBA · merit-based scholarship", period: "2025–2027" },
      { school: "Universidad de Chile", degree: "B.S. Business Administration · with Distinction", period: "2014–2019" },
    ],
    links: [
      { label: "Email", href: "mailto:santiago.labarca@berkeley.edu" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/santiagolabarca/" },
      { label: "GitHub", href: "https://github.com/slabarcaf" },
    ],
  },

  // Voice assistant (the voice-agent project, embedded in an iframe).
  voice: {
    button: "Talk to my AI assistant",
    title: "My AI assistant",
    note: "It's an AI, not me. It answers from my résumé and stories, in English or Spanish.",
    hero: "Ask my AI about me",
    // A small toast (not a modal) once the visitor reaches the journey, once per visit.
    teaser: {
      title: "Rather ask than scroll?",
      text: "My AI assistant knows my résumé and stories. Ask it out loud, in English or Spanish.",
      cta: "Start talking",
      autoHideMs: 12000,
    },
    url: "https://voice-agent-three-sable.vercel.app/demo",
    engine: "managed", // "managed" (ElevenLabs) or "open" (open source); visitors can switch in the panel
  },
};
