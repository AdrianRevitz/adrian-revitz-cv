// Erfaringsposter har `start`/`end` ('YYYY-MM', `end: null` = nuværende);
// den viste periode, varighed, samlet tid og alder udledes af dem i
// src/utils/cvDates.js. Skriv dem ikke i hånden.

export const profile = {
  name: 'Adrian Wehmüller Revitz',
  shortName: 'Adrian W. Revitz',
  born: '2001-06',
  title: 'Digital innovation · CRM- og AI-automatisering',
  tagline: 'Forbinder forretning, data og teknologi.',
  location: 'København, Danmark',
  email: 'adrian.revitz@gmail.com',
  phone: '+45 50481906',
  linkedin: 'https://www.linkedin.com/in/adrianrevitz/',
  instagram: 'https://www.instagram.com/adrianrevitz/',
  instagramHandle: '@adrianrevitz',
  facebook: 'https://www.facebook.com/adrian.revitz/',
  facebookHandle: '@adrian.revitz',
  about: `Jeg arbejder der, hvor forretningsproblemer møder den teknologi, der
    løser dem. Hos Pinetree Venture Partners arbejder jeg sammen med mine
    kolleger på virksomhedens selvhostede CRM og automatiseringen omkring det,
    fra integrationer med AI-agenter til investorrapportering genereret direkte
    fra live data. Hos Semler IT har
    jeg arbejdet med IT-drift for Semler Gruppen siden 2022. Ved siden af læser
    jeg kandidaten i Digital Innovation & Management på IT-Universitetet i
    København, efter en bachelor i Global Business Informatics og et
    udvekslingssemester på City University of Hong Kong.`,
}

export const skills = [
  'Python',
  'TypeScript / JavaScript',
  'React',
  'SQL',
  'GraphQL',
  'CRM-udvikling og -administration',
  'AI-agenter & MCP',
  'AI-assisteret udvikling (Claude Code, Codex)',
  'Automatisering af workflows og rapporter',
  'Excel- og PowerPoint-automatisering',
  'Datavisualisering',
  'Git / GitHub & CI/CD',
  'Cloudflare Workers & Netlify',
  'Microsoft 365 & Azure AD',
  'IT-drift og support',
  'Forbedring af forretningsprocesser',
]

