import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export function Timeline({ children }) {
  return <div className="timeline">{children}</div>
}

export function TimelineItem({ badge, current = false, delay = 0, children }) {
  return (
    <Reveal className={`timeline-item ${current ? 'timeline-item-current' : ''}`.trim()} delay={delay}>
      <div className={`timeline-badge ${current ? 'timeline-badge-current' : ''}`.trim()}>{badge}</div>
      <div className="timeline-content">{children}</div>
    </Reveal>
  )
}

export function TimelineMore({ to, delay = 0, children }) {
  return (
    <Reveal className="timeline-item timeline-item-more" delay={delay}>
      <Link to={to} className="timeline-more-link">
        {children}
      </Link>
    </Reveal>
  )
}
