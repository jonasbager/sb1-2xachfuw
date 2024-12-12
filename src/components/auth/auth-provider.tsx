import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { env } from '../../env';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  const navigate = useNavigate();

  return (
    <ClerkProvider 
      publishableKey={env.VITE_CLERK_PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
      afterSignIn={(session) => {
        navigate('/dashboard');
      }}
      afterSignUp={(session) => {
        navigate('/dashboard');
      }}
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary hover:bg-primary/90',
          footerActionLink: 'text-primary hover:text-primary/90'
        }
      }}
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ClerkProvider>
  );
}
