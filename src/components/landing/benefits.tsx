import { CheckCircle2, Zap, Shield, Trophy } from 'lucide-react';

const benefits = [
  {
    name: 'Boost Application Success',
    description: 'Increase your chances of landing interviews with AI-powered job matching and application optimization.',
    icon: Trophy,
  },
  {
    name: 'Save Time',
    description: 'Automate repetitive tasks and manage all your applications in one place.',
    icon: Zap,
  },
  {
    name: 'Stay Organized',
    description: 'Never miss a deadline or lose track of your applications with our intuitive tracking system.',
    icon: CheckCircle2,
  },
  {
    name: 'Secure & Private',
    description: 'Your data is encrypted and protected. We never share your information without permission.',
    icon: Shield,
  },
];

export function Benefits() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 opacity-70" />
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M0 24V0h24" fill="none" stroke="currentColor" strokeOpacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Applymate</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to land your dream job
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform is designed to streamline your job search process and increase your chances of success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </div>
    </div>
  );
}