export const experience = [
  {
    company: 'Pinetree Venture Partners',
    badge: 'PVP',
    logo: '/logos/pinetree.png',
    role: 'Junioranalytiker',
    employment: 'Deltid',
    start: '2026-04',
    end: null,
    location: 'København, Danmark',
    description:
      'En del af teamet, der bygger virksomhedens CRM-platform og automatiseringen omkring den, med AI-assisteret udvikling af interne værktøjer, der erstatter manuelt arbejde.',
    bullets: [
      'Implementerede virksomhedens selvhostede open source-CRM (Twenty) sammen med kolleger',
      'Koblede CRM-systemet til AI-agenter via MCP og byggede workflows, opgørelser af seneste kontakt samt planlagte health checks med e-mailalarmer',
      'Automatiserede den kvartalsvise LP-rapportering: brandede Excel- og PowerPoint-rapporter genereret fra live CRM-data',
      'Byggede og deployede interne dashboards på Cloudflare Workers bag Cloudflare Access',
      'Udvikler med AI-kodeagenter (Claude Code, Codex) og versionsstyring i Git/GitHub',
    ],
    skills: ['Twenty CRM', 'MCP', 'TypeScript', 'Python', 'GraphQL', 'Cloudflare Workers', 'Rapportautomatisering'],
  },
  {
    company: 'Semler IT',
    badge: 'SI',
    logo: '/logos/semler.png',
    group: true,
    groupNote: 'Semler Gruppen',
    summary:
      'Semler IT driver den digitale udvikling i Semler Gruppen, en dansk bil- og landbrugsmaskinkoncern med en markedsandel på 26% af nyregistrerede personbiler.',
    roles: [
      {
        role: 'Studentermedhjælper',
        employment: 'Deltid',
        start: '2023-08',
        end: null,
        location: 'Brøndby, Danmark',
        description:
          'Deltidsstilling i IT-drift med support til medarbejdere og forhandlere på tværs af koncernen og ansvar for stabil drift af interne systemer.',
        bullets: [
          'IT-support på 1., 2. og 3. niveau samt brugeradministration',
          'Skrev vidensartikler til den interne vidensdatabase',
          'Klargøring af PC\'er og OS-udrulning (PXE), enhedsstyring via Intune',
          'Adgangsstyring med Azure AD og dynamiske grupper, scripting i PowerShell',
          'Bidrog til at standardisere og automatisere interne IT-processer',
        ],
        skills: ['Azure AD', 'Microsoft 365 Admin', 'Exchange', 'Intune', 'PowerShell', 'Zendesk', 'SharePoint'],
      },
      {
        role: 'IT-supporter',
        employment: 'Fuldtid',
        start: '2022-09',
        end: '2023-08',
        location: 'Brøndby, Danmark',
        description:
          'IT-support på fuld tid inden for Microsoft 365, Azure AD og IBM Notes, både i interne og forhandlerrettede IT-miljøer.',
        bullets: [
          'IT-support på 1. og 2. niveau til medarbejdere og forhandlere',
          'Brugeradministration i Azure AD, Exchange og IBM Notes',
          'Fejlfinding på hardware, netværk og klientmiljøer',
          'Klargøring og udrulning af hardware',
        ],
        skills: ['Microsoft 365', 'Azure AD', 'Exchange', 'IBM Notes', 'Zendesk', 'Hardwaresupport'],
      },
    ],
  },
  {
    company: 'Dansk Sundhedsteam',
    badge: 'DST',
    logo: '/logos/dst.png',
    role: 'Webudvikler',
    employment: 'Freelance',
    start: '2024-02',
    end: '2024-07',
    location: 'København, Danmark',
    description: 'Opbygning og udvikling af virksomhedens hjemmeside.',
    bullets: [],
    skills: ['Webudvikling'],
  },
  {
    company: 'Center for IT og Medicoteknologi',
    badge: 'CIMT',
    role: 'IT-supporter',
    employment: 'Kontrakt',
    start: '2022-05',
    end: '2022-06',
    location: 'København, Danmark',
    description: 'IT-support og vejledning i hospitalernes IT-systemer i Region Hovedstaden.',
    bullets: [
      'Fejlfinding på software og hardware for hospitalspersonale',
      'Brugeradministration og adgangsproblemer på tværs af hospitalssystemer',
    ],
    skills: ['IT-support', 'Brugeradministration', 'Sundheds-IT'],
  },
  {
    company: 'Danish Patient Safety Authority',
    badge: 'DPSA',
    logo: '/logos/dpsa.png',
    role: 'Smitteopsporingsrådgiver',
    employment: 'Fuldtid',
    start: '2020-12',
    end: '2022-01',
    location: 'København, Danmark',
    description: 'En del af den nationale COVID-19-smitteopsporing i Styrelsen for Patientsikkerhed.',
    bullets: [
      'Rådgav borgere og sundhedspersonale om gældende COVID-19-retningslinjer for at bryde smittekæder',
      'Indsamlede og strukturerede data om smittekæder for at understøtte en effektiv smitteopsporing',
    ],
    skills: ['Rådgivning', 'Dataindsamling', 'Offentlig sektor'],
  },
  {
    company: 'Coop Denmark',
    badge: 'COOP',
    logo: '/logos/coop.png',
    group: true,
    groupNote: 'Deltid',
    roles: [
      {
        role: 'Vagtleder / Lukkeansvarlig',
        employment: 'Deltid',
        start: '2019-08',
        end: '2020-12',
        location: 'København, Danmark',
        description:
          'Ansvarlig for driften af butikken ved aften- og weekendlukning, oplæring af personale og kasseafstemning.',
        bullets: [],
        skills: ['Ledelse', 'Oplæring', 'Kasseafstemning'],
      },
      {
        role: 'Serviceassistent',
        employment: 'Deltid',
        start: '2018-10',
        end: '2019-07',
        location: 'København, Danmark',
        description: '',
        bullets: [],
        skills: ['Kundeservice'],
      },
    ],
  },
  {
    company: 'Føtex',
    badge: 'FTX',
    logo: '/logos/foetex.png',
    role: 'Ung medarbejder',
    employment: 'Deltid',
    start: '2016-09',
    end: '2017-08',
    location: 'København, Danmark',
    description: 'Kundeservice i en butik i Salling Group.',
    bullets: [],
    skills: ['Kundeservice'],
  },
]

