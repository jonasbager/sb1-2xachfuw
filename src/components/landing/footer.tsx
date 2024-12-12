import { Link } from 'react-router-dom';
import { Logo } from '../ui/logo';

const navigation = {
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center">
          <Logo className="h-8 w-auto" />
          <nav className="flex gap-x-8" aria-label="Footer">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                {item.name}
              </a>
            ))}
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Applymate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}