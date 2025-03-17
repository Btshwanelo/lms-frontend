// App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from '@/store';
import { OTPInput, OTPNotification, VerificationSuccess } from './pages/OTPVerificationFlow';
import ApplicationStartScreen from './pages/ApplicationStartScreen';
import LoadingScreenExact, { LoadingScreen, LoadingScreenWithCustomSpinner } from './pages/LoadingScreen';
import AssetsPage from './pages/AssetsPage';
import CongratulationsScreen from './pages/CongratulationsScreen';
import EligibilityErrorPage from './pages/EligibilityErrorPage ';
import UploadDocumentsScreen from './pages/UploadDocumentsScreen';
import DashboardPage from './pages/DashboardPage';
import SavedApplicationsPage from './pages/SavedApplicationsPage ';
import LoanApplicationConfirmation from './pages/LoanApplication';
import SelfieVerificationIntro from './pages/VerificationIntro';
import SelfieVerificationPage from './pages/PicturePage';
import Dashboard from './pages/v2/Dashboard';
import SignupForm from './pages/v2/SignupForm';
import ApplicationForm from './pages/v2/ApplicationForm';
import StatementsPage from './pages/Statements/StatementsPage';
import LogCasePage from './pages/Case/LogCasePage';
import NotFound from './pages/NotFound';
import ProtectedRoute from './HOC/ProtectedRoute';
import CreateProfilePage from './pages/CreateProfilePage';
import LandingPage from './pages/LandingPage';


function App() {
  return (
      <Router>
          <Routes>
            {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<CreateProfilePage />} />
              <Route path="/loader" element={<LoadingScreenExact />} />
              <Route path="/application" element={<AssetsPage />} />
              <Route path="/congrats" element={<CongratulationsScreen />} />
              <Route path="/error" element={<EligibilityErrorPage />} />
              <Route path="/upload" element={<UploadDocumentsScreen />} />
              <Route path="/confirm" element={<LoanApplicationConfirmation />} />
              <Route path="/saved-applications" element={<SavedApplicationsPage />} />

              <Route path="/sign-up" element={<SignupForm />} />
              <Route path="/otp-input" element={<OTPInput />} />
              <Route path="/app-form" element={<ApplicationForm />} />

              <Route path="/verify" element={<OTPNotification />} />
              <Route path="/user-verify" element={<SelfieVerificationIntro />} />
              <Route path="/user-verify-picture" element={<SelfieVerificationPage />} />
              <Route path="/verify/enter-otp" element={<OTPInput />} />
              <Route path="/verify/success" element={<VerificationSuccess />} />

              {/* Protected Routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              
              <Route 
                path="/create-profile" 
                element={
                  <ProtectedRoute>
                    <ApplicationStartScreen />
                  </ProtectedRoute>
                  } 
              />

              
              <Route 
                path="/email-verification" 
                element={
                  <ProtectedRoute>
                    <OTPNotification />
                  </ProtectedRoute>
                }
              />
              
              <Route 
                path="/statements" 
                element={
                  <ProtectedRoute>
                    <StatementsPage />
                  </ProtectedRoute>
                }
              />
              
              <Route 
                path="/case" 
                element={
                  <ProtectedRoute>
                    <LogCasePage />
                  </ProtectedRoute>
                }
              />
              
              <Route 
                path="/account" 
                element={
                  <ProtectedRoute>
                    <LogCasePage />
                  </ProtectedRoute>
                }
              />

              {/* Redirects and 404s */}
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;