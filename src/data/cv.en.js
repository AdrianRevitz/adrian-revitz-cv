// Experience entries carry `start`/`end` ('YYYY-MM', `end: null` = current);
// the displayed period, duration, group total and age are derived from them
// by src/utils/cvDates.js. Don't hand-write those.

export const profile = {
  name: 'Adrian Wehmüller Revitz',
  shortName: 'Adrian W. Revitz',
  born: '2001-06',
  title: 'Digital Innovation · CRM & AI Automation',
  tagline: 'Bridging business, data, and technology.',
  location: 'Copenhagen, Denmark',
  email: 'adrian.revitz@gmail.com',
  phone: '+45 50481906',
  linkedin: 'https://www.linkedin.com/in/adrianrevitz/',
  instagram: 'https://www.instagram.com/adrianrevitz/',
  instagramHandle: '@adrianrevitz',
  facebook: 'https://www.facebook.com/adrian.revitz/',
  facebookHandle: '@adrian.revitz',
  about: `I work where business problems meet the technology that solves them.
    At Pinetree Venture Partners I work with my colleagues on the firm's
    self-hosted CRM and the automation around it, from AI-agent integrations to
    investor reporting generated straight from live data. At Semler IT I have worked in IT
    operations for Semler Gruppen since 2022. Alongside both, I am taking an MSc
    in Digital Innovation & Management at the IT University of Copenhagen, after
    a BSc in Global Business Informatics and an exchange semester at City
    University of Hong Kong.`,
}

export const skills = [
  'Python',
  'TypeScript / JavaScript',
  'React',
  'SQL',
  'GraphQL',
  'CRM Development & Administration',
  'AI Agents & MCP',
  'AI-Assisted Development (Claude Code, Codex)',
  'Workflow & Report Automation',
  'Excel & PowerPoint Automation',
  'Data Visualization',
  'Git / GitHub & CI/CD',
  'Cloudflare Workers & Netlify',
  'Microsoft 365 & Azure AD',
  'IT Operations & Support',
  'Business Process Improvement',
]

