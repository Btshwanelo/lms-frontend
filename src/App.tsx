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

// Auth Guard Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // This is a simple check. In a real app, you'd use Redux state to check auth status
  const isAuthenticated = localStorage.getItem('auth_token') !== null;
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
          <Routes>
            {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/create-profile" element={<CreateProfilePage />} />
              <Route path="/start-application" element={<ApplicationStartScreen />} />
              <Route path="/loader" element={<LoadingScreenExact />} />
              <Route path="/application" element={<AssetsPage />} />
              <Route path="/congrats" element={<CongratulationsScreen />} />
              <Route path="/error" element={<EligibilityErrorPage />} />
              <Route path="/upload" element={<UploadDocumentsScreen />} />
              <Route path="/dash" element={<DashboardPage />} />

              <Route path="/verify" element={<OTPNotification />} />
  <Route path="/verify/enter-otp" element={<OTPInput />} />
  <Route path="/verify/success" element={<VerificationSuccess />} />

              <Route path="about" element={<div>About Us Page</div>} />
              <Route path="contact" element={<div>Contact Page</div>} />
              <Route path="pricing" element={<div>Pricing Page</div>} />
              <Route path="blog" element={<div>Blog Page</div>} />
              <Route path="blog/:id" element={<div>Blog Detail Page</div>} />
            

            {/* Auth Routes */}
              {/* <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} /> */}
              <Route path="reset-password/:token" element={<div>Reset Password Page</div>} />
            

            {/* Protected Routes */}
            {/* <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            > */}
              {/* <Route index element={<Dashboard />} />
              <Route path="loans" element={<LoansList />} />
              <Route path="loans/:id" element={<LoanDetails />} />
              <Route path="apply" element={<LoanApplication />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} /> */}
              <Route path="notifications" element={<div>Notifications Page</div>} />
              <Route path="documents" element={<div>Documents Page</div>} />
              <Route path="payments" element={<div>Payments History Page</div>} />
              <Route path="calculator" element={<div>Loan Calculator Page</div>} />
            {/* </Route> */}

            {/* Admin Routes - would typically have an additional AdminRoute guard */}
            {/* <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <DashboardLayout isAdmin={true} />
                </ProtectedRoute>
              }
            > */}
              {/* <Route index element={<div>Admin Dashboard</div>} /> */}
              <Route path="users" element={<div>Users Management</div>} />
              <Route path="loans" element={<div>Loans Management</div>} />
              <Route path="reports" element={<div>Reports</div>} />
              <Route path="settings" element={<div>Admin Settings</div>} />
            {/* </Route> */}

            {/* Error Routes */}
            <Route path="unauthorized" element={<div>Unauthorized Access</div>} />
            <Route path="maintenance" element={<div>Site Under Maintenance</div>} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;