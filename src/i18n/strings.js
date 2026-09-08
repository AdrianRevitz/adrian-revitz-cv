export const strings = {
  en: {
    navHome: 'home',
    navExperience: 'experience',
    navEducation: 'education',
    navPhotography: 'photography',
    navMusic: 'music',
    navContact: 'contact',
    navMenuOpen: 'Open menu',
    navMenuClose: 'Close menu',


    headingExperience: 'Experience',
    headingEducation: 'Education',
    headingSkills: 'Skills',
    headingContact: 'Contact',
    headingPhotography: 'Photography',
    headingMusic: 'Music',
    headingSystemInfo: 'System info',

    btnGetInTouch: 'Get in touch',
    btnReadFullExperience: 'Read full experience',
    btnReadFullEducation: 'Read full education',

    contactIntro: 'Email is the surest way to reach me. I answer within a day or two.',
    labelElsewhere: 'Elsewhere',
    labelEmail: 'Email',
    labelPhone: 'Phone',
    labelLocation: 'Location',
    labelLinkedIn: 'LinkedIn',
    labelInstagram: 'Instagram',
    labelFacebook: 'Facebook',
    viewProfile: 'Open LinkedIn',

    tripKicker: 'Exchange semester, Aug 2025 – Jan 2026',
    tripTitle: 'Hong Kong & East Asia',
    tripCopy:
      'Shots from my exchange semester at City University of Hong Kong, taken while traveling around East Asia.',
    tripPhotosLabel: 'photos',

    photoLabelDate: 'Date',
    photoLabelCamera: 'Camera',
    photoLabelLens: 'Lens',
    photoLabelAperture: 'Aperture',
    photoLabelShutter: 'Shutter',
    photoLabelFocalLength: 'Focal length',
    photoAlt: (index, total, date) => `Travel photo ${index} of ${total} from Hong Kong & East Asia, taken ${date}`,
    photoClose: 'Close',
    photoPrev: 'Previous photo',
    photoNext: 'Next photo',

    musicIntro: "Some of the music I make, straight from Spotify.",

    footerBuiltWith: 'Built with React + Vite',

    skillsLabel: 'skills:',

    terminalWelcome: 'Welcome. Type a command, or pick one of the suggestions.',
    terminalHelpIntro: 'Available commands:',
    terminalNotFound: (cmd) => `command not found: ${cmd} — type 'help' for a list of commands`,
    terminalCommands: {
      help: 'show this list',
      whoami: 'about me',
      skills: 'list my skills',
      experience: 'go to the experience page',
      education: 'go to the education page',
      contact: 'show contact info',
      neofetch: 'system info, but for a human',
      'sudo hire-me': 'try it and see',
      clear: 'clear the terminal',
    },
    terminalHireMe: 'Permission granted. Redirecting you to the contact page…',
    terminalContactInfo: (email, phone) => `Email: ${email}\nPhone: ${phone}`,
    terminalPlaceholder: 'Type a command…',
    terminalInputLabel: 'Terminal input',
  },
  da: {
    navHome: 'hjem',
    navExperience: 'erfaring',
    navEducation: 'uddannelse',
    navPhotography: 'fotografi',
    navMusic: 'musik',
    navContact: 'kontakt',
    navMenuOpen: 'Åbn menu',
    navMenuClose: 'Luk menu',


    headingExperience: 'Erfaring',
    headingEducation: 'Uddannelse',
    headingSkills: 'Kompetencer',
    headingContact: 'Kontakt',
    headingPhotography: 'Fotografi',
    headingMusic: 'Musik',
    headingSystemInfo: 'Systeminfo',

    btnGetInTouch: 'Kontakt mig',
    btnReadFullExperience: 'Se fuld erfaring',
    btnReadFullEducation: 'Se fuld uddannelse',

    contactIntro: 'E-mail er den sikreste vej til mig. Jeg svarer inden for en dag eller to.',
    labelElsewhere: 'Andre steder',
    labelEmail: 'E-mail',
    labelPhone: 'Telefon',
    labelLocation: 'Placering',
    labelLinkedIn: 'LinkedIn',
    labelInstagram: 'Instagram',
    labelFacebook: 'Facebook',
    viewProfile: 'Åbn LinkedIn',

    tripKicker: 'Udvekslingssemester, aug 2025 – jan 2026',
    tripTitle: 'Hong Kong & Østasien',
    tripCopy:
      'Billeder fra mit udvekslingssemester på City University of Hong Kong, taget mens jeg rejste rundt i Østasien.',
    tripPhotosLabel: 'billeder',

    photoLabelDate: 'Dato',
    photoLabelCamera: 'Kamera',
    photoLabelLens: 'Objektiv',
    photoLabelAperture: 'Blænde',
    photoLabelShutter: 'Lukkertid',
    photoLabelFocalLength: 'Brændvidde',
    photoAlt: (index, total, date) => `Rejsebillede ${index} af ${total} fra Hong Kong & Østasien, taget ${date}`,
    photoClose: 'Luk',
    photoPrev: 'Forrige billede',
    photoNext: 'Næste billede',

    musicIntro: 'Noget af den musik, jeg laver, direkte fra Spotify.',

    footerBuiltWith: 'Bygget med React + Vite',

    skillsLabel: 'kompetencer:',

    terminalWelcome: 'Velkommen. Skriv en kommando, eller vælg et af forslagene.',
    terminalHelpIntro: 'Tilgængelige kommandoer:',
    terminalNotFound: (cmd) => `kommando ikke fundet: ${cmd} — skriv 'help' for en liste over kommandoer`,
    terminalCommands: {
      help: 'vis denne liste',
      whoami: 'om mig',
      skills: 'list mine kompetencer',
      experience: 'gå til erfaring-siden',
      education: 'gå til uddannelse-siden',
      contact: 'vis kontaktinfo',
      neofetch: 'systeminfo, men for et menneske',
      'sudo hire-me': 'prøv det og se',
      clear: 'ryd terminalen',
    },
    terminalHireMe: 'Adgang givet. Omdirigerer til kontaktsiden…',
    terminalContactInfo: (email, phone) => `E-mail: ${email}\nTelefon: ${phone}`,
    terminalPlaceholder: 'Skriv en kommando…',
    terminalInputLabel: 'Terminal-input',
  },
}

export function createTranslator(lang) {
  return function t(key) {
    return strings[lang]?.[key] ?? strings.en[key]
  }
}
