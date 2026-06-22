import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WaveDivider from './components/WaveDivider'

function Footer() {
  return (
    <footer className="bg-ocean-deep border-t border-ocean-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-ocean-muted text-sm">
          Built by{' '}
          <span className="text-ocean-surface font-medium">@BlizRyS</span>
          {' '}— Jirarote Jirasirikul
        </p>
        <p className="text-ocean-muted text-xs">
          React + Tailwind &nbsp;·&nbsp; &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WaveDivider fromColor="#0b1929" toColor="#07111f" />
        <Experience />
        <WaveDivider fromColor="#07111f" toColor="#0b1929" />
        <Projects />
        <WaveDivider fromColor="#0b1929" toColor="#07111f" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
