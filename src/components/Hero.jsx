import WaveDivider from './WaveDivider'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center ocean-hero-bg px-6 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[500px] rounded-full blur-[140px] opacity-10 bg-ocean-surface pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full blur-[100px] opacity-8 bg-ocean-coral pointer-events-none" />

      {/* Floating accents */}
      <div className="absolute top-1/4 right-20 w-2 h-2 rounded-full bg-ocean-coral animate-float opacity-50" />
      <div className="absolute top-2/5 left-16 w-1.5 h-1.5 rounded-full bg-ocean-foam animate-float opacity-35" style={{ animationDelay: '1.8s' }} />
      <div className="absolute bottom-2/5 right-40 w-1 h-1 rounded-full bg-ocean-surface animate-float opacity-40" style={{ animationDelay: '3.2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">

        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-3 mb-10 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          {['Surfer', 'Engineer', 'Australia'].map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="text-ocean-muted text-sm font-medium tracking-wide">{item}</span>
              {i < 2 && <span className="w-1 h-1 rounded-full bg-ocean-coral opacity-70" />}
            </span>
          ))}
        </div>

        {/* Greeting */}
        <p
          className="text-ocean-muted text-lg mb-4 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1
          className="shimmer-text font-bold text-5xl sm:text-7xl lg:text-8xl leading-tight mb-4 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          Jirarote Jirasirikul
        </h1>

        <p
          className="text-ocean-surface text-2xl sm:text-3xl font-semibold tracking-widest mb-6 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          JJ
        </p>

        {/* Tagline */}
        <p
          className="text-ocean-muted text-sm tracking-widest uppercase mb-4 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
        >
          Senior Business Analyst &nbsp;·&nbsp; Data Scientist &nbsp;·&nbsp; System Engineer
        </p>

        <p
          className="text-ocean-muted text-base tracking-widest uppercase mb-10 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Beer &nbsp;·&nbsp; Geek &nbsp;·&nbsp; Adrenaline Junkie
        </p>

        {/* Bio */}
        <p
          className="text-ocean-muted text-lg leading-relaxed max-w-2xl mx-auto mb-12 opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          10+ years across oil & gas, logistics and security systems — from{' '}
          <span className="text-white font-medium">Bangkok</span> to{' '}
          <span className="text-white font-medium">Melbourne</span>.
          I bridge the gap between data, systems and business, and I build things
          on the side. Chasing waves when I'm not chasing deadlines.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 justify-center opacity-0 animate-fadeUp"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            See My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fromColor="#07111f" toColor="#0b1929" />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-ocean-surface to-transparent" />
      </div>
    </section>
  )
}
