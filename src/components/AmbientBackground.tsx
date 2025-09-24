import React from 'react'

/**
 * Animated SVG woodgrain background.
 * Lightweight: pure SVG filters and gradients, no images.
 */
const AmbientBackground: React.FC = () => {
  return (
    <div aria-hidden className="ambient">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="woodGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--wood-1)" />
            <stop offset="100%" stopColor="var(--wood-2)" />
          </linearGradient>

          <pattern id="stripes" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
            <rect width="2" height="4" fill="rgba(255,255,255,.05)"/>
          </pattern>

          <filter id="woodWarp">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.02" numOctaves="2" seed="11" result="noise">
              <animate attributeName="baseFrequency" dur="20s" values="0.006 0.02; 0.012 0.018; 0.008 0.02" repeatCount="indefinite" />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0.6" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12">
              <animate attributeName="scale" dur="12s" values="8;16;8" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>

          <filter id="soften">
            <feGaussianBlur stdDeviation="0.2"/>
          </filter>
        </defs>

        <rect x="0" y="0" width="100" height="100" fill="url(#woodGradient)" />
        <rect x="0" y="0" width="100" height="100" fill="url(#stripes)" opacity="0.5" filter="url(#woodWarp)" />
        <rect x="0" y="0" width="100" height="100" fill="rgba(0,0,0,.05)" filter="url(#soften)" />
      </svg>
      <div className="grain" />
    </div>
  )
}

export default AmbientBackground