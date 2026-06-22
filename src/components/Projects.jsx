import { PROJECTS } from '../data/portfolio'

function ProjectCard({ title, description, tags, link, year }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="ocean-card p-6 flex flex-col gap-4 group block"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs text-ocean-muted">{year}</span>
          <h3 className="text-white font-semibold text-lg mt-1 group-hover:text-ocean-foam transition-colors duration-200">
            {title}
          </h3>
        </div>
        <div className="w-8 h-8 rounded-lg bg-ocean-abyss border border-ocean-border flex items-center justify-center flex-shrink-0 group-hover:border-ocean-surface group-hover:text-ocean-surface transition-all duration-200 text-ocean-muted">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      <p className="text-ocean-muted text-sm leading-relaxed flex-1">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="ocean-tag">{tag}</span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-ocean-deep">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">Projects</h2>
          <div className="section-line" />
        </div>

        {PROJECTS.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        ) : (
          <p className="text-ocean-muted text-sm">More coming soon.</p>
        )}
      </div>
    </section>
  )
}
