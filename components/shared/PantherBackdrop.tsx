type PantherBackdropProps = {
  className?: string
  intensity?: 'low' | 'high'
}

export default function PantherBackdrop({
  className = '',
  intensity = 'low',
}: PantherBackdropProps) {
  return (
    <div
      className={`panther-skin panther-skin--${intensity} ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="panther-rosettes" />
      <div className="panther-speckle" />
      <div className="panther-sheen" />
      <div className="panther-scrim" />
    </div>
  )
}
