import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import { Landing } from './pages/landing';
import { Privacy } from './pages/privacy';
import { Terms } from './pages/terms';
import { Board } from './components/dashboard/board';
import { Sidebar } from './components/layout/sidebar';
import { Plus } from 'lucide-react';
import { Button } from './components/ui/button';

function DashboardLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="min-h-screen bg-secondary">
      <Sidebar />
      <header className="bg-white border-b">
        <div className="lg:pl-72">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold tracking-tight text-foreground">Job Applications</h1>
              <Button size="sm" className="flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Add Application
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="lg:pl-72">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Board />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/sign-in/*" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <SignIn 
            routing="path"
            path="/sign-in"
          />
        </div>
      } />
      <Route path="/sign-up/*" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <SignUp 
            routing="path"
            path="/sign-up"
          />
        </div>
      } />
      <Route path="/app" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
