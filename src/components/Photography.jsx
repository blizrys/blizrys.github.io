import { useEffect } from 'react'

// ─────────────────────────────────────────────────────────────
// HOW TO SET THIS UP (one-time, ~3 minutes):
//
// 1. Make sure your Instagram is a Creator or Business account
//    (free — Settings → Account → Switch to Professional Account)
//
// 2. Go to https://behold.so and sign up (free tier is enough)
//
// 3. Click "New Feed" → connect your Instagram (@blizrys)
//
// 4. Customise the layout (grid, number of posts, etc.)
//
// 5. Click "Get Embed Code" → copy the Feed ID (looks like: AbCd1234)
//
// 6. Paste your Feed ID into the BEHOLD_FEED_ID constant below
// ─────────────────────────────────────────────────────────────

const BEHOLD_FEED_ID = ''   // ← paste your Behold Feed ID here
const INSTAGRAM_HANDLE = 'blizrys'

export default function Photography() {
  useEffect(() => {
    if (!BEHOLD_FEED_ID) return
    const script = document.createElement('script')
    script.src = 'https://w.behold.so/widget.js'
    script.type = 'text/javascript'
    script.async = true
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section id="photography" className="py-28 px-6 bg-ocean-deep">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">Through the Lens</h2>
          <div className="section-line" />
        </div>

        <p className="text-ocean-muted mb-12 max-w-xl">
          Landscapes from the road, the water, and wherever the weekend takes me.
        </p>

        {/* Feed or setup prompt */}
        {BEHOLD_FEED_ID ? (
          <behold-widget feed-id={BEHOLD_FEED_ID} />
        ) : (
          <div className="ocean-card p-10 text-center max-w-lg mx-auto">
            <p className="text-3xl mb-4">📸</p>
            <p className="text-white font-semibold mb-2">Instagram feed coming soon</p>
            <p className="text-ocean-muted text-sm leading-relaxed mb-6">
              Add your Behold Feed ID to{' '}
              <span className="text-ocean-foam font-medium">src/components/Photography.jsx</span>{' '}
              to display your photos here.
            </p>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm inline-flex"
            >
              @{INSTAGRAM_HANDLE} on Instagram
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}

        {/* Instagram link below feed */}
        {BEHOLD_FEED_ID && (
          <div className="mt-10 text-center">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              See more on Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
