export default function WaveDivider({ flip = false, fromColor = '#07111f', toColor = '#0b1929' }) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ background: flip ? toColor : fromColor }}
    >
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path
          fill={flip ? fromColor : toColor}
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  )
}
