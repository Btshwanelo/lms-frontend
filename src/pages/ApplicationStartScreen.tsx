import React, { useEffect, useState } from 'react';
import { X, Plus, ArrowRight, HelpCircle, PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ApplicationHeader from '@/components/ApplicationHeader';
import ApplicationLayout from '@/components/ApplicationLayout';
import { retry } from '@reduxjs/toolkit/query';
import LoadingScreenExact from './LoadingScreen';
import { useNavigate } from 'react-router-dom';

const ApplicationStartScreen = () => {
  const [applicationType, setApplicationType] = useState('individual');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    idNumber: '',
    name: '',
    surname: ''
  });
  const [consents, setConsents] = useState({
    academic: false,
    credit: false,
    notBlacklisted: false
  });

  const handleConsent = (field) => {
    setConsents(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Handle form submission or navigation to next step
    console.log('Form Data:', formData);
    console.log('Consents:', consents);
    setIsLoading(true)
  };

  useEffect(() => {
    if(isLoading){
      setTimeout(() => {
        navigate('/application')
      }, 2000);
    }
  }, [isLoading])
  

  if(isLoading){
    return <LoadingScreenExact />
  }

  return (
   <ApplicationLayout>

      {/* Main Content */}
      <main className="flex-grow flex flex-col pt-4 pb-24 px-4 md:px-8">
        {/* Application Container */}
        <div className="mx-auto w-full max-w-5xl flex flex-col flex-grow">
          {/* Top Section */}
          <div className="bg-white rounded-lg p-4 md:p-6 mb-4 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Get started with your application</h1>
              <Button variant="outline" className="text-[#58B6E9] border-[#58B6E9] hover:bg-blue-50 w-full md:w-auto">
                Save & Exit
              </Button>
            </div>
            
            {/* Collapsible Information Panel */}
            <div className=" bg-gray-100 rounded-lg p-4 flex justify-between items-center">
              <h2 className="text-sm md:text-base text-gray-700">Important Information About Our Integrated Verification Process</h2>
              <button className="text-gray-400 flex-shrink-0">
                <PlusCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg p-4 md:p-6 mb-4 shadow-sm  ">
            {/* Application Type Toggle */}
            <div className="flex mb-6 max-w-2xl">
              <button
                className={`flex-1 py-2 px-4 text-center border ${
                  applicationType === 'individual' 
                    ? 'bg-white border-gray-300 text-gray-800 font-medium' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                } rounded-l-md transition-colors`}
                onClick={() => setApplicationType('individual')}
              >
                Individual
              </button>
              <button
                className={`flex-1 py-2 px-4 text-center border ${
                  applicationType === 'business' 
                    ? 'bg-white border-gray-300 text-gray-800 font-medium' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                } rounded-r-md transition-colors`}
                onClick={() => setApplicationType('business')}
              >
                Business / Entity
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-6 max-w-2xl">
              {/* ID Number Field */}
              <div>
                <div className="flex items-center mb-1">
                  <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
                    ID Number
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                  <button className="ml-2 text-gray-400">
                    <HelpCircle className="h-4 w-4" />
                  </button>
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={formData.idNumber || "Select ID Number"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9902020304089">9902020304089</SelectItem>
                    <SelectItem value="8801015123456">8801015123456</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Name Field */}
              <div>
                <div className="flex items-center mb-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300"
                  placeholder="Enter your name"
                />
              </div>
              
              {/* Surname Field */}
              <div>
                <div className="flex items-center mb-1">
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                    Surname
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <Input
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full border-gray-300"
                  placeholder="Enter your surname"
                />
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <Checkbox 
                    id="academicConsent" 
                    checked={consents.academic}
                    onCheckedChange={() => handleConsent('academic')}
                    className="mt-1"
                  />
                  <label htmlFor="academicConsent" className="ml-2 text-sm text-gray-700">
                    I consent to having my academic record queried for this application
                  </label>
                </div>
                
                <div className="flex items-start">
                  <Checkbox 
                    id="creditConsent" 
                    checked={consents.credit}
                    onCheckedChange={() => handleConsent('credit')}
                    className="mt-1"
                  />
                  <label htmlFor="creditConsent" className="ml-2 text-sm text-gray-700">
                    I consent to having my credit record queried for this application
                  </label>
                </div>
                
                <div className="flex items-start">
                  <Checkbox 
                    id="blacklistConsent" 
                    checked={consents.notBlacklisted}
                    onCheckedChange={() => handleConsent('notBlacklisted')}
                    className="mt-1"
                  />
                  <label htmlFor="blacklistConsent" className="ml-2 text-sm text-gray-700">
                    I'm not blacklisted or sequestrated or under debt review
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-white rounded-lg p-4 md:p-6 mb-2 shadow-sm">
            <div className="flex justify-start">
              <Button 
                onClick={handleNext}
                className={`flex items-center text-white w-40 px-4 md:px-6 py-3 md:py-5 ${
                  formData.name && formData.surname && consents.academic && consents.credit && consents.notBlacklisted
                    ? 'bg-[#58B6E9] hover:bg-blue-400' 
                    : 'bg-gray-200 text-gray-500'
                } transition-colors`}
                disabled={!(formData.name && formData.surname && consents.academic && consents.credit && consents.notBlacklisted)}
              >
                Next
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Now positioned at the bottom of the page */}
      </ApplicationLayout>
  );
};

