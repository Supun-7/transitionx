type AxisLabelProps = {
  /** Text rendered along the vertical axis, e.g. "ABOUT US" */
  text: string
  className?: string
}

const COPIES = 6

export default function AxisLabel({ text, className = '' }: AxisLabelProps) {
  const span = 520
  const step = 225

  return (
    <div className={`axis-label ${className}`.trim()} aria-hidden="true">
      <svg className="axis-label-svg" viewBox={`0 0 ${span} 100`} preserveAspectRatio="xMidYMid meet">
        <g className="axis-label-track">
          {Array.from({ length: COPIES }, (_, i) => (
            <text
              key={i}
              className="axis-label-text"
              x={span - i * step}
              y={84}
              textLength={step}
              lengthAdjust="spacingAndGlyphs"
            >
              {text}
            </text>
          ))}
        </g>
      </svg>
    </div>
  )
}
