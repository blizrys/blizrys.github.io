import { useState, useEffect } from 'react'
import { PROJECTS } from '../data/portfolio'

function useStatus(url, enabled) {
  const [status, setStatus] = useState('checking') // 'checking' | 'online' | 'offline'

  useEffect(() => {
    if (!enabled) return
    let cancelled = false

    const check = async () => {
      try {
        await fetch(url, {
          mode: 'no-cors',
          signal: AbortSignal.timeout(8000),
          cache: 'no-store',
        })
        if (!cancelled) setStatus('online')
      } catch {
        if (!cancelled) setStatus('offline')
      }
    }

    check()
    return () => { cancelled = true }
  }, [url, enabled])

  return status
}

function StatusBadge({ url }) {
  const status = useStatus(url, true)

  const styles = {
    checking: { dot: 'bg-ocean-muted animate-pulse', label: 'Checking…', text: 'text-ocean-muted' },
    online:   { dot: 'bg-green-400',                 label: 'Live',       text: 'text-green-400' },
    offline:  { dot: 'bg-red-400',                   label: 'Offline',    text: 'text-red-400' },
  }

  const s = styles[status]

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`} />
      {s.label}
    </span>
  )
}

function ProjectCard({ title, description, tags, link, year, online }) {
  return (
    <div className="ocean-card p-6 flex flex-col gap-4 group">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs text-ocean-muted">{year}</span>
          <h3 className="text-white font-semibold text-lg mt-1">{title}</h3>
        </div>
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          {online && <StatusBadge url={link} />}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-ocean-abyss border border-ocean-border flex items-center justify-center
                         text-ocean-muted hover:border-ocean-surface hover:text-ocean-surface transition-all duration-200"
              aria-label={`Open ${title}`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <p className="text-ocean-muted text-sm leading-relaxed flex-1">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="ocean-tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const liveProjects    = PROJECTS.filter((p) => p.online)
  const archivedProjects = PROJECTS.filter((p) => !p.online)

  return (
    <section id="projects" className="py-28 px-6 bg-ocean-deep">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">Projects</h2>
          <div className="section-line" />
        </div>

        {/* Live projects */}
        {liveProjects.length > 0 && (
          <div className="mb-14">
            <p className="text-ocean-muted text-sm font-semibold uppercase tracking-widest mb-6">
              Currently online
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {liveProjects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        )}

        {/* Archived projects */}
        {archivedProjects.length > 0 && (
          <div>
            <p className="text-ocean-muted text-sm font-semibold uppercase tracking-widest mb-6">
              Archived
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {archivedProjects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
