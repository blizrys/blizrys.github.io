import { SKILLS } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-ocean-deep">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">About Me</h2>
          <div className="section-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Bio */}
          <div className="space-y-5 text-ocean-muted leading-relaxed text-base">
            <p className="text-ocean-text text-lg font-medium">
              I&apos;m <span className="text-white font-semibold">Jirarote Jirasirikul</span> — most people call me{' '}
              <span className="text-ocean-surface font-semibold">JJ</span>.
            </p>

            <p>
              I started coding in middle school, hooked on Robotics and an MMORPG called{' '}
              <span className="text-ocean-foam font-medium">Ragnarok Online</span>. That itch for
              building things never went away — I ended up working across the full stack as a{' '}
              <span className="text-white font-medium">System Engineer</span>,{' '}
              <span className="text-white font-medium">Data Scientist</span>, and{' '}
              <span className="text-white font-medium">Full-Stack Developer</span>.
            </p>

            <p>
              Outside of work, I&apos;m in the ocean. Surfing taught me to read conditions,
              stay patient, and commit fully when the right wave comes — and honestly,
              that mindset shows up in how I approach engineering too.
            </p>

            {/* Personality chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['🏄 Surfer', '🍺 Beer enthusiast', '🏍️ Adrenaline junkie', '🎮 Lifelong gamer', '🤖 Robotics nerd'].map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium px-4 py-1.5 rounded-full border border-ocean-border text-ocean-muted bg-ocean-abyss"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-7">
            <p className="text-ocean-muted text-sm font-semibold uppercase tracking-widest">Tech Stack</p>
            {SKILLS.map(({ label, items }) => (
              <div key={label}>
                <p className="text-ocean-surface text-xs font-semibold tracking-widest uppercase mb-3">
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="ocean-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
