/**
 * Progressive blur overlay behind the fixed header — content scrolling up
 * toward the top of the viewport blurs out gradually. Purely decorative,
 * sits below the header (z-50) and mobile menu (z-40) in the stacking order.
 * Adapted from Skiper UI's ProgressiveBlur (devouringdetails.com).
 */
export function ProgressiveBlur() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-30 h-28 select-none md:h-36"
      style={{
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
      }}
    />
  );
}
