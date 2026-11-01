// A small hand-drawn-style botanical sprig used as an ornament in The Herbal
// Kitchen. Purely decorative.
export function Sprig({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M12 112 C 40 80, 62 52, 108 10" />
      {[
        [30, 88, -1],
        [44, 72, 1],
        [58, 56, -1],
        [72, 42, 1],
        [86, 28, -1],
      ].map(([x, y, s], i) => (
        <path
          key={i}
          d={`M${x} ${y} q ${s! * 14} ${-4} ${s! * 22} ${-18} q ${-s! * 12} ${2} ${-s! * 22} ${18} z`}
          fill="currentColor"
          fillOpacity="0.14"
        />
      ))}
      <circle cx="104" cy="14" r="3.2" fill="currentColor" fillOpacity="0.5" />
      <circle cx="97" cy="12" r="2.4" fill="currentColor" fillOpacity="0.4" />
      <circle cx="102" cy="21" r="2.4" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