export const education = [
  {
    school: 'IT University of Copenhagen',
    badge: 'ITU',
    logo: '/logos/itu.png',
    location: 'København, Danmark',
    group: true,
    programs: [
      {
        degree: 'Kandidatuddannelse (MSc), Digital Innovation & Management',
        period: 'Aug 2026 - Jun 2028',
        status: 'current',
        description:
          'Hvordan organisationer innoverer med digital teknologi: procesinnovation, digital transformation og ledelse af teknologi og data, med fokus på datadreven beslutningstagning.',
        skills: [],
      },
      {
        degree: 'Bacheloruddannelse (BSc), Global Business Informatics',
        period: 'Aug 2023 - Jul 2026',
        status: 'completed',
        description:
          'Samspillet mellem forretning, IT, data og programmering: analyse af forretningsprocesser, informationssystemer, datahåndtering og softwareudvikling, med fokus på digital transformation og organisatorisk effektivitet. Bachelorprojektet blev udført i samarbejde med Pinetree Venture Partners.',
        skills: ['Analyse af forretningsprocesser', 'Informationssystemer', 'Datahåndtering', 'Programmering', 'Digital transformation'],
      },
    ],
  },
  {
    school: 'City University of Hong Kong',
    badge: 'CityU',
    logo: '/logos/cityu.png',
    location: 'Hongkong S.A.R., Kina',
    degree: 'Udvekslingssemester, College of Business',
    period: 'Aug 2025 - Jan 2026',
    status: 'completed',
    description:
      'Udvekslingssemester på College of Business med fag inden for Business Intelligence and Analytics, Operations Management og Information Management.',
    skills: ['Business intelligence', 'Analytics', 'Operations management', 'Information management'],
  },
  {
    school: 'Nørre Gymnasium',
    badge: 'NG',
    logo: '/logos/norreg.png',
    location: 'København, Danmark',
    degree: 'Studentereksamen (STX), Matematik A, Samfundsfag A, Mediefag B',
    period: '2017 - 2020',
    status: 'completed',
    description: '',
    skills: [],
  },
]

export const projects = [
  {
    name: 'CRM- og investorrapportering',
    context: 'Pinetree Venture Partners',
    description:
      'Bygget sammen med kolleger: et selvhostet open source-CRM som omdrejningspunkt for virksomhedens investorrelationer, med AI-agenter og automatiseret rapportering ovenpå.',
    bullets: [
      'Selvhostet Twenty CRM med egne workflows og opgørelser af seneste kontakt',
      'MCP-integration, så AI-agenter kan læse og opdatere CRM-data',
      'Planlagte health checks med e-mailalarmer (Resend), adgang sikret med Cloudflare Access',
      'Kvartalsvise LP-rapporter genereret som brandede Excel- og PowerPoint-filer fra live CRM-data',
      'Interne dashboards deployet på Cloudflare Workers',
    ],
    tech: ['Twenty', 'TypeScript', 'GraphQL', 'Python', 'MCP', 'Cloudflare Workers'],
  },
  {
    name: 'Personlig AI-assistent',
    context: 'Sideprojekt',
    description:
      'En "second brain" bygget på Claude Code: en assistent, der husker kontekst på tværs af sessioner og holder øje med mail og kalender, videreudviklet fra et open source-udgangspunkt.',
    bullets: [
      'Vedvarende hukommelse i markdown med hybrid søgning på nøgleord og betydning (SQLite + lokale embeddings)',
      'Læseadgang til Gmail, Google Drive og iCloud Kalender; mails bliver kun kladder, aldrig sendt',
      'Planlagt "heartbeat", der gennemgår ny aktivitet og fremhæver deadlines',
      'Sikkerhedshooks, der blokerer hemmeligheder og risikable kommandoer',
    ],
    tech: ['Python', 'Claude Code', 'SQLite', 'Embeddings', 'OAuth'],
  },
  {
    name: 'adrianrevitz.dk',
    context: 'Denne hjemmeside',
    description: 'Et tosproget CV-site med et terminal-twist, bygget så både mennesker og maskiner kan læse det.',
    bullets: [
      'Alle sider prærenderes til statisk HTML med React SSR, så crawlere uden JavaScript ser det rigtige indhold',
      'Engelsk og dansk, lyst og mørkt tema, interaktiv terminal',
      'Strukturerede data, genereret sitemap og Open Graph-billede',
      'WebMCP-værktøjer og markdown-content negotiation til AI-agenter',
    ],
    tech: ['React', 'Vite', 'Netlify', 'SSR'],
    link: { label: 'GitHub', href: 'https://github.com/AdrianRevitz/adrian-revitz-cv' },
  },
  {
    name: 'E-paper-afgangstavle',
    context: 'Open source-bidrag',
    description:
      'En strømbesparende skærm, der viser live bus- og togafgange fra Rejseplanens API, i samme stil som en dansk busstoppesteds-tavle.',
    bullets: ['Tilføjede firmware til CrowPanel 4.2" e-paper-skærmen i et eksisterende ESP32-projekt'],
    tech: ['ESP32', 'Arduino / C++', 'REST API'],
    link: { label: 'GitHub', href: 'https://github.com/AdrianRevitz/DepartureTimeDisplayDenmark' },
  },
]
