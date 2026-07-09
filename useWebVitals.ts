/**
 * Lightweight skeleton loader for route transitions.
 * Minimal DOM, no JS animation overhead — uses CSS only.
 */
export default function PageLoader() {
  return (
    <div className="min-h-screen bg-charcoal-dark flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* CSS-only spinner - no JS animation overhead */}
        <div
          className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin"
          style={{ animationDuration: '0.8s' }}
          aria-label="Loading page"
          role="progressbar"
        />
        <span className="text-sm text-silver font-medium tracking-wide">
          Loading...
        </span>
      </div>
    </div>
  );
}