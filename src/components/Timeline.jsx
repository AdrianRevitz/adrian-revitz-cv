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

export function TimelineMore({ count, delay = 0 }) {
  return (
    <Reveal className="timeline-item timeline-item-more" delay={delay}>
      <div className="timeline-badge timeline-badge-more">⋯</div>
      <div className="timeline-content">
        <p className="timeline-note">
          +{count} earlier role{count === 1 ? '' : 's'} — see full experience for details
        </p>
      </div>
    </Reveal>
  )
}
