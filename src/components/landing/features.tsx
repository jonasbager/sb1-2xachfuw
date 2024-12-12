import { Brain, FileCheck, LineChart, Users } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Insights',
    description: 'Get intelligent match rates and suggestions based on your profile and past applications.',
    icon: Brain,
  },
  {
    name: 'Document Management',
    description: 'Organize your CVs, cover letters, and recommendations in one place.',
    icon: FileCheck,
  },
  {
    name: 'Progress Tracking',
    description: 'Visual kanban board to track your applications from submission to interview.',
    icon: LineChart,
  },
  {
    name: 'Network Intelligence',
    description: 'See your connections at target companies and leverage your professional network.',
    icon: Users,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Smart Job Application Management
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}