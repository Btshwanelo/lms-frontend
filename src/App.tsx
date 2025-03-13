// App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

// Layout Components
// import MainLayout from './layouts/MainLayout';
// import DashboardLayout from './layouts/DashboardLayout';
// import AuthLayout from './layouts/AuthLayout';

// Pages - Using React.lazy for code splitting
const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const CreateProfilePage = React.lazy(() => import('./pages/CreateProfilePage'));
// const Login = React.lazy(() => import('./pages/auth/Login'));
// const Register = React.lazy(() => import('./pages/auth/Register'));
// const ForgotPassword = React.lazy(() => import('./pages/auth/ForgotPassword'));
// const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
// const LoanApplication = React.lazy(() => import('./pages/loans/LoanApplication'));
// const LoanDetails = React.lazy(() => import('./pages/loans/LoanDetails'));
// const LoansList = React.lazy(() => import('./pages/loans/LoansList'));
// const Profile = React.lazy(() => import('./pages/user/Profile'));
// const Settings = React.lazy(() => import('./pages/user/Settings'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
          <Routes>
            {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<CreateProfilePage />} />
              <Route path="/start-application" element={<ApplicationStartScreen />} />
              <Route path="/loader" element={<LoadingScreenExact />} />
              <Route path="/application" element={<AssetsPage />} />
              <Route path="/congrats" element={<CongratulationsScreen />} />
              <Route path="/error" element={<EligibilityErrorPage />} />
              <Route path="/upload" element={<UploadDocumentsScreen />} />
              <Route path="/dash" element={<DashboardPage />} />
              <Route path="/confirm" element={<LoanApplicationConfirmation />} />
              <Route path="/saved-applications" element={<SavedApplicationsPage />} />


              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sign-up" element={<SignupForm />} />
              <Route path="/otp-input" element={<OTPInput />} />
              <Route path="/app-form" element={<ApplicationForm />} />

              <Route path="/verify" element={<OTPNotification />} />
              <Route path="/user-verify" element={<SelfieVerificationIntro />} />
              <Route path="/user-verify-picture" element={<SelfieVerificationPage />} />
              <Route path="/verify/enter-otp" element={<OTPInput />} />
              <Route path="/verify/success" element={<VerificationSuccess />} />
              <Route path="/statements" element={<StatementsPage />} />
              <Route path="/case" element={<LogCasePage />} />
              <Route path="/account" element={<LogCasePage />} />



            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />


            {/* Redirects and 404s */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;