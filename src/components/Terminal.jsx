import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getNeofetchFields } from '../data/neofetch.js'

export default function Terminal() {
  const { cv, lang, t } = useLanguage()
  const navigate = useNavigate()
  // The welcome line is stored as a marker and translated at render time, so
  // it follows the language once the stored preference is applied.
  const [lines, setLines] = useState([{ type: 'welcome' }])
  const [value, setValue] = useState('')
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  function print(text) {
    setLines((prev) => [...prev, { type: 'output', text }])
  }

  function handleCommand(raw) {
    const cmd = raw.trim()
    if (!cmd) return
    setLines((prev) => [...prev, { type: 'input', text: cmd }])
    const lower = cmd.toLowerCase()

    switch (lower) {
      case 'help': {
        const list = Object.entries(t('terminalCommands'))
          .map(([name, desc]) => `  ${name.padEnd(14)} ${desc}`)
          .join('\n')
        print(`${t('terminalHelpIntro')}\n${list}`)
        break
      }
      case 'whoami':
        print(cv.profile.about.replace(/\s+/g, ' ').trim())
        break
      case 'skills':
        print(cv.skills.join(', '))
        break
      case 'experience':
        print(lang === 'da' ? 'Åbner erfaring-siden…' : 'Opening the experience page…')
        navigate('/experience')
        break
      case 'projects':
        print(lang === 'da' ? 'Åbner projekt-siden…' : 'Opening the projects page…')
        navigate('/projects')
        break
      case 'education':
        print(lang === 'da' ? 'Åbner uddannelse-siden…' : 'Opening the education page…')
        navigate('/education')
        break
      case 'contact':
        print(t('terminalContactInfo')(cv.profile.email, cv.profile.phone))
        break
      case 'neofetch': {
        const fields = getNeofetchFields(cv, lang)
        print(fields.map((f) => `${f.label}: ${f.value}`).join('\n'))
        break
      }
      case 'sudo hire-me':
        print(t('terminalHireMe'))
        setTimeout(() => navigate('/contact'), 900)
        break
      case 'clear':
        setLines([])
        return
      default:
        print(t('terminalNotFound')(cmd))
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    handleCommand(value)
    setValue('')
  }

  return (
    <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-titlebar-label">guest@adrian-revitz: ~</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        <div role="log" aria-live="polite" aria-label={t('terminalOutputLabel')}>
          {lines.map((line, i) => (
            <pre className={`terminal-line terminal-line-${line.type === 'welcome' ? 'output' : line.type}`} key={i}>
              {line.type === 'input'
                ? `guest@adrian-revitz:~$ ${line.text}`
                : line.type === 'welcome'
                  ? t('terminalWelcome')
                  : line.text}
            </pre>
          ))}
        </div>
        <form className="terminal-input-row" onSubmit={onSubmit}>
          <span className="terminal-prompt" aria-hidden="true">guest@adrian-revitz:~$</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t('terminalPlaceholder')}
            autoComplete="off"
            spellCheck={false}
            aria-label={t('terminalInputLabel')}
          />
        </form>
      </div>
    </div>
  )
}
