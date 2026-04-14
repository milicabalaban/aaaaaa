// ============================================================================
// PERSONAL INTRODUCTION — Edit this file to update all website content.
// Everything here is plain data. No other file needs touching.
// ============================================================================

export const siteContent = {
  // ── META & SEO ──────────────────────────────────────────────────────────
  meta: {
    title: "Milica Balaban — Marketing Strategist, Founder, PhD Candidate",
    description:
      "I'm Milica Balaban. I help startups and tech companies tell stories people remember. Founder of Marketics.biz, Marketing Manager at Prepia, top 1% LinkedIn creator in Serbia.",
    url: "https://milicabalaban.com", // TODO: replace with final domain
    ogImage: "/images/og-image.png", // TODO: add 1200×630 OG image
  },

  // ── NAVIGATION ──────────────────────────────────────────────────────────
  nav: {
    logo: "Milica Balaban",
    links: [
      { label: "Story", href: "#story" },
      { label: "Work", href: "#work" },
      { label: "Events", href: "#events" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Say hi",
    ctaHref: "#contact",
  },

  // ── HERO ────────────────────────────────────────────────────────────────
  hero: {
    name: "Milica Balaban",
    title: "Marketing strategist. Founder. PhD candidate.",
    location: "Belgrade, Serbia",
    intro:
      "I help startups and tech companies build brands people actually remember. I run Marketics, lead marketing at Prepia, and write about strategy and storytelling on LinkedIn to an audience of 25,000+.",
    ctaPrimary: { label: "Say hi", href: "#contact" },
    ctaSecondary: { label: "Find me on LinkedIn", href: "https://linkedin.com/in/milicabalaban" },
    // Add your photo at public/images/profile.jpg to replace the placeholder
    profileImage: "/images/profile.jpg",
  },

  // ── STORY — short first-person passages threaded through the page ───────
  story: {
    parts: [
      {
        kicker: "01 — How I got here",
        heading: "I came for the words, stayed for the strategy.",
        body: "I started out fascinated by how language moves people. Marketing felt like the place where words had to actually do something — change a mind, earn a click, build trust — and I've been chasing that feeling ever since. Along the way I fell for the tech space, where the product is usually brilliant and the story almost never is. That gap is where I like to work.",
      },
      {
        kicker: "02 — What I'm doing now",
        heading: "Running Marketics, learning on Prepia, writing out loud.",
        body: "Right now I'm leading marketing at Prepia — one of the fastest-growing startups in Europe — while running my own agency, Marketics, and finishing my PhD. On LinkedIn I share what I'm learning as I go: what's working, what's absolutely not, and the uncomfortable parts in between.",
      },
      {
        kicker: "03 — Why I share it",
        heading: "Because the best marketing advice shouldn't be a secret.",
        body: "I grew up wanting to work in marketing without really knowing what that meant. Most of what I know I learned from people who explained their thinking out loud on the internet. Writing, speaking, mentoring — it's the part of this job I care about most. If something I post saves someone a year of guessing, we both win.",
      },
    ],
  },

  // ── ABOUT ───────────────────────────────────────────────────────────────
  about: {
    kicker: "About",
    heading: "A little more about me.",
    bio: [
      "I'm a marketing strategist with 5+ years in branding, storytelling, and digital strategy for tech companies. I'm the founder of Marketics.biz, Marketing Manager at Prepia, and a PhD candidate researching the intersection of brand and behaviour.",
      "On LinkedIn, I'm a top 1% creator in Serbia with 25,000+ followers and roughly 150,000 weekly impressions — but the number I care about most is how often someone messages me to say \"this is what I needed to read today.\"",
      "I'd rather tell a founder the uncomfortable truth than the polished version. I think good strategy is mostly good questions. And I think marketing that educates, challenges, and respects its audience will always beat marketing that shouts.",
    ],
    focus: ["Marketing strategy", "Brand storytelling", "LinkedIn & content"],
    causes: ["Women in tech & STEM", "Education for everyone", "Ethical marketing"],
  },

  // ── SERVICES / WHAT I DO ────────────────────────────────────────────────
  services: {
    kicker: "What I do",
    heading: "Ways we can work together.",
    intro:
      "Most of my time goes into Prepia and Marketics. Outside of that, here's where I can help.",
    items: [
      {
        title: "Strategy consulting",
        description:
          "One-on-one or team sessions on content strategy, brand positioning, LinkedIn growth, and go-to-market for startups and tech founders.",
      },
      {
        title: "Brand partnerships",
        description:
          "Sponsored content, content series, and long-term partnerships with companies whose work I genuinely believe in. I say no more often than yes.",
      },
      {
        title: "Speaking & workshops",
        description:
          "Keynotes, panels, and hands-on workshops on marketing strategy, personal branding, LinkedIn, and women in tech.",
      },
      {
        title: "Fractional & advisory",
        description:
          "A limited number of advisory engagements each year for founders who want a strategist in the room without hiring a full-time one.",
      },
    ],
  },

  // ── SELECTED WORK / CASE STUDIES ────────────────────────────────────────
  work: {
    kicker: "Selected work",
    heading: "A few projects I'm proud of.",
    intro:
      "Snapshots from client work at Marketics and elsewhere. More on request.",
    // TODO: replace placeholder client names and add real links / logos
    items: [
      {
        role: "Content strategy · B2B SaaS",
        title: "SaaS startup LinkedIn launch",
        metric: "300%",
        metricLabel: "increase in followers",
        description:
          "Built and ran a three-month content strategy that grew a B2B SaaS startup's LinkedIn following from 500 to 2,000+ with a 12% engagement rate. We stopped guessing and started writing for one specific buyer.",
        tags: ["Content strategy", "LinkedIn growth"],
        link: "#", // TODO: link to full case study or client site
      },
      {
        role: "Sponsored series · Enterprise tech",
        title: "Brand awareness campaign",
        metric: "2M+",
        metricLabel: "total impressions",
        description:
          "Led a multi-post sponsored campaign that generated over 2 million impressions and 15,000+ engagements for an enterprise tech brand. The trick wasn't reach — it was writing posts that sounded like a person, not a press release.",
        tags: ["Sponsored content", "Brand partnership"],
        link: "#",
      },
      {
        role: "Newsletter · Marketing community",
        title: "Newsletter growth from zero",
        metric: "197",
        metricLabel: "subscribers in 3 months",
        description:
          "Launched and grew a weekly marketing newsletter from zero to ~200 subscribers with a well-above-average open rate in the first quarter. Built on the same premise as my LinkedIn: teach, don't sell.",
        tags: ["Newsletter", "Community"],
        link: "#",
      },
    ],
  },

  // ── EVENTS ──────────────────────────────────────────────────────────────
  // TODO: Fill in real events. The shape is stable — add/remove items as needed.
  events: {
    kicker: "Events",
    heading: "Where I've been, and where I'm going.",
    intro:
      "A running list of talks, panels, and conferences. If you'd like me at your event, drop me a line.",
    upcoming: [
      // TODO: add confirmed upcoming appearances
      {
        date: "TBA 2026",
        title: "[Upcoming event title]",
        role: "Speaker",
        location: "[City, Country]",
        link: "#",
      },
    ],
    attended: [
      // TODO: replace placeholders with real past events
      {
        date: "2024",
        title: "TechConnect Serbia — Building a personal brand in tech",
        role: "Speaker",
        location: "Belgrade, Serbia",
        link: "#",
      },
      {
        date: "2024",
        title: "Marketing Today — The future of B2B marketing on LinkedIn",
        role: "Podcast guest",
        location: "Remote",
        link: "#",
      },
      {
        date: "2023",
        title: "Startup Grind — Content that converts: LinkedIn strategies",
        role: "Webinar host",
        location: "Remote",
        link: "#",
      },
      {
        date: "2023",
        title: "Forbes Serbia — Women reshaping digital marketing",
        role: "Featured",
        location: "Belgrade, Serbia",
        link: "#",
      },
    ],
  },

  // ── CONTACT ─────────────────────────────────────────────────────────────
  contact: {
    kicker: "Contact",
    heading: "Let's talk.",
    intro:
      "Brand collaborations, speaking invites, advisory chats, or just a thoughtful email — I read every one.",
    email: "balabanmilica28@gmail.com",
    linkedin: "https://linkedin.com/in/milicabalaban",
    website: "https://www.marketics.biz",
    availability: "Currently open for partnerships and speaking in 2026.",
    responseTime: "I usually reply within a day or two.",
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────
  footer: {
    copyright: `© ${new Date().getFullYear()} Milica Balaban`,
    tagline: "Marketing strategist, founder, PhD candidate. Belgrade.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/milicabalaban" },
      { label: "Marketics", href: "https://www.marketics.biz" },
      { label: "Email", href: "mailto:balabanmilica28@gmail.com" },
    ],
  },
};
