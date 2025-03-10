import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const CreateProfilePage = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()
  
  // Password validation checks
  const hasMinLength = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch = password === confirmPassword;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Logo */}
      <div className="mb-10">
        <img 
          src="/logo.svg" 
          alt="RHS Services Logo" 
          className="h-10"
          onError={(e) => {
            // Fallback if logo doesn't load
            e.target.outerHTML = '<div class="text-2xl font-bold text-blue-500">RHS<span class="text-blue-300">Services</span></div>';
          }}
        />
      </div>
      
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">Create an account</h1>
          <p className="mt-2 text-center text-gray-600">
            Don't worry if you're missing details! Use this profile to save your application and complete it when you're ready
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex mb-8">
          <button
            className={`flex-1 py-2 text-center border ${
              activeTab === 'signup' 
                ? 'border-gray-300 bg-white text-gray-900 font-medium' 
                : 'border-gray-200 bg-gray-50 text-gray-500'
            } rounded-l-md`}
            onClick={() => setActiveTab('signup')}
          >
            Sign up
          </button>
          <button
            className={`flex-1 py-2 text-center border ${
              activeTab === 'login' 
                ? 'border-gray-300 bg-white text-gray-900 font-medium' 
                : 'border-gray-200 bg-gray-50 text-gray-500'
            } rounded-r-md`}
            onClick={() => setActiveTab('login')}
          >
            Log in
          </button>
        </div>
        
        {/* Form */}
        {activeTab === 'signup' ? (
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full border-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Cellphone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your cellphone number"
                required
                className="w-full border-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                required
                className="w-full border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Create a password"
                required
                className="w-full border-gray-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            
            {/* Password requirements */}
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle 
                  className={`mr-2 h-5 w-5 ${hasMinLength ? 'text-green-500' : 'text-gray-300'}`} 
                  fill={hasMinLength ? 'rgba(34, 197, 94, 0.2)' : 'none'}
                />
                <span className="text-gray-600">Must be at least 8 characters</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle 
                  className={`mr-2 h-5 w-5 ${hasSpecialChar ? 'text-green-500' : 'text-gray-300'}`} 
                  fill={hasSpecialChar ? 'rgba(34, 197, 94, 0.2)' : 'none'}
                />
                <span className="text-gray-600">Must contain one special character</span>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-6 bg-gray-100 hover:bg-gray-200 text-gray-700"
              disabled={!hasMinLength || !hasSpecialChar || !passwordsMatch}
            >
              Get started
            </Button>
          </form>
        ) : (
          <form className="space-y-6">
            <div>
              <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="loginEmail"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full border-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="loginPassword"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full border-gray-300"
              />
            </div>
            
            <Button 
              type="submit" 
              onClick={()=>navigate('/verify')}
              className="w-full py-6 bg-blue-500 hover:bg-blue-600 text-white"
            >
              Log in
            </Button>
          </form>
        )}
        
        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {activeTab === 'signup' ? 'Already have an account? ' : 'Don\'t have an account? '}
            <button 
              className="text-blue-500 hover:text-blue-700 font-medium"
              onClick={() => setActiveTab(activeTab === 'signup' ? 'login' : 'signup')}
            >
              {activeTab === 'signup' ? 'Log in' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateProfilePage;