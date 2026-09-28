// All copy and data for the site lives here. Layout and behavior are in app.js —
// editing this file should never require touching anything else.
//
// Strings starting with "TODO" render with a dashed "draft" outline so gaps are
// visible in preview. Search this file for TODO before deploying.

window.CONTENT = {
  version: "0.0.1",

  hero: {
    name: "Santiago Labarca",
    eyebrow: "Berkeley Haas MBA ’27 · ex-fintech operator · builder",
    tagline: "I turn messy operations into systems — and lately, into AI tools people use every day.",
    sub: "Six years scaling lending portfolios, partnerships and digital products in Latin American fintech and banking. Now at Berkeley Haas, consulting on revenue strategy for pro sports teams and shipping my own AI products on the side.",
    metrics: [
      { value: "$10M", label: "incremental annual revenue from a pricing & inventory strategy" },
      { value: "4×", label: "monthly active users after launching APIs and a self-serve portal" },
      { value: "$267M", label: "lending portfolio, up from $84M, while expanding into Mexico" },
      { value: "2", label: "AI products I built, running in production with real users" },
    ],
  },

  // Experience grouped by competency. Each result card: big metric + one-line outcome;
  // expanding shows org, role, period and the supporting detail.
  experience: {
    buckets: [
      {
        id: "product",
        label: "Product & growth",
        blurb: "Removing friction so customers adopt on their own — and measuring whether they did.",
        results: [
          {
            metric: "4× MAU",
            headline: "Turned partnerships into a product-led growth motion",
            org: "Xepelin",
            role: "Partnerships Lead",
            period: "2024–2025",
            bullets: [
              "Launched API integrations and a self-serve customer/partner portal",
              "Standardized onboarding and adoption workflows to remove friction at scale",
            ],
          },
          {
            metric: "+150%",
            headline: "Net revenue from $500K to $1.25M a year",
            org: "Xepelin",
            role: "Portfolio / Partnerships Lead",
            period: "2022–2025",
            bullets: [
              "Built a data-driven engine to diagnose funnel bottlenecks",
              "Shipped prioritized retention and acquisition fixes; tracked impact through cohort and churn analysis",
              "Grew customer lifetime value along the way",
            ],
          },
          {
            metric: "2 days → instant",
            headline: "Chile's first digital mortgage pre-approval",
            org: "Grupo Consorcio",
            role: "Internal Consultant",
            period: "2020–2021",
            bullets: [
              "Directed and executed the system end to end with design, product engineering and legal",
              "Approval time went from two days to instant results",
            ],
          },
          {
            metric: "−40%",
            headline: "Time-to-active, with an end-to-end client playbook",
            org: "Xepelin",
            role: "Partnerships Lead",
            period: "2024–2025",
            bullets: [
              "Playbook from lead generation through contract close, onboarding and ongoing management",
              "Raised the self-serve rate and cut operations time by 25%",
            ],
          },
        ],
      },
      {
        id: "data",
        label: "Data & risk models",
        blurb: "Models that change where people spend their time, not dashboards nobody opens.",
        results: [
          {
            metric: "15% → 65%",
            headline: "Found the 15% of clients driving 65% of defaults",
            org: "Xepelin",
            role: "Portfolio Lead",
            period: "2022–2024",
            bullets: [
              "Built an invoice-level risk pricing and provisions system",
              "Analyzed payor payment patterns to deprioritize the riskiest clients",
              "Improved portfolio health and loss-adjusted unit economics",
            ],
          },
          {
            metric: "40% / 60%",
            headline: "Automated renewal-risk model for a full season-ticket base",
            org: "Sports & Entertainment Advisors",
            role: "Consulting Intern",
            period: "2026–present",
            bullets: [
              "Scored every account for renewal risk automatically",
              "Drove campaign sequencing and outreach priority",
              "Focused rep effort on the ~40% of accounts carrying ~60% of renewal revenue",
            ],
          },
          {
            metric: "Bi-weekly",
            headline: "Ran the C-level performance committee",
            org: "Xepelin",
            role: "Portfolio Lead",
            period: "2022–2024",
            bullets: [
              "Turned granular default data into risk tiers and action plans",
              "Aligned owners and OKRs; accelerated decisions on credit policy and customer prioritization",
            ],
          },
        ],
      },
      {
        id: "ai",
        label: "AI & automation",
        blurb: "Picking the workflow worth automating, then shipping it — not just recommending it.",
        results: [
          {
            metric: "5 → 1",
            headline: "Built a consulting firm's AI roadmap and shipped the top pick",
            org: "Sports & Entertainment Advisors",
            role: "Consulting Intern",
            period: "2026–present",
            bullets: [
              "Scored five recurring workflows on frequency, risk and value",
              "Shipped the top-ranked automation for client deliverable production",
              "Embedded it into new-hire onboarding so it outlives me",
            ],
          },
          {
            metric: "In prod",
            headline: "Sydney: a multi-user AI assistant, built and run solo",
            org: "Personal project",
            role: "Builder",
            period: "2026–present",
            bullets: [
              "Telegram assistant + web dashboard, real users, one VM and a free Postgres tier",
              "See “Things I've built” below for the architecture and the interesting bugs",
            ],
            link: "#projects",
          },
        ],
      },
      {
        id: "ownership",
        label: "Ownership & leadership",
        blurb: "Owning outcomes across teams I don't manage, and building the ones I do.",
        results: [
          {
            metric: "200%+",
            headline: "Built a portfolio team and took it to Mexico",
            org: "Xepelin",
            role: "Portfolio Lead",
            period: "2022–2024",
            bullets: [
              "Built and guided a three-person portfolio strategy team",
              "Expanded operations internationally into Mexico",
              "Portfolio grew from $84M to $267M",
            ],
          },
          {
            metric: "−30%",
            headline: "Merged three siloed teams into one 8-person org",
            org: "Xepelin",
            role: "Partnerships Lead",
            period: "2024–2025",
            bullets: [
              "Serving banks and SMB finance institutions",
              "Redesigned workflows, roles and capacity planning; cut overhead 30%",
            ],
          },
          {
            metric: "6 projects",
            headline: "Chaired a cross-entity steering committee of 8+ senior managers",
            org: "Grupo Consorcio",
            role: "Sr. Internal Consultant",
            period: "2021",
            bullets: [
              "Owned prioritization and trade-off calls across the bank's and insurer's real estate units",
              "Closed six cross-entity projects end to end",
            ],
          },
          {
            metric: "$1M+",
            headline: "Co-founded a student music-festival company",
            org: "Agora Medios",
            role: "Co-founder & COO",
            period: "2014–2019",
            bullets: [
              "Festivals for school and university students across Chile",
              "Reached over $1M in annual revenue — while in college",
            ],
          },
        ],
      },
      {
        id: "strategy",
        label: "Strategy & new markets",
        blurb: "Sizing the opportunity, then designing the org and incentives to capture it.",
        results: [
          {
            metric: "$10M",
            headline: "Pricing & inventory strategy for a move into a 3×-capacity arena",
            org: "Sports & Entertainment Advisors",
            role: "Consulting Intern",
            period: "2026–present",
            bullets: [
              "Unlocked ~$10M in incremental annual revenue (~100% growth)",
              "Sized the sales org needed to capture it",
              "Designed a new rep commission structure",
            ],
          },
          {
            metric: "$800M",
            headline: "New mortgage product for state-subsidized housing",
            org: "Grupo Consorcio",
            role: "Internal Consultant",
            period: "2020",
            bullets: [
              "Modeled and introduced the product, expanding the addressable market by $800M a year",
              "Partnered with Product/Engineering, Risk and Legal",
              "Presented it directly to the board of directors",
            ],
          },
        ],
      },
    ],
  },

  projects: [
    {
      name: "Sydney",
      kicker: "Personal AI assistant · in production since 2026",
      brief:
        "A multi-user assistant that lives in a Telegram chat. You write to her the way you'd tell a person — “pay the electricity bill friday” — and she files it with the date already set. Tasks, debts, calendar, email triage, and a morning and evening briefing pushed to each user at their own local time.",
      stack: ["Node 22", "OpenAI gpt-5-mini", "MCP (JSON-RPC/stdio)", "Next.js 14", "TypeScript", "Postgres", "Vercel", "Oracle VM"],
      features: [
        "Natural-language tasks: add, complete, move and delete by chatting; dates parsed from the sentence",
        "Multi-user with invite-only onboarding; each user reads and writes only their own rows",
        "Three MCP servers (tasks, Calendar + Gmail, Sheets) run as supervised child processes",
        "Voice notes transcribed with Whisper and handled as text",
        "Web dashboard: same account, same data — bilingual (EN/ES) with compile-time key parity",
        "Security: hashed session tokens, rate limiting on every route that costs money, CSP/HSTS",
      ],
      askMe: {
        title: "The part I'd want to be asked about",
        text: "A prompt rule cannot make a model call a tool. The assistant kept confirming actions she never performed — and more system-prompt text didn't fix it. Now every turn checks in code whether a mutating tool actually ran; a false claim is retried once, then replaced with an honest failure. You get the action or the truth, never a lie.",
      },
      links: [
        { label: "Live web app", href: "https://task-dashboard-six-snowy.vercel.app", note: "invite-only sign-in" },
        { label: "Assistant repo", href: "https://github.com/slabarcaf/melissa-bot" },
        { label: "Dashboard repo", href: "https://github.com/slabarcaf/task-dashboard" },
      ],
    },
    {
      name: "Form auto-register bot",
      kicker: "Browser automation · weekly job",
      brief:
        "A weekly sign-up arrives by email as a brand-new Google Form — new URL, new field IDs, every time. This bot reads the email, parses the form's embedded data, maps fields by title, and submits a pre-filled response through a signed-in headless browser.",
      stack: ["Node.js", "Playwright", "Gmail API (OAuth)", "Telegram alerts"],
      features: [
        "Re-discovers the form every run — nothing about it is hard-coded",
        "Idempotent: a state file prevents double submissions",
        "On failure, sends a Telegram alert with a one-tap pre-filled link as fallback",
        "Schedules itself and removes itself on an end date",
      ],
      askMe: {
        title: "The part I'd want to be asked about",
        text: "The original design was a zero-install anonymous POST. It returned 401: the form collects verified emails, so submitting requires a Google sign-in even though viewing is public. I found it in the form's embedded config, scrapped the design, and moved to a persistent browser profile.",
      },
      links: [{ label: "Repo is private — ask me for a walkthrough", href: null }],
    },
  ],

  about: {
    photo: "assets/photo.jpg",
    bio: [
      "I'm from Santiago, Chile. I co-founded my first company the year I started college — music festivals for students across the country — and ran it as COO until I graduated.",
      "Since then I've worked where finance meets operations: internal consulting at a bank and insurance group, then four years scaling a B2B lending fintech from Chile into Mexico. Today I'm doing my MBA at Berkeley Haas on a merit scholarship, and building AI tools because I'd rather ship the automation than write the memo about it.",
    ],
    interests: [
      "Golf — national overall champion, 2004 & 2006; co-president of the Haas Golf Club",
      "Competitive mountain biking",
      "Fintech",
      "Building with LLMs and agents",
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
