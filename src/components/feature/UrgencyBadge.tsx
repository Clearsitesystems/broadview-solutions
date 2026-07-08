import { useState, useEffect } from 'react';

interface UrgencyBadgeProps {
  message: string;
  expiresAt?: string;
  variant?: 'urgent' | 'seasonal' | 'limited';
  className?: string;
}

export default function UrgencyBadge({
  message,
  expiresAt,
  variant = 'urgent',
  className = '',
}: UrgencyBadgeProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (!expiresAt) return;

    const updateTimer = () => {
      const end = new Date(expiresAt).getTime();
      const now = Date.now();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft('Expired');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h left`);
      } else {
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${hours}h ${minutes}m left`);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  const variantClasses = {
    urgent: 'bg-red-500/20 border-red-500/50 text-red-300',
    seasonal: 'bg-accent/20 border-accent/50 text-accent',
    limited: 'bg-primary/20 border-primary/50 text-primary-light',
  };

  const iconClasses = {
    urgent: 'ri-fire-line text-red-400',
    seasonal: 'ri-sun-line text-accent',
    limited: 'ri-timer-line text-primary-light',
  };

  return (
    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-sm font-medium backdrop-blur-sm ${variantClasses[variant]} ${className}`}>
      <i className={`${iconClasses[variant]} text-lg`}></i>
      <span>{message}</span>
      {timeLeft && (
        <span className="font-bold">— {timeLeft}</span>
      )}
    </div>
  );
}