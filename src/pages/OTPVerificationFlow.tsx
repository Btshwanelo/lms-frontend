import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 1. OTP Notification Screen
export const OTPNotification = () => {
  const navigate = useNavigate();
  
  const handleEnterManually = () => {
    navigate('/verify/enter-otp');
  };
  
  const handleBackToLogin = () => {
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Email Icon */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
          <Mail className="h-8 w-8 text-gray-500" />
        </div>
        
        {/* Title and Description */}
        <h1 className="text-2xl font-semibold text-center mb-2">Check your phone</h1>
        <p className="text-gray-600 text-center mb-8">
          Keep your phone close. We sent you an otp to your phone for verification.
        </p>
        
        {/* Action Button */}
        <Button 
          className="w-full bg-[#0288D1] hover:bg-[#0277BD] font-semibold text-white py-6"
          onClick={handleEnterManually}
        >
          Enter code manually
        </Button>
        
        {/* Back to Login */}
        <button 
          className="mt-6 flex items-center text-gray-600 hover:text-gray-800"
          onClick={handleBackToLogin}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to log in
        </button>
      </div>
    </div>
  );
};

// 2. OTP Input Screen
export const OTPInput = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^[0-9]*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Move to next input if value is entered
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  
  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };
  
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4).split('');
    
    // Only proceed if pasted content is all numbers
    if (pastedData.some(char => !/^[0-9]$/.test(char))) return;
    
    const newOtp = [...otp];
    pastedData.forEach((value, index) => {
      if (index < 4) newOtp[index] = value;
    });
    
    setOtp(newOtp);
    
    // Focus the next empty input or the last input
    const lastFilledIndex = Math.min(pastedData.length - 1, 3);
    inputRefs[lastFilledIndex].current.focus();
  };
  
  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length === 4) {
      // Here you would normally verify the OTP with your backend
      // For now, we'll just navigate to the success page
      navigate('/verify/success');
    }
  };
  
  const handleResend = () => {
    // Here you would trigger OTP resend
    alert('OTP resent successfully!');
  };
  
  const handleBackToLogin = () => {
    navigate('/login');
  };
  
  // Check if OTP is complete
  const isOtpComplete = otp.every(digit => digit !== '');
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Email Icon */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
          <Mail className="h-8 w-8 text-gray-500" />
        </div>
        
        {/* Title and Description */}
        <h1 className="text-2xl font-semibold text-center mb-2">Check your phone</h1>
        <p className="text-gray-600 text-center mb-8">
          Please enter the otp.
        </p>
        
        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-16 h-16 text-center text-3xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              ref={inputRefs[index]}
              autoFocus={index === 0}
            />
          ))}
        </div>
        
        {/* Verify Button */}
        <Button 
          className={`w-full py-6 ${
            isOtpComplete 
              ? 'bg-[#0288D1] hover:bg-[#0277BD] font-semibold text-white' 
              : 'bg-[#E0E0E0] text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleVerify}
          disabled={!isOtpComplete}
        >
          Verify email
        </Button>
        
        {/* Resend Link */}
        <p className="mt-4 text-sm text-gray-600">
          Didn't receive the email? 
          <button 
            className="ml-1 text-[#0288D1] font-semibold hover:underline"
            onClick={handleResend}
          >
            Click to resend
          </button>
        </p>
        
        {/* Back to Login */}
        <button 
          className="mt-6 flex items-center text-gray-600 hover:text-gray-800"
          onClick={handleBackToLogin}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to log in
        </button>
      </div>
    </div>
  );
};

// 3. Verification Success Screen
export const VerificationSuccess = () => {
  const navigate = useNavigate();
  
  const handleContinue = () => {
    navigate('/dash'); // Navigate to dashboard or next step
  };
  
  const handleResend = () => {
    // Here you would trigger email resend
    alert('Email resent successfully!');
  };
  
  const handleBackToLogin = () => {
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        
        {/* Title and Description */}
        <h1 className="text-2xl font-semibold text-center mb-2">Phone number verified</h1>
        <p className="text-gray-600 text-center mb-8">
          Phone number successfully verified.
        </p>
        
        {/* Continue Button */}
        <Button 
          className="w-full bg-[#0288D1] hover:bg-[#0277BD] font-semibold text-white py-6"
          onClick={handleContinue}
        >
          Continue
        </Button>
        
        {/* Resend Link */}
        <p className="mt-4 text-sm text-gray-600">
          Didn't receive the email? 
          <button 
            className="ml-1 text-[#0288D1] font-semibold hover:underline"
            onClick={handleResend}
          >
            Click to resend
          </button>
        </p>
        
        {/* Back to Login */}
        <button 
          className="mt-6 flex items-center text-gray-600 hover:text-gray-800"
          onClick={handleBackToLogin}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to log in
        </button>
      </div>
    </div>
  );
};

// Main component that ties all screens together
const OTPVerificationFlow = () => {
  const [step, setStep] = useState('notification'); // notification, input, success
  
  const renderStep = () => {
    switch (step) {
      case 'notification':
        return <OTPNotification onNext={() => setStep('input')} />;
      case 'input':
        return <OTPInput onVerify={() => setStep('success')} />;
      case 'success':
        return <VerificationSuccess />;
      default:
        return <OTPNotification onNext={() => setStep('input')} />;
    }
  };
  
  return renderStep();
};

export default OTPVerificationFlow;