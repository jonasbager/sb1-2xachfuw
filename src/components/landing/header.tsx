import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Logo } from '../ui/logo';

export function Header() {
  const navigate = useNavigate();
  
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Logo className="h-12 w-auto" />
        <div className="flex gap-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/sign-in')}
          >
            Log in
          </Button>
          <Button
            onClick={() => navigate('/sign-up')}
          >
            Sign up
          </Button>
        </div>
      </nav>
    </header>
  );
}