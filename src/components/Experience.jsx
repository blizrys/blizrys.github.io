import { EXPERIENCE, EDUCATION } from '../data/portfolio'

const EXXON_COMPANIES = ['ExxonMobil']

function ExpCard({ company, role, period, location, bullets, subHeader, isGrouped, isLast }) {
  return (
    <div className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-8'}`}>
      {/* Timeline line */}
      <div className={`absolute left-0 top-2 bottom-0 w-px ${isGrouped ? 'bg-ocean-border/40' : 'bg-ocean-border'}`} />
      {/* Dot */}
      <div className={`absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full border-2 ${
        isGrouped
          ? 'bg-ocean-deep border-ocean-border'
          : 'bg-ocean-surface border-ocean-surface shadow-[0_0_10px_#0ea5e9]'
      }`} />

      <div className="ocean-card p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            {!isGrouped && (
              <p className="text-ocean-surface font-semibold text-base">{company}</p>
            )}
            <p className={`font-medium ${isGrouped ? 'text-white text-sm' : 'text-white text-sm mt-0.5'}`}>{role}</p>
            {subHeader && (
              <p className="text-ocean-muted text-xs mt-0.5">{subHeader}</p>
            )}
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xs text-ocean-muted bg-ocean-abyss px-2.5 py-1 rounded-full border border-ocean-border whitespace-nowrap">
              {period}
            </span>
            {location && (
              <p className="text-ocean-muted text-xs mt-1">{location}</p>
            )}
          </div>
        </div>
        <ul className="mt-3 space-y-2">
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

function ExxonGroup({ entries }) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Outer timeline */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-ocean-border" />
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-ocean-surface border-2 border-ocean-surface shadow-[0_0_10px_#0ea5e9]" />

      {/* Company banner */}
      <div className="mb-3">
        <p className="text-ocean-surface font-semibold text-base">ExxonMobil</p>
        <p className="text-ocean-muted text-xs">5 years 9 months · Thailand</p>
      </div>

      {/* Nested roles */}
      <div className="space-y-4 pl-4 border-l border-ocean-border/40">
        {entries.map((exp, i) => (
          <div key={exp.role} className="relative pl-5">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-ocean-deep border border-ocean-border" />
            <div className="ocean-card p-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <p className="text-white text-sm font-medium">{exp.role}</p>
                <span className="text-xs text-ocean-muted bg-ocean-abyss px-2 py-0.5 rounded-full border border-ocean-border whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-ocean-muted text-xs flex gap-2 leading-relaxed">
                    <span className="text-ocean-coral mt-0.5 flex-shrink-0">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const exxonEntries = EXPERIENCE.filter((e) => e.company === 'ExxonMobil')
  const otherEntries = EXPERIENCE.filter((e) => e.company !== 'ExxonMobil')

  // Insert ExxonMobil group in the right position (after Fortis Security)
  const fortisIdx = otherEntries.findIndex((e) => e.company === 'Fortis Security')
  const before = otherEntries.slice(0, fortisIdx + 1)
  const after  = otherEntries.slice(fortisIdx + 1)
  const allEntries = [...before, '__exxon__', ...after]

  return (
    <section id="experience" className="py-28 px-6 bg-ocean-abyss">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">Experience</h2>
          <div className="section-line" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Timeline */}
          <div className="lg:col-span-2 space-y-0">
            {allEntries.map((entry, i) => {
              if (entry === '__exxon__') {
                return <ExxonGroup key="exxon" entries={exxonEntries} />
              }
              return (
                <ExpCard
                  key={entry.company + entry.role}
                  {...entry}
                  isLast={i === allEntries.length - 1}
                />
              )
            })}
          </div>

          {/* Education sidebar */}
          <div className="space-y-8">
            <div>
              <p className="text-ocean-muted text-xs font-semibold uppercase tracking-widest mb-5">Education</p>
              <div className="space-y-5">
                {EDUCATION.map(({ institution, degree, period, note }) => (
                  <div key={institution} className="ocean-card p-4">
                    <p className="text-white font-medium text-sm">{institution}</p>
                    <p className="text-ocean-surface text-xs mt-0.5">{degree}</p>
                    {period && <p className="text-ocean-muted text-xs mt-0.5">{period}</p>}
                    {note && <p className="text-ocean-muted text-xs mt-1 italic">{note}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-ocean-muted text-xs font-semibold uppercase tracking-widest mb-4">Certifications</p>
              <div className="space-y-2">
                {['Security Center — Omnicast Technical', 'Security Center — Synergis Technical'].map((cert) => (
                  <div key={cert} className="flex gap-2 items-start">
                    <span className="text-ocean-coral text-xs mt-0.5 flex-shrink-0">▹</span>
                    <p className="text-ocean-muted text-xs leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
