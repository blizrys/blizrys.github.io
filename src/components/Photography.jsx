import { useState, useEffect } from 'react'

const FEED_URL = 'https://feeds.behold.so/EvWRzYJL7D2w4sboSH9o'
const INSTAGRAM_HANDLE = 'blizrys'

function PhotoCard({ post }) {
  const [hovered, setHovered] = useState(false)
  const src = post.sizes?.medium?.mediaUrl || post.mediaUrl
  const caption = post.prunedCaption || ''

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-xl group mb-4 break-inside-avoid"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={caption || 'Landscape photo'}
        className="w-full block transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ background: 'linear-gradient(to top, rgba(7,17,31,0.85) 0%, transparent 60%)' }}
      >
        {caption && (
          <p className="text-white text-sm font-medium leading-snug">{caption}</p>
        )}
        <p className="text-ocean-muted text-xs mt-1 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          View on Instagram
        </p>
      </div>
    </a>
  )
}

function SkeletonGrid() {
  return (
    <div className="columns-2 sm:columns-3 gap-4">
      {[300, 400, 250, 380, 320, 420].map((h, i) => (
        <div
          key={i}
          className="mb-4 break-inside-avoid rounded-xl bg-ocean-mid animate-pulse"
          style={{ height: h }}
        />
      ))}
    </div>
  )
}

export default function Photography() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(FEED_URL)
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.posts || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <section id="photography" className="py-28 px-6 bg-ocean-deep">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">Through the Lens</h2>
          <div className="section-line" />
        </div>

        <div className="flex items-center justify-between mb-12">
          <p className="text-ocean-muted max-w-lg">
            Landscapes from the road, the water, and wherever the weekend takes me.
          </p>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-ocean-muted hover:text-ocean-foam transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @{INSTAGRAM_HANDLE}
          </a>
        </div>

        {/* Grid */}
        {loading && <SkeletonGrid />}

        {error && (
          <p className="text-ocean-muted text-sm">Couldn't load photos — check back soon.</p>
        )}

        {!loading && !error && (
          <div className="columns-2 sm:columns-3 gap-4">
            {posts.map((post) => (
              <PhotoCard key={post.id} post={post} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