export const experience = [
  {
    company: 'Pinetree Venture Partners',
    badge: 'PVP',
    logo: '/logos/pinetree.png',
    role: 'Junior Analyst',
    employment: 'Part-time',
    start: '2026-04',
    end: null,
    location: 'Copenhagen, Denmark',
    description:
      "Part of the team building the firm's CRM platform and the automation around it, using AI-assisted development to create internal tools that replace manual work.",
    bullets: [
      "Implemented the firm's self-hosted, open-source CRM (Twenty) together with colleagues",
      'Connected the CRM to AI agents over MCP, and built custom workflows, contact-recency rollups and scheduled health checks with email alerting',
      'Automated quarterly LP reporting: branded Excel and PowerPoint reports generated from live CRM data',
      'Built and deployed internal dashboards on Cloudflare Workers behind Cloudflare Access',
      'Develop with AI coding agents (Claude Code, Codex) and Git/GitHub-based version control',
    ],
    skills: ['Twenty CRM', 'MCP', 'TypeScript', 'Python', 'GraphQL', 'Cloudflare Workers', 'Report automation'],
  },
  {
    company: 'Semler IT',
    badge: 'SI',
    logo: '/logos/semler.png',
    group: true,
    groupNote: 'Semler Gruppen',
    summary:
      'Semler IT drives the digital development of Semler Gruppen, a Danish automotive and agricultural-machinery group with a 26% share of newly registered passenger cars.',
    roles: [
      {
        role: 'Student Assistant',
        employment: 'Part-time',
        start: '2023-08',
        end: null,
        location: 'Brøndby, Denmark',
        description:
          'Part-time role in IT operations, supporting employees and retailers across the group and keeping internal systems running.',
        bullets: [
          '1st, 2nd and 3rd level IT support and user administration',
          'Wrote knowledge articles for the internal knowledge base',
          'PC preparation and OS deployment (PXE), device management via Intune',
          'Access management with Azure AD and dynamic groups, scripting with PowerShell',
          'Contributed to standardizing and automating internal IT processes',
        ],
        skills: ['Azure AD', 'Microsoft 365 Admin', 'Exchange', 'Intune', 'PowerShell', 'Zendesk', 'SharePoint'],
      },
      {
        role: 'IT Supporter',
        employment: 'Full-time',
        start: '2022-09',
        end: '2023-08',
        location: 'Brøndby, Denmark',
        description:
          'Full-time IT support across Microsoft 365, Azure AD and IBM Notes for both internal and retailer-facing IT environments.',
        bullets: [
          '1st and 2nd level IT support for employees and retailers',
          'User administration in Azure AD, Exchange and IBM Notes',
          'Troubleshooting hardware, network and client environments',
          'Hardware preparation and deployment',
        ],
        skills: ['Microsoft 365', 'Azure AD', 'Exchange', 'IBM Notes', 'Zendesk', 'Hardware support'],
      },
    ],
  },
  {
    company: 'Dansk Sundhedsteam',
    badge: 'DST',
    logo: '/logos/dst.png',
    role: 'Web Developer',
    employment: 'Freelance',
    start: '2024-02',
    end: '2024-07',
    location: 'Copenhagen, Denmark',
    description: "Built and developed the company's website.",
    bullets: [],
    skills: ['Web development'],
  },
  {
    company: 'Center for IT og Medicoteknologi',
    badge: 'CIMT',
    role: 'IT Supporter',
    employment: 'Contract',
    start: '2022-05',
    end: '2022-06',
    location: 'Copenhagen, Denmark',
    description:
      'IT support and guidance for hospital IT systems in the Capital Region of Denmark (Region Hovedstaden).',
    bullets: [
      'Troubleshooting software and hardware issues for hospital staff',
      'User administration and access issues across hospital systems',
    ],
    skills: ['IT support', 'User administration', 'Healthcare IT'],
  },
  {
    company: 'Danish Patient Safety Authority',
    badge: 'DPSA',
    logo: '/logos/dpsa.png',
    role: 'Contact Tracing Advisor',
    employment: 'Full-time',
    start: '2020-12',
    end: '2022-01',
    location: 'Copenhagen, Denmark',
    description:
      'Part of the national COVID-19 contact tracing effort (Styrelsen for Patientsikkerhed).',
    bullets: [
      'Advised citizens and healthcare professionals on current COVID-19 guidelines to break chains of infection',
      'Collected and structured data on chains of infection to support effective contact tracing',
    ],
    skills: ['Advisory', 'Data collection', 'Public sector'],
  },
  {
    company: 'Coop Denmark',
    badge: 'COOP',
    logo: '/logos/coop.png',
    group: true,
    groupNote: 'Part-time',
    roles: [
      {
        role: 'Shift Leader / Closing Manager',
        employment: 'Part-time',
        start: '2019-08',
        end: '2020-12',
        location: 'Copenhagen, Denmark',
        description:
          'Responsible for running the store during evening and weekend closings, training staff and reconciling the tills.',
        bullets: [],
        skills: ['Leadership', 'Staff training', 'Cash management'],
      },
      {
        role: 'Service Employee',
        employment: 'Part-time',
        start: '2018-10',
        end: '2019-07',
        location: 'Copenhagen, Denmark',
        description: '',
        bullets: [],
        skills: ['Customer service'],
      },
    ],
  },
  {
    company: 'Føtex',
    badge: 'FTX',
    logo: '/logos/foetex.png',
    role: 'Young Worker',
    employment: 'Part-time',
    start: '2016-09',
    end: '2017-08',
    location: 'Copenhagen, Denmark',
    description: 'Customer service in a Salling Group store.',
    bullets: [],
    skills: ['Customer service'],
  },
]

