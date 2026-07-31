export function getNeofetchFields(cv, lang) {
  const isDa = lang === 'da'
  const job = cv.experience[0]
  const school = cv.education[0]
  const degree = school.programs ? school.programs[0].degree : school.degree

  return [
    { label: 'OS', value: cv.profile.location },
    { label: isDa ? 'Vært' : 'Host', value: school.school },
    { label: isDa ? 'Kerne' : 'Kernel', value: degree },
    { label: 'Shell', value: `${job.role} @ ${job.company}` },
    { label: isDa ? 'Oppetid' : 'Uptime', value: isDa ? '5+ års erfaring i IT' : '5+ years in IT' },
    {
      label: isDa ? 'Sprog' : 'Languages',
      value: isDa ? 'Dansk (modersmål), Engelsk (flydende)' : 'Danish (native), English (fluent)',
    },
    { label: isDa ? 'Tema' : 'Theme', value: isDa ? 'Terminal (naturligvis)' : 'Terminal (obviously)' },
  ]
}
