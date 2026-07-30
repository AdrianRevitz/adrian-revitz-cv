import Reveal from './Reveal.jsx'

export function Timeline({ children }) {
  return <div className="timeline">{children}</div>
}

export function TimelineItem({ badge, current = false, delay = 0, children }) {
  return (
    <Reveal className="timeline-item" delay={delay}>
      <div className={`timeline-badge ${current ? 'timeline-badge-current' : ''}`}>{badge}</div>
      <div className="timeline-content">{children}</div>
    </Reveal>
  )
}
