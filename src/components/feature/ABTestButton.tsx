import { Link } from 'react-router-dom';
import { useABTest, CTA_BUTTON_TEST, FORM_SUBMIT_TEST, BUTTON_STYLE_TEST } from '../../hooks/useABTest';

interface ABTestButtonProps {
  to?: string;
  href?: string;
  testId?: 'cta' | 'form' | 'style';
  elementId: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outline' | 'white';
  onClick?: () => void;
}

const CTA_VARIANTS: Record<string, { label: string; sublabel?: string }> = {
  A: { label: 'Get Free Estimate', sublabel: undefined },
  B: { label: 'Free Quote — No Obligation', sublabel: undefined },
  C: { label: 'Schedule Your Inspection', sublabel: undefined },
};

const FORM_VARIANTS: Record<string, { label: string }> = {
  A: { label: 'Request Your Free Estimate' },
  B: { label: 'Get My Free Estimate' },
  C: { label: 'See How Much I Can Save' },
  D: { label: 'Schedule Free Consultation' },
  E: { label: 'Get Expert Assessment' },
};

export default function ABTestButton({
  to,
  href,
  testId = 'cta',
  elementId,
  className = '',
  size = 'md',
  variant = 'primary',
  onClick,
}: ABTestButtonProps) {
  const test = testId === 'cta' ? CTA_BUTTON_TEST : testId === 'form' ? FORM_SUBMIT_TEST : BUTTON_STYLE_TEST;
  const { variant: assignedVariant, isReady, trackEvent } = useABTest(test);

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl',
  };

  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20',
    outline: 'bg-transparent border-2 border-offwhite text-offwhite hover:bg-offwhite hover:text-charcoal-dark',
    white: 'bg-white text-primary hover:bg-offwhite shadow-lg',
  };

  const styleVariant = testId === 'style' ? assignedVariant : 'solid';
  const styleClasses = {
    solid: '',
    gradient: 'bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary',
    pulse: 'animate-pulse',
    large: 'px-12 py-6 text-2xl font-bold',
  };

  const baseClasses = `inline-flex items-center justify-center space-x-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${styleClasses[styleVariant as keyof typeof styleClasses] || ''}`;

  const handleClick = () => {
    trackEvent('cta_click', elementId, { test_type: testId });
    onClick?.();
  };

  let buttonText: string;
  let sublabel: string | undefined;

  if (testId === 'cta') {
    const v = CTA_VARIANTS[assignedVariant] || CTA_VARIANTS.A;
    buttonText = v.label;
    sublabel = v.sublabel;
  } else if (testId === 'form') {
    buttonText = (FORM_VARIANTS[assignedVariant] || FORM_VARIANTS.A).label;
  } else {
    buttonText = 'Get Free Estimate';
  }

  if (!isReady) {
    buttonText = testId === 'form' ? 'Request Your Free Estimate' : 'Get Free Estimate';
  }

  const content = (
    <>
      <span>{buttonText}</span>
      <i className="ri-arrow-right-line"></i>
    </>
  );

  const wrapperClasses = `${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${wrapperClasses}`}
        onClick={handleClick}
        data-ab-test={test.id}
        data-ab-variant={assignedVariant}
        data-ab-element={elementId}
      >
        {content}
        {sublabel && <span className="block text-xs opacity-75 mt-0.5 font-normal">{sublabel}</span>}
      </a>
    );
  }

  return (
    <Link
      to={to || '/contact'}
      className={`${baseClasses} ${wrapperClasses}`}
      onClick={handleClick}
      data-ab-test={test.id}
      data-ab-variant={assignedVariant}
      data-ab-element={elementId}
    >
      {content}
      {sublabel && <span className="block text-xs opacity-75 mt-0.5 font-normal">{sublabel}</span>}
    </Link>
  );
}