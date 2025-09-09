import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Logo from '@/components/ui/Logo';
const Auth = () => {
  return <div className="min-h-screen flex items-center justify-center px-4 bg-transparent">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 bg-white/90 backdrop-blur-sm rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">InsightsLM</h1>
          <p className="text-gray-600">Your AI-powered knowledge companion</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg">
          <AuthForm />
        </div>
      </div>
    </div>;
};
export default Auth;