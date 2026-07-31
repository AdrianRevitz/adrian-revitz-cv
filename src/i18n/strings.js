export const strings = {
  en: {
    navHome: 'home',
    navExperience: 'experience',
    navEducation: 'education',
    navPhotography: 'photography',
    navMusic: 'music',
    navContact: 'contact',

    eyebrowWhoami: 'whoami',
    eyebrowCareerLog: 'career log',
    eyebrowBackground: 'background',
    eyebrowGallery: 'gallery',
    eyebrowNowPlaying: 'now playing',
    eyebrowReachOut: 'reach out',

    headingExperience: 'Experience',
    headingEducation: 'Education',
    headingSkills: 'Skills',
    headingContact: 'Contact',
    headingPhotography: 'Photography',
    headingMusic: 'Music',
    headingSystemInfo: 'System Info',

    btnGetInTouch: 'Get in touch',
    btnLinkedIn: 'LinkedIn ↗',
    btnReadFullExperience: 'Read full experience ↗',
    btnReadFullEducation: 'Read full education ↗',

    contactIntro: 'Feel free to reach out via email or phone, or connect on LinkedIn.',
    labelEmail: 'Email',
    labelPhone: 'Phone',
    labelLocation: 'Location',
    labelLinkedIn: 'LinkedIn',
    viewProfile: 'View profile ↗',

    tripKicker: 'exchange semester · sep–oct 2025',
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
    photoClose: 'Close',
    photoPrev: 'Previous photo',
    photoNext: 'Next photo',

    musicIntro: "Some of the music I make, straight from Spotify.",

    footerBuiltWith: 'Built with React + Vite',

    skillsLabel: 'skills:',

    terminalWelcome: "Welcome! Type 'help' to see available commands.",
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
  },
  da: {
    navHome: 'hjem',
    navExperience: 'erfaring',
    navEducation: 'uddannelse',
    navPhotography: 'fotografi',
    navMusic: 'musik',
    navContact: 'kontakt',

    eyebrowWhoami: 'whoami',
    eyebrowCareerLog: 'karriere-log',
    eyebrowBackground: 'baggrund',
    eyebrowGallery: 'galleri',
    eyebrowNowPlaying: 'spiller nu',
    eyebrowReachOut: 'sig hej',

    headingExperience: 'Erfaring',
    headingEducation: 'Uddannelse',
    headingSkills: 'Kompetencer',
    headingContact: 'Kontakt',
    headingPhotography: 'Fotografi',
    headingMusic: 'Musik',
    headingSystemInfo: 'Systeminfo',

    btnGetInTouch: 'Kontakt mig',
    btnLinkedIn: 'LinkedIn ↗',
    btnReadFullExperience: 'Se fuld erfaring ↗',
    btnReadFullEducation: 'Se fuld uddannelse ↗',

    contactIntro: 'Du er velkommen til at kontakte mig via e-mail eller telefon, eller connecte på LinkedIn.',
    labelEmail: 'E-mail',
    labelPhone: 'Telefon',
    labelLocation: 'Placering',
    labelLinkedIn: 'LinkedIn',
    viewProfile: 'Se profil ↗',

    tripKicker: 'udvekslingssemester · sep-okt 2025',
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
    photoClose: 'Luk',
    photoPrev: 'Forrige billede',
    photoNext: 'Næste billede',

    musicIntro: 'Noget af den musik, jeg laver, direkte fra Spotify.',

    footerBuiltWith: 'Bygget med React + Vite',

    skillsLabel: 'kompetencer:',

    terminalWelcome: "Velkommen! Skriv 'help' for at se de tilgængelige kommandoer.",
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
  },
}

export function createTranslator(lang) {
  return function t(key) {
    return strings[lang]?.[key] ?? strings.en[key]
  }
}
