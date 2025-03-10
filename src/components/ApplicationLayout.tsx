import React from 'react'
import ApplicationHeader from './ApplicationHeader';

const ApplicationLayout = ({children}) => {
  return (
    <div className="min-h-screen w-full relative">
    <div className="fixed inset-0 w-full h-full z-[-1]">
      <img
        src={'/images/bg-img.png'}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Header */}
    <ApplicationHeader />
    {children}
    <footer className="bg-white py-4 w-full fixed  bottom-0 left-0  right-0">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            <img 
              src="/logo.svg" 
              alt="RHS Services Logo" 
              className="h-6"
              onError={(e) => {
                e.target.outerHTML = '<div class="text-lg font-semibold text-blue-500">RHS<span class="text-blue-300">Services</span></div>';
              }}
            />
          </div>
          <div className="text-sm text-gray-500">
            © 2024 Ezra 360 LMS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ApplicationLayout