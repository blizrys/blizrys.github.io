import { EXPERIENCE } from '../data/portfolio'

function ExpCard({ role, company, period, bullets }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-ocean-border" />
      <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-ocean-surface shadow-[0_0_10px_#0ea5e9]" />

      <div className="ocean-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="text-white font-semibold text-lg">{role}</h3>
            <p className="text-ocean-surface font-medium text-sm mt-0.5">{company}</p>
          </div>
          <span className="text-xs text-ocean-muted bg-ocean-abyss px-2.5 py-1 rounded-full border border-ocean-border">
            {period}
          </span>
        </div>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="text-ocean-muted text-sm flex gap-3 leading-relaxed">
              <span className="text-ocean-coral mt-1 flex-shrink-0">▹</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-ocean-abyss">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">Experience</h2>
          <div className="section-line" />
        </div>

        {EXPERIENCE.length > 0 ? (
          <div className="max-w-2xl">
            {EXPERIENCE.map((exp) => (
              <ExpCard key={exp.company + exp.period} {...exp} />
            ))}
          </div>
        ) : (
          <div className="ocean-card p-10 text-center max-w-md">
            <p className="text-ocean-muted text-sm">More coming soon — stay tuned.</p>
          </div>
        )}
      </div>
    </section>
  )
}
