function subjectOf(degree) {
  const parts = degree.split(',')
  return parts.slice(1).join(',').trim()
}

export function getNeofetchFields(cv, lang) {
  const isDa = lang === 'da'
  const school = cv.education[0]
  const [master, bachelor] = school.programs
  const kernel = `BSc, ${subjectOf(bachelor.degree)}, MSc, ${subjectOf(master.degree)}`

  const job1 = cv.experience[0]
  const job2 = cv.experience[1]
  const job2Role = job2.group ? job2.roles[0] : job2
  const shell = `${job1.role} @ ${job1.company}, ${job2Role.role} @ ${job2.company}`

  return [
    { label: 'OS', value: cv.profile.location },
    { label: isDa ? 'Vært' : 'Host', value: school.school },
    { label: isDa ? 'Kerne' : 'Kernel', value: kernel },
    { label: 'Shell', value: shell },
    { label: isDa ? 'Oppetid' : 'Uptime', value: isDa ? `${cv.profile.age} år` : `${cv.profile.age} years` },
    {
      label: isDa ? 'Sprog' : 'Languages',
      value: isDa ? 'Dansk (modersmål), Engelsk (flydende)' : 'Danish (native), English (fluent)',
    },
    { label: isDa ? 'Tema' : 'Theme', value: isDa ? 'Terminal (naturligvis)' : 'Terminal (obviously)' },
  ]
}
