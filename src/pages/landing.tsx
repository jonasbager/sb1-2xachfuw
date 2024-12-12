import { Features } from '@/components/landing/features';
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export function Landing() {
  return (
    <div className="bg-white pt-16">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
}