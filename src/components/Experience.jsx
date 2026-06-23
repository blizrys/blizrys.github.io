import { EXPERIENCE, EDUCATION } from '../data/portfolio'

// Company-level meta for grouped entries (multiple roles at one company)
const COMPANY_META = {
  'DHL Supply Chain': { subHeader: 'Senior Business Analyst · Applied Data Analytics · Melbourne, VIC' },
  'ExxonMobil':       { subHeader: '5 years 9 months · Thailand' },
}

function Bullets({ items, small }) {
  return (
    <ul className={small ? 'space-y-1.5' : 'mt-3 space-y-2'}>
      {items.map((b, i) => (
        <li key={i} className={`text-ocean-muted flex gap-2 leading-relaxed ${small ? 'text-xs' : 'text-sm gap-3'}`}>
          <span className="text-ocean-coral mt-0.5 flex-shrink-0">▹</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

function SingleCard({ company, role, focus, period, location, bullets, isLast }) {
  return (
    <div className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-8'}`}>
      <div className="absolute left-0 top-2 bottom-0 w-px bg-ocean-border" />
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-ocean-surface border-2 border-ocean-surface shadow-[0_0_10px_#0ea5e9]" />

      <div className="ocean-card p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <p className="text-ocean-surface font-semibold text-base">{company}</p>
            <p className="text-white text-sm font-medium mt-0.5">{role}</p>
            {focus && <p className="text-ocean-muted text-xs mt-0.5">{focus}</p>}
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xs text-ocean-muted bg-ocean-abyss px-2.5 py-1 rounded-full border border-ocean-border whitespace-nowrap">
              {period}
            </span>
            {location && <p className="text-ocean-muted text-xs mt-1">{location}</p>}
          </div>
        </div>
        <Bullets items={bullets} />
      </div>
    </div>
  )
}

function CompanyGroup({ company, entries, isLast }) {
  const meta = COMPANY_META[company] || {}
  return (
    <div className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-8'}`}>
      <div className="absolute left-0 top-2 bottom-0 w-px bg-ocean-border" />
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-ocean-surface border-2 border-ocean-surface shadow-[0_0_10px_#0ea5e9]" />

      {/* Company banner */}
      <div className="mb-3">
        <p className="text-ocean-surface font-semibold text-base">{company}</p>
        {meta.subHeader && <p className="text-ocean-muted text-xs">{meta.subHeader}</p>}
      </div>

      {/* Nested roles */}
      <div className="space-y-4 pl-4 border-l border-ocean-border/40">
        {entries.map((exp) => (
          <div key={exp.role + exp.period} className="relative pl-5">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-ocean-deep border border-ocean-border" />
            <div className="ocean-card p-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <p className="text-white text-sm font-medium">{exp.role}</p>
                  {exp.focus && <p className="text-ocean-muted text-xs mt-0.5">{exp.focus}</p>}
                </div>
                <span className="text-xs text-ocean-muted bg-ocean-abyss px-2 py-0.5 rounded-full border border-ocean-border whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <div className="mt-2">
                <Bullets items={exp.bullets} small />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Collapse the flat EXPERIENCE list into ordered groups, preserving order.
// Consecutive entries with the same company become one grouped block.
function buildGroups(list) {
  const groups = []
  for (const entry of list) {
    const last = groups[groups.length - 1]
    if (last && last.company === entry.company) {
      last.entries.push(entry)
    } else {
      groups.push({ company: entry.company, entries: [entry] })
    }
  }
  return groups
}

export default function Experience() {
  const groups = buildGroups(EXPERIENCE)

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
            {groups.map((group, i) => {
              const isLast = i === groups.length - 1
              if (group.entries.length > 1) {
                return <CompanyGroup key={group.company} company={group.company} entries={group.entries} isLast={isLast} />
              }
              return <SingleCard key={group.company + group.entries[0].role} {...group.entries[0]} isLast={isLast} />
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
