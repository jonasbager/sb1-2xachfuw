import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export function Logo({ className = 'h-10 w-auto' }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-x-2">
      <img
        src="/applymate-logo.png"
        alt="Applymate"
        className={className}
      />
    </Link>
  );
}