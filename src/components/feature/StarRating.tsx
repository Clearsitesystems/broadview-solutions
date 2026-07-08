interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export default function StarRating({ rating, size = 'md', showValue = false }: StarRatingProps) {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-xl',
  };

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <i key={`full-${i}`} className={`ri-star-fill text-accent ${sizeClasses[size]}`}></i>
      ))}
      {hasHalf && (
        <i className={`ri-star-half-fill text-accent ${sizeClasses[size]}`}></i>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={`empty-${i}`} className={`ri-star-line text-silver-dark ${sizeClasses[size]}`}></i>
      ))}
      {showValue && (
        <span className="text-offwhite font-semibold text-sm ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}