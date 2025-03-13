import { setRedirectPath } from '@/slices/authSlice';
import { RootState } from '@/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface ProtectedRouteProps {
  children: JSX.Element;
}

interface DecodedToken {
  exp: number;
  nbf: number;
  // Add other token fields as needed
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const authDetails = useSelector((state: RootState) => state.auth);
  const { inProgressStep, isProfileComplete, isCreateProfile } = useSelector((state: RootState) => state.details);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isTokenValid, setIsTokenValid] = useState(true);

  useEffect(() => {
    const validateToken = () => {
      if (!authDetails.accessToken) {
        setIsTokenValid(false);
        return;
      }

      try {
        const decodedToken = jwtDecode<DecodedToken>(authDetails.accessToken);
        const currentTime = Math.floor(Date.now() / 1000);

        // Check if token is expired or not yet valid
        if (decodedToken.exp < currentTime || decodedToken.nbf > currentTime) {
          setIsTokenValid(false);
          return;
        }

        // Check if token is about to expire (e.g., in next 5 minutes)
        const expirationBuffer = 5 * 60; // 5 minutes in seconds
        if (decodedToken.exp - currentTime < expirationBuffer) {
          handleTokenRefresh();
        }

        setIsTokenValid(true);
      } catch (error) {
        console.error('Token validation error:', error);
        setIsTokenValid(false);
      }
    };

    validateToken();

    // Set up interval to check token validity
    const intervalId = setInterval(validateToken, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, [authDetails.accessToken]);

  const handleTokenRefresh = async () => {
    if (!authDetails.refreshToken) {
      setIsTokenValid(false);
      return;
    }

    try {
      const response = await fetch('https://login.ezra360.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh_token: authDetails.refreshToken,
          client_id: 'xrm-password-auth',
          grant_type: 'refresh_token',
        }),
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data = await response.json();
      // Update your Redux store with the new tokens
      // You'll need to create an action for this
      dispatch({
        type: 'auth/updateTokens',
        payload: {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        },
      });
    } catch (error) {
      console.error('Token refresh error:', error);
      setIsTokenValid(false);
    }
  };

  // Handle invalid token
  if (!isTokenValid) {
    dispatch(setRedirectPath(location.pathname));
    return <Navigate to="/login" replace />;
  }

  // Handle other authentication checks
  if (!authDetails.isAuthenticated) {
    dispatch(setRedirectPath(location.pathname));
    return <Navigate to="/login" replace />;
  }

  if (isCreateProfile) {
    if (location.pathname !== '/profile/create') {
      return <Navigate to="/profile/create" />;
    }
  }

  if (inProgressStep?.step !== 0 && isProfileComplete === false) {
    if (location.pathname !== '/onboarding') {
      return <Navigate to="/onboarding" />;
    }
  }

  return children;
}

export default ProtectedRoute;
