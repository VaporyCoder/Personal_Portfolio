const projects = [
  {
    id: 1,
    slug: "animenexus",
    title: "AnimeNexus",
    shortDescription:
      "Designing a clean, accessible tracker that makes it effortless to log, discover, and discuss anime & manga.",
    overview:
      "AnimeNexus is a UX/UI exploration into how fans track and engage with anime & manga. I set out to reduce the friction common to existing trackers—cluttered layouts, confusing flows, and weak community touchpoints—by designing a calmer interface, clearer IA, and lightweight social features that invite conversation without overwhelming the core tracking tasks.",

    problem:
      "Existing trackers (e.g., MAL) often feel dense and dated. Users struggle to find shows quickly, remember where they left off, and connect with others without noise. The result: more clicks to complete simple tasks, abandoned lists, and minimal social engagement.",
    goals: [
      "Streamline core tasks (log progress, rate, and organize) to near zero-friction",
      "Clarify navigation and information architecture for faster wayfinding",
      "Introduce gentle community features that add value without creating clutter",
      "Ensure strong readability and accessibility across light/dark themes",
    ],
    research: [
      "Competitive review of AniList, MAL, and Kitsu to identify IA, hierarchy, and readability gaps",
      "Lightweight interviews with anime fans to map common tasks and pain points",
      "Two personas to guide decisions: 'The Tracker' (efficiency-driven cataloging) and 'The Social Explorer' (discovery and conversation oriented)",
      "Task walk-throughs with peers to validate flows for logging progress, discovering titles, and browsing community threads",
    ],
    process: [
      {
        phase: "Discover",
        description:
          "Synthesized competitor and user input into core jobs-to-be-done: quick logging, effortless discovery, and lightweight conversation.",
      },
      {
        phase: "Define IA",
        description:
          "Re-mapped navigation around primary intents (My List, Discover, Community), reducing cross-section hopping and buried actions.",
      },
      {
        phase: "Wireframe",
        description:
          "Explored list/card variants and simplified detail pages to surface the right metadata with less scanning.",
      },
      {
        phase: "Visual Design",
        description:
          "Established a calm, readable UI with measured density, consistent spacing, and accessible color in light/dark modes.",
      },
      {
        phase: "Prototype & Test",
        description:
          "Clickable flows validated faster logging and clearer paths to discovery; iterations focused on microcopy and secondary actions.",
      },
    ],
    design: [
      "Card-first layouts with prominent titles/cover art for fast scanning; secondary metadata collapses to reduce noise.",
      "Split navigation for 'My List' vs. 'Discover' to honor 'The Tracker’s' need for speed and 'The Social Explorer’s' desire to browse.",
      "Inline progress controls (add/update episode) reduce steps for frequent loggers.",
      "Contextual community modules (e.g., discussions on a title detail page) so social touchpoints appear where they’re useful—not as a separate destination.",
      "Accessible typography scale and contrast tuned for long reading sessions in both light and dark themes.",
    ],
    outcomes: [
      "Informal usability sessions showed smoother logging and quicker recognition of where to click next.",
      "Testers reported less visual fatigue and easier scanning, especially in dark mode.",
      "Community modules felt additive—not distracting—leading to more saves and follows during discovery.",
    ],
    images: [
      "/images/projects/animenexus/main.webp",
      "/images/projects/animenexus/main_light.webp",
      "/images/projects/animenexus/animenexus_anime.webp",
      "/images/projects/animenexus/animenexus_detail.webp",
      "/images/projects/animenexus/animenexus_profile.webp",
    ],
    personas: [
      {
        name: "Alex Chen – The Tracker",
        tagline:
          "20, Computer Science student, watches anime daily between classes",
        summary:
          "Alex is efficiency-driven and wants to quickly log episodes and maintain a clean library. They often juggle multiple shows and hate wasting time clicking through cluttered interfaces.",
        needs: [
          "One-tap progress updates",
          "Clear episode status at a glance",
          "Low-visual-noise lists",
        ],
        painPoints: [
          "Buried or hard-to-find logging controls",
          "Cluttered detail pages that slow navigation",
          "Too many clicks to mark an episode watched",
        ],
        success: [
          "Logs progress in seconds without losing flow",
          "Maintains an accurate, organized library",
          "Feels in control of their watching habits",
        ],
      },
      {
        name: "Sofia Martínez – The Social Explorer",
        tagline:
          "25, Graphic Designer, watches anime as a way to connect with friends",
        summary:
          "Sofia loves discovering new titles and chatting about them with others. For her, anime tracking isn’t just about keeping a list — it’s about community and sharing experiences.",
        needs: [
          "Curated discovery surfaces with recommendations",
          "Contextual discussions tied to specific titles",
          "Trustworthy cues like ratings and tags from peers",
        ],
        painPoints: [
          "Overwhelming feeds with too much noise",
          "Hard to find shows that match her taste",
          "Community features feel detached from actual titles",
        ],
        success: [
          "Finds new shows that align with her interests",
          "Joins or follows relevant discussions without leaving a title page",
          "Feels like part of a focused, welcoming community",
        ],
      },
    ],
    role: "UX/UI Designer (solo)",
    timeline: "4 weeks",
    tools: [
      "Figma",
      "User Research",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Accessibility Review",
    ],
    figmaUrl: "",
    liveUrl: "https://animenexusdb.up.railway.app/",
    githubUrl: "",
  },

  {
    id: 2,
    slug: "gamershaven",
    title: "Gamers Haven",
    shortDescription:
      "A premium e-commerce platform for gaming products designed around immersion and usability.",
    overview:
      "Gamers Haven was a UX/UI case study in building a digital storefront for gamers. The aim was to create an engaging, game-like shopping experience while keeping flows clear, accessible, and conversion-optimized.",
    problem:
      "Most gaming e-commerce sites overload users with dense layouts and lack distinctiveness. Users wanted more immersive browsing while still expecting standard usability patterns for checkout.",
    goals: [
      "Design a shopping flow that feels immersive without sacrificing usability",
      "Develop a design system tailored to gaming culture",
      "Optimize checkout for speed and conversion",
    ],
    research: [
      "Conducted user interviews with 15 gamers about shopping frustrations and preferences",
      "Analyzed 5 competitor platforms to identify UX gaps",
      "Created personas representing casual and hardcore gamers to guide design choices",
      "Ran card sorting to inform category structure and navigation",
    ],
    process: [
      {
        phase: "Research & Discovery",
        description: "User interviews, competitor audit, and persona creation",
      },
      {
        phase: "User Flows",
        description: "Mapped journeys for browsing, cart, and checkout",
      },
      {
        phase: "Wireframing",
        description: "Sketched and iterated low-fidelity flows",
      },
      {
        phase: "Design System",
        description:
          "Created reusable UI components and gaming-inspired themes",
      },
      {
        phase: "Prototyping & Testing",
        description:
          "Built high-fidelity prototypes in Figma and ran usability tests",
      },
    ],
    design: [
      "Dark-mode centered palette with neon accents inspired by gaming hardware",
      "Extensive component library with 200+ reusable UI elements",
      "Responsive layouts across desktop, tablet, mobile, and console browsers",
    ],
    outcomes: [
      "Test users completed checkout flows 25% faster than on benchmark sites",
      "Positive feedback on immersive product browsing (3D viewers, themed categories)",
      "Clearer navigation validated through card sorting and usability testing",
    ],
    nextSteps: [
      "Expand design system with accessibility variants",
      "Prototype motion design for micro-interactions",
      "Explore AR/VR integration for product previews",
    ],
    personas: [
      {
        name: "Linda Thompson – The Gift Buyer",
        tagline: "42, Mother of a teenage son who is passionate about gaming",
        summary:
          "Linda isn’t a gamer herself, but she wants to buy the perfect birthday gift for her son. She needs a store that feels trustworthy, easy to browse, and doesn’t overwhelm her with jargon. A seamless checkout and clear product descriptions are critical to her confidence.",
        needs: [
          "Simple navigation to find gift-worthy products quickly",
          "Clear product descriptions without heavy technical language",
          "Trust signals like ratings, reviews, and secure checkout",
        ],
        painPoints: [
          "Most gaming sites feel cluttered and intimidating",
          "Unsure what items are popular or age-appropriate",
          "Frustration with long or confusing checkout processes",
        ],
        success: [
          "Finds a product her son will love with minimal effort",
          "Feels confident in the purchase thanks to reviews and clear info",
          "Completes checkout quickly without errors or confusion",
        ],
      },
      {
        name: "Marcus Rivera – The Core Gamer",
        tagline:
          "23, Competitive gamer who spends heavily on gear and collectibles",
        summary:
          "Marcus is immersed in gaming culture and expects an online store to match that vibe. He values immersive visuals, a fast browsing experience, and personalized recommendations that reflect his interests. He’s also picky about product details and expects a polished experience.",
        needs: [
          "Visually engaging, game-inspired shopping experience",
          "Detailed product specs and high-quality images",
          "Easy access to related products, bundles, or limited editions",
        ],
        painPoints: [
          "Generic e-commerce sites feel bland and uninspired",
          "Frustration when product details are hidden or incomplete",
          "Slow, clunky navigation breaks immersion",
        ],
        success: [
          "Browses seamlessly and feels excited while shopping",
          "Finds new gear or collectibles tailored to his interests",
          "Enjoys the store experience as much as the product itself",
        ],
      },
    ],
    role: "UX/UI Designer",
    team: "Solo project",
    timeline: "1 month",
    tools: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design System",
      "Usability Testing",
    ],
    images: [
      "/images/projects/gamershaven/main1.webp",
      "/images/projects/gamershaven/main2.webp",
      "/images/projects/gamershaven/Home.webp",
      "/images/projects/gamershaven/Product Details.webp",
      "/images/projects/gamershaven/Cart.webp",
      "/images/projects/gamershaven/Payment.webp",
    ],
    figmaUrl:
      "https://www.figma.com/design/b9u3cPf5mW2kUw8RVgq5QY/e-Commerce?node-id=138-913",
  },

  {
    id: 3,
    slug: "valorant-stat-tracker",
    title: "Valorant Stat Tracker",
    stats: [
      { value: "196k", label: "Post views (Reddit)" },
      { value: "363", label: "Upvotes" },
      { value: "43", label: "Comments" },
    ],
    shortDescription:
      "An in-game stats experience that surfaces match, agent, and map insights without leaving the client.",
    overview:
      "VALORANT players often rely on third-party websites to track their stats, agent performance, and map win rates. This creates innecessary friction-pulling players out of the game client, breaking immersion, and slowing down decision-making between matches. I deigned an in-client stat tracking experince that gives players immediate access to their performance insights without leavin the game enviornment",
    problem:
      "Players want quick access to post-match stats, agent insights,and map-specific data, but the only options were clittered third-party websites. This meant context-switching between tabs, inconsistent data quality, and lost time between matches. The lack of in-game integration frustrated players who valued speed and convenience.",
    goals: [
      "Surface stats in-context — give players their performance insights directly in the Valorant client.",
      "Design for speed — ensure key numbers can be understood at a glance during short breaks between rounds",
      "Make insights actionable — highlight trends and agent/map matchups that players could use in their very next game",
    ],
    research: [
      "Interviewed players across ranks (Iron through Immortal) to understand what data mattered most and when they checked it.",
      "Reviewed popular third-party stat platforms to identify UX gaps, like overwhelming dashboards and slow navigation.",
      "Conducted task analysis of post-match rituals, noting that players typically wanted quick takeaways before queuing again.",
      "Posted a concept demo on r/VALORANT, where it reached 196k views, 363 upvotes, and 43 comments. Community sentiment was overwhelmingly positive, validating the demand and generating requests for additional features like pre-match summaries and party performance rollups.",
    ],
    process: [
      {
        phase: "User Flows",
        description:
          "mapped entry points: live match scoreboard, post-match summary, player profile.",
      },
      {
        phase: "Wireframes",
        description:
          "explored low-fidelity layouts for quick-glance KPIs and expandable details.",
      },
      {
        phase: "Visual Design",
        description:
          "applied Valorant’s visual language (dark theme, sharp accents) with accessible contrast.",
      },
      {
        phase: "Prototyping",
        description:
          "built a clickable Figma prototype to test navigation speed.",
      },
      {
        phase: "Testing",
        description:
          "ran usability sessions; measured time-to-insight and overall comprehension.",
      },
    ],
    design: [
      "Three-tier info model: quick-glance KPIs → expandable cards → detailed breakdowns",
      "Contextual insights (agent pick win rate on current map; economy impact cues)",
      "Color-safe visualizations and large tap targets for between-round navigation",
      "Validated desirability via community testing: shipped a concept to r/VALORANT and incorporated feedback into next-step priorities.",
    ],
    outcomes: [
      "Users located key post-match stats ~40% faster (avg 6.2s → 3.7s in tests)",
      "Reduced context switching: all testers preferred in-client review vs. web",
      "Improved decision confidence for next-match agent/map choices (qual feedback)",
      "Community validation on Reddit: 196k post views, 363 upvotes, 43 comments with overwhelmingly positive sentiment and feature requests.",
      "Identified top-requested additions from comments: pre-match ‘scout’ summary, party performance rollup, and economy/utility breakdown depth.",
    ],
    nextSteps: [
      "Add pre-match ‘scout’ panel summarizing recent team/party performance",
      "Personalized coaching tips based on last 5 matches",
      "Deeper economy and utility usage breakdowns",
    ],
    personas: [
      {
        name: "Jordan Lee – The Competitive Climber",
        tagline: "19, University student, grinding to reach Immortal rank",
        summary:
          "Jordan is focused on performance improvement and wants actionable insights after every match. They’re frustrated with having to alt-tab to third-party sites and want integrated stats that help them climb faster.",
        needs: [
          "Quick post-match stats directly in the client",
          "Agent and map win rate trends to inform picks",
          "Actionable insights for improving gameplay",
        ],
        painPoints: [
          "Breaking focus by leaving the client to check stats",
          "Overloaded third-party dashboards with too much noise",
          "No context-aware cues tied to their current agent or map",
        ],
        success: [
          "Sees key KPIs (K/D, HS%, win rate) immediately after a match",
          "Adjusts agent picks confidently based on map-specific data",
          "Feels prepared for the next queue without leaving the client",
        ],
      },
      {
        name: "Maya Rodríguez – The Social Strategist",
        tagline:
          "24, Casual player who queues with friends a few nights a week",
        summary:
          "Maya values playing with her group and wants quick, easy-to-read summaries to compare team performance. She’s less concerned with deep analytics and more about seeing party highlights and having fun conversations around the data.",
        needs: [
          "Simple, glanceable team performance stats",
          "Party-level summaries to share with friends",
          "Positive framing of highlights and improvements",
        ],
        painPoints: [
          "Third-party sites focus too heavily on competitive grind metrics",
          "Hard to share interesting stats easily with friends",
          "Stats are often presented negatively, making casual play less fun",
        ],
        success: [
          "Gets a quick team snapshot to celebrate together after games",
          "Shares fun highlights (e.g., 'top entry fragger') with her group",
          "Feels included even if she’s not grinding ranked",
        ],
      },
    ],
    role: "UX/UI Designer",
    team: "Solo project",
    timeline: "3 weeks (nights/weekends)",
    tools: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design System",
      "Interaction Design",
    ],
    images: [
      "/images/projects/valorantstats/overview.jpg",
      "/images/projects/valorantstats/weaponStats.jpg",
      "/images/projects/valorantstats/agentStats.jpg",
      "/images/projects/valorantstats/matchStats.jpg",
    ],
    figmaUrl:
      "https://www.figma.com/design/UzJzmChKVhFedRNcTr9f6h/VALORANT-Stats-Feature?node-id=0-1", // <- replace if you have it
    liveUrl: "", // optional
    githubUrl: "", // optional
  },
  {
  id: 4,
  slug: "invst",
  title: "Invst — Mobile Investing App",
  shortDescription:
    "A mobile-first investing experience focused on clarity, trust, and confident decision-making.",
  overview:
    "Invst explores how to make investing feel approachable for beginners while keeping advanced users productive. I designed a streamlined onboarding, clear portfolio views, and exploratory research/testing to balance simplicity with the guardrails a regulated product needs.",

  problem:
    "Many investing apps either overwhelm novices with jargon or oversimplify risk. Users struggle to understand fees, risk, and the ‘why’ behind changes to their balance—especially during volatile markets.",

  goals: [
    "Design an onboarding that builds trust (KYC, risk, and disclosures) without friction",
    "Create a portfolio view that explains performance in plain language",
    "Support quick actions (buy/sell) with guardrails to reduce mistakes",
    "Offer discoverability for assets without casino-like gamification"
  ],

  personas: [
    {
      name: "Ethan Park – The First-Time Investor",
      tagline: "22, recent grad starting with small recurring buys",
      summary:
        "Ethan wants to learn by doing, but feels intimidated by jargon and worried about 'doing it wrong'. He needs education at the moment of action—without leaving the flow.",
      needs: [
        "Plain-language explanations and risk cues",
        "Guided onboarding and simple funding",
        "A safe way to try recurring buys"
      ],
      painPoints: [
        "Jargon-heavy charts and unclear fees",
        "Confusing KYC steps and funding delays",
        "Fear of making an irreversible mistake"
      ],
      success: [
        "Completes onboarding confidently",
        "Understands why the balance moved",
        "Makes a small, recurring investment with clarity"
      ]
    },
    {
      name: "Priya Menon – The Confident Swing Trader",
      tagline: "28, works in tech; trades a few times per week",
      summary:
        "Priya wants fast execution and powerful, readable charts on the go. She’s comfortable with risk but values controls and transparency when volatility spikes.",
      needs: [
        "Fast symbol search and watchlists",
        "Readable, tappable charts and indicators",
        "Clear order states, limits, and confirmations"
      ],
      painPoints: [
        "Laggy charts and tiny tap targets on mobile",
        "Ambiguous order statuses in volatile periods",
        "Buried settings for alerts and limits"
      ],
      success: [
        "Finds tickers instantly and places orders confidently",
        "Reads chart insights quickly on a small screen",
        "Gets timely alerts and unambiguous confirmations"
      ]
    }
  ],

  research: [
    "Competitive analysis of leading brokers to identify gaps in onboarding, charts, and safeguards",
    "Diary-style interviews with novice investors to surface fears and decision moments",
    "Copy experiments for disclosures, fees, and risk—tested for comprehension",
    "Prototype tests on chart readability and tap-target affordances"
  ],

  process: [
    { phase: "Problem Framing", description: "Mapped journeys for onboarding, funding, explore, trade, and portfolio." },
    { phase: "IA & Flows", description: "Reduced steps for KYC/funding; clarified navigation for Explore vs. Portfolio." },
    { phase: "Wireframes", description: "Low-fi screens to test copy density, card layouts, and chart affordances." },
    { phase: "Visual Design", description: "Mobile-first system with accessible color, dynamic type, and tactile motion." },
    { phase: "Prototyping & Testing", description: "Clickable flows validated comprehension and error recovery states." }
  ],

  design: [
    "Onboarding with progressive disclosure: KYC and risk surfaced in digestible steps with plain-language microcopy.",
    "Portfolio cards explain ‘what changed and why’ with deltas, timeframes, and simple narratives.",
    "Explore uses intent-based search (symbol, sector, theme) plus watchlists and educational nudges—no confetti/gambling tropes.",
    "Order flow with explicit states (review → confirm → pending → filled) and guardrails on risky actions.",
    "Mobile charts optimized for tap—thumb-safe scrubber, big handles, simple overlays; haptics on key interactions.",
    "Accessible color/contrast, large tap targets, and dark mode parity across flows."
  ],

  outcomes: [
    "Usability tests showed higher comprehension of fees and risk disclosures among novices.",
    "Reduced drop-off in funding flow by simplifying identity verification and microcopy.",
    "Faster time-to-order for experienced users thanks to streamlined search and chart controls."
  ],

  nextSteps: [
    "Personalized education in context (why your balance moved today, in plain language)",
    "Scenario-based risk previews before orders during high volatility",
    "Smarter alerts (price, news, portfolio health) without notification fatigue"
  ],

  stats: [
    // Fill as you test; examples:
    // { value: "−23%", label: "Funding drop-off" },
    // { value: "+18%", label: "Order success rate" },
    // { value: "12", label: "Usability sessions" }
  ],

  role: "UX/UI Designer",
  team: "Solo concept (advisory from a fintech PM)",
  timeline: "3–4 weeks",

  tools: [
    "Figma",
    "Design System",
    "Prototyping",
    "Usability Testing",
    "Content Design",
    "Information Architecture",
    "Accessibility",
    "Data Visualization",
    "Motion Design"
  ],

  images: [
    // Replace with your paths
    "/images/projects/invst/square.png"
  ],

  figmaUrl: "",   // add when ready
  liveUrl: "",    // optional (prototype link or demo site)
  githubUrl: ""   // optional (if you build a proof-of-concept)
},
];
export default projects;
