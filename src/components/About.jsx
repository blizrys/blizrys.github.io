import { SKILLS, AWARDS, LANGUAGES, STATS, DUOLINGO_STREAK } from '../data/portfolio'

function getStreak() {
  const anchor = new Date(DUOLINGO_STREAK.anchorDate + 'T00:00:00')
  const today = new Date()
  const elapsed = Math.floor((today - anchor) / 86400000)
  return DUOLINGO_STREAK.anchorDays + Math.max(0, elapsed)
}

export default function About() {
  const streak = getStreak()
  return (
    <section id="about" className="py-28 px-6 bg-ocean-deep">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">About Me</h2>
          <div className="section-line" />
        </div>

        {/* At a glance */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-ocean-border rounded-xl overflow-hidden mb-16">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-ocean-deep px-5 py-6 text-center">
              <p className="text-ocean-surface font-bold text-3xl">{value}</p>
              <p className="text-ocean-muted text-xs mt-1.5 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Bio */}
          <div className="space-y-5 text-ocean-muted leading-relaxed text-base">
            <p className="text-ocean-text text-lg font-medium">
              I&apos;m <span className="text-white font-semibold">Jirarote Jirasirikul</span> — most people call me{' '}
              <span className="text-ocean-surface font-semibold">JJ</span>.
            </p>

            <p>
              My story starts with Robotics. In 2013 I competed at{' '}
              <span className="text-white font-medium">World RoboCup in the Netherlands</span> and{' '}
              <span className="text-white font-medium">RoboCup Japan Open in Tokyo</span> — and
              that curiosity for how things are built never left me.
            </p>

            <p>
              I spent nearly 6 years at{' '}
              <span className="text-white font-medium">ExxonMobil</span> in Thailand — growing from
              customer support analyst to Scrum Master and team lead. Then I pivoted:
              moved to Melbourne, completed a{' '}
              <span className="text-white font-medium">Master of Data Science at Monash University</span>,
              and built a new career across system engineering, data architecture and business analysis.
            </p>

            <p>
              Today I&apos;m a{' '}
              <span className="text-ocean-surface font-medium">Senior Business Analyst at DHL Supply Chain</span>{' '}
              — translating messy operational problems into clean data and system solutions.
              Outside of work, I&apos;m in the ocean, planning the next trip, or
              tinkering at my 3D printer — I just like making things with my hands.
            </p>

            <blockquote className="border-l-2 border-ocean-coral pl-4 italic text-ocean-muted text-sm">
              "I don't dare to say I know it all — but I dare to say I know how to Google."
            </blockquote>

            {/* Personality chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['🏄 Surfer', '🍺 Beer enthusiast', '🏍️ Adrenaline junkie', '🤖 Robotics champion', '🖨️ 3D printing', '✈️ Traveller'].map((item) => (
                <span key={item} className="text-sm font-medium px-4 py-1.5 rounded-full border border-ocean-border text-ocean-muted bg-ocean-abyss">
                  {item}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-2">
              <p className="text-ocean-muted text-xs font-semibold uppercase tracking-widest mb-3">Languages</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {LANGUAGES.map(({ lang, level }) => (
                  <div key={lang} className="text-sm">
                    <span className="text-white font-medium">{lang}</span>
                    <span className="text-ocean-muted text-xs ml-1.5">({level})</span>
                  </div>
                ))}
              </div>

              {/* Duolingo streak */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-ocean-border bg-ocean-abyss">
                <span className="text-lg">🔥</span>
                <span className="text-sm">
                  <span className="text-white font-bold">{streak.toLocaleString()}</span>
                  <span className="text-ocean-muted"> day </span>
                  <span className="font-semibold" style={{ color: '#58cc02' }}>Duolingo</span>
                  <span className="text-ocean-muted"> streak — learning Chinese</span>
                </span>
                <span className="text-ocean-coral text-xs font-medium">&amp; counting</span>
              </div>
            </div>
          </div>

          {/* Right column: Skills + Awards */}
          <div className="space-y-10">

            {/* Skills */}
            <div className="space-y-6">
              <p className="text-ocean-muted text-xs font-semibold uppercase tracking-widest">Tech Stack</p>
              {SKILLS.map(({ label, items }) => (
                <div key={label}>
                  <p className="text-ocean-surface text-xs font-semibold tracking-widest uppercase mb-2.5">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="ocean-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div>
              <p className="text-ocean-muted text-xs font-semibold uppercase tracking-widest mb-4">Honours & Awards</p>
              <div className="space-y-3">
                {AWARDS.map(({ title, detail }) => (
                  <div key={title} className="flex gap-3 items-start">
                    <span className="text-ocean-coral mt-0.5 flex-shrink-0">▹</span>
                    <div>
                      <p className="text-white text-sm font-medium">{title}</p>
                      <p className="text-ocean-muted text-xs">{detail}</p>
                    </div>
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
