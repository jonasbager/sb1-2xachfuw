export function Terms() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-base text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Applymate, you agree to be bound by these Terms
            of Service and all applicable laws and regulations.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900">2. Use License</h2>
          <p>
            We grant you a personal, non-transferable license to use Applymate for
            managing your job applications and related activities.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900">3. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account
            and for all activities that occur under your account.
          </p>
        </div>
      </div>
    </div>
  );
}