export const education = [
  {
    school: 'IT University of Copenhagen',
    badge: 'ITU',
    logo: '/logos/itu.png',
    location: 'Copenhagen, Denmark',
    group: true,
    programs: [
      {
        degree: 'Master of Science, Digital Innovation & Management',
        period: 'Aug 2026 - Jun 2028',
        status: 'current',
        description:
          'How organizations innovate with digital technology: process innovation, digital transformation, and the management of technology and data, with a focus on data-driven decision-making.',
        skills: [],
      },
      {
        degree: 'Bachelor of Science, Global Business Informatics',
        period: 'Aug 2023 - Jul 2026',
        status: 'completed',
        description:
          'The interplay between business, IT, data and programming: business process analysis, information systems, data management and software development, with a focus on digital transformation and organizational efficiency. Bachelor project carried out with Pinetree Venture Partners.',
        skills: ['Business process analysis', 'Information systems', 'Data management', 'Programming', 'Digital transformation'],
      },
    ],
  },
  {
    school: 'City University of Hong Kong',
    badge: 'CityU',
    logo: '/logos/cityu.png',
    location: 'Hong Kong S.A.R., China',
    degree: 'Exchange Semester, College of Business',
    period: 'Aug 2025 - Jan 2026',
    status: 'completed',
    description:
      'Exchange semester at the College of Business, with coursework in Business Intelligence and Analytics, Operations Management and Information Management.',
    skills: ['Business intelligence', 'Analytics', 'Operations management', 'Information management'],
  },
  {
    school: 'Nørre Gymnasium',
    badge: 'NG',
    logo: '/logos/norreg.png',
    location: 'Copenhagen, Denmark',
    degree: 'Upper Secondary School Diploma (STX), Mathematics A, Social Studies A, Media Studies B',
    period: '2017 - 2020',
    status: 'completed',
    description: '',
    skills: [],
  },
]

export const projects = [
  {
    name: 'CRM & investor-reporting automation',
    context: 'Pinetree Venture Partners',
    description:
      "Built with colleagues: a self-hosted open-source CRM as the hub of the firm's investor relations, with AI agents and automated reporting on top of it.",
    bullets: [
      'Self-hosted Twenty CRM with custom workflows and contact-recency rollups',
      'MCP integration so AI agents can read and update CRM records',
      'Scheduled health checks with email alerting (Resend), access secured with Cloudflare Access',
      'Quarterly LP reports generated as branded Excel and PowerPoint files from live CRM data',
      'Internal dashboards deployed on Cloudflare Workers',
    ],
    tech: ['Twenty', 'TypeScript', 'GraphQL', 'Python', 'MCP', 'Cloudflare Workers'],
  },
  {
    name: 'Personal AI assistant',
    context: 'Side project',
    description:
      'A "second brain" built on Claude Code: an assistant that remembers context across sessions and keeps an eye on email and calendar, extended from an open-source starter.',
    bullets: [
      'Persistent markdown memory with hybrid keyword and semantic search (SQLite + local embeddings)',
      'Read-only Gmail, Google Drive and iCloud Calendar integrations; email is draft-only, never sent',
      'Scheduled heartbeat that reviews new activity and surfaces deadlines',
      'Safety hooks that block secrets and guard risky commands',
    ],
    tech: ['Python', 'Claude Code', 'SQLite', 'Embeddings', 'OAuth'],
  },
  {
    name: 'adrianrevitz.dk',
    context: 'This website',
    description:
      'A bilingual CV site with a terminal twist, built so that both people and machines can read it.',
    bullets: [
      'Every route prerendered to static HTML with React SSR, so crawlers without JavaScript see real content',
      'English and Danish, light and dark theme, interactive terminal',
      'Structured data, generated sitemap and Open Graph image',
      'WebMCP tools and markdown content negotiation for AI agents',
    ],
    tech: ['React', 'Vite', 'Netlify', 'SSR'],
    link: { label: 'GitHub', href: 'https://github.com/AdrianRevitz/adrian-revitz-cv' },
  },
  {
    name: 'E-paper departure display',
    context: 'Open-source contribution',
    description:
      'A low-power board that shows live bus and train departures from the Rejseplanen API, styled like a Danish bus-stop display.',
    bullets: ['Added firmware for the CrowPanel 4.2" e-paper display to an existing ESP32 project'],
    tech: ['ESP32', 'Arduino / C++', 'REST API'],
    link: { label: 'GitHub', href: 'https://github.com/AdrianRevitz/DepartureTimeDisplayDenmark' },
  },
]
