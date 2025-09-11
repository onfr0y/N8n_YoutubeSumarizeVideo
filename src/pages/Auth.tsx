import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Logo from '@/components/ui/Logo';
const Auth = () => {
  return <div className="min-h-screen flex items-center justify-center px-4 bg-transparent">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">InsightsLM</h1>
          <h1 className="text-3xl font-bold text-white mb-2">faster than turbo learn</h1>
          <p className="text-white/80">Your AI-powered knowledge companion</p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
          <AuthForm />
        </div>
      </div>
    </div>;
};
export default Auth;