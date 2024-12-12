export function Privacy() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-base text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including name, email,
            and professional details needed for job applications.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our
            services, and to help you manage your job applications effectively.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900">3. Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except as
            described in this policy or with your explicit consent.
          </p>
        </div>
      </div>
    </div>
  );
}