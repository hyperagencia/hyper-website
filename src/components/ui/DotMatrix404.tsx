// Fuente de puntos 5x7 — "404" dibujado como SVG, sin assets externos.
const GLYPHS: Record<string, string[]> = {
  '4': ['...#.', '..##.', '.#.#.', '#..#.', '#####', '...#.', '...#.'],
  '0': ['.###.', '#...#', '#..##', '#.#.#', '##..#', '#...#', '.###.'],
};

const TEXT = '404';
const GAP = 1; // columnas vacías entre glifos
const STEP = 20;
const RADIUS = 5;

export function DotMatrix404({ className }: { className?: string }) {
  const dots: { x: number; y: number }[] = [];
  let col = 0;
  for (const char of TEXT) {
    GLYPHS[char].forEach((row, y) => {
      [...row].forEach((cell, x) => {
        if (cell === '#') dots.push({ x: (col + x) * STEP + RADIUS, y: y * STEP + RADIUS });
      });
    });
    col += 5 + GAP;
  }
  const width = (col - GAP) * STEP - (STEP - 2 * RADIUS);
  const height = 6 * STEP + 2 * RADIUS;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="currentColor"
      role="img"
      aria-label="404"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={RADIUS} />
      ))}
    </svg>
  );
}