// Pre-filled version for demo purposes
const ApplicationStartScreenFilled = () => {
  const [applicationType, setApplicationType] = useState('individual');
  const [formData, setFormData] = useState({
    idNumber: '9902020304089',
    name: 'Thandiwe',
    surname: 'Nkosi'
  });
  const [consents, setConsents] = useState({
    academic: true,
    credit: true,
    notBlacklisted: true
  });

  const handleConsent = (field) => {
    setConsents(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Handle form submission or navigation to next step
    console.log('Form Data:', formData);
    console.log('Consents:', consents);
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image - Now positioned to cover the entire page */}
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <div className="w-full h-full bg-gradient-to-r from-cyan-900 to-blue-100"></div>
      </div>
      
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white">
        <div className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="RHS Services Logo" 
            className="h-6"
            onError={(e) => {
              e.target.outerHTML = '<div class="text-lg font-semibold text-blue-500">RHS<span class="text-blue-300">Services</span></div>';
            }}
          />
        </div>
        <button className="p-1">
          <X className="h-6 w-6 text-gray-700" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col pt-4 pb-24 px-4 md:px-8">
        {/* Application Container */}
        <div className="mx-auto w-full max-w-5xl flex flex-col flex-grow">
          {/* Top Section */}
          <div className="bg-white rounded-lg p-4 md:p-6 mb-4 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Get started with your application</h1>
              <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50 w-full md:w-auto">
                Save & Exit
              </Button>
            </div>
            
            {/* Collapsible Information Panel */}
            <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
              <h2 className="text-sm md:text-base text-gray-700 font-medium">Important Information About Our Integrated Verification Process</h2>
              <button className="text-gray-400 flex-shrink-0">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg p-4 md:p-6 mb-4 shadow-sm flex-grow">
            {/* Application Type Toggle */}
            <div className="flex mb-6">
              <button
                className={`flex-1 py-2 px-4 text-center border ${
                  applicationType === 'individual' 
                    ? 'bg-white border-gray-300 text-gray-800 font-medium' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                } rounded-l-md transition-colors`}
                onClick={() => setApplicationType('individual')}
              >
                Individual
              </button>
              <button
                className={`flex-1 py-2 px-4 text-center border ${
                  applicationType === 'business' 
                    ? 'bg-white border-gray-300 text-gray-800 font-medium' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                } rounded-r-md transition-colors`}
                onClick={() => setApplicationType('business')}
              >
                Business / Entity
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* ID Number Field */}
              <div>
                <div className="flex items-center mb-1">
                  <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
                    ID Number
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                  <button className="ml-2 text-gray-400">
                    <HelpCircle className="h-4 w-4" />
                  </button>
                </div>
                <Select defaultValue={formData.idNumber}>
                  <SelectTrigger className="w-full">
                    <SelectValue>{formData.idNumber}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9902020304089">9902020304089</SelectItem>
                    <SelectItem value="8801015123456">8801015123456</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Name Field */}
              <div>
                <div className="flex items-center mb-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300"
                />
              </div>
              
              {/* Surname Field */}
              <div>
                <div className="flex items-center mb-1">
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                    Surname
                  </label>
                  <span className="text-red-500 ml-1">*</span>
                </div>
                <Input
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full border-gray-300"
                />
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <Checkbox 
                    id="academicConsent" 
                    checked={consents.academic}
                    onCheckedChange={() => handleConsent('academic')}
                    className="mt-1"
                  />
                  <label htmlFor="academicConsent" className="ml-2 text-sm text-gray-700">
                    I consent to having my academic record queried for this application
                  </label>
                </div>
                
                <div className="flex items-start">
                  <Checkbox 
                    id="creditConsent" 
                    checked={consents.credit}
                    onCheckedChange={() => handleConsent('credit')}
                    className="mt-1"
                  />
                  <label htmlFor="creditConsent" className="ml-2 text-sm text-gray-700">
                    I consent to having my credit record queried for this application
                  </label>
                </div>
                
                <div className="flex items-start">
                  <Checkbox 
                    id="blacklistConsent" 
                    checked={consents.notBlacklisted}
                    onCheckedChange={() => handleConsent('notBlacklisted')}
                    className="mt-1"
                  />
                  <label htmlFor="blacklistConsent" className="ml-2 text-sm text-gray-700">
                    I'm not blacklisted or sequestrated or under debt review
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex justify-end">
              <Button 
                onClick={handleNext}
                className="flex items-center px-4 md:px-6 py-3 md:py-5 bg-blue-500 hover:bg-blue-600"
              >
                Next
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Now positioned at the bottom of the page */}
      <footer className="bg-white p-4 border-t w-full absolute bottom-0 left-0 right-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
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
  );
};

export { ApplicationStartScreen, ApplicationStartScreenFilled };
export default ApplicationStartScreen;