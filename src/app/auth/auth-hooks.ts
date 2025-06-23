// import { useState, useCallback } from 'react';
// import { useAuthContext } from './auth-context';
// import { LoginRequest, OtpVerificationRequest } from '../models/auth-request';
// import { loginUser, verifyOtp, logoutUser } from './auth-service';
// import { UserInfo } from '../models/login-response';

// /**
//  * Custom hook for handling login functionality
//  */
// export const useLogin = () => {
//   const { login: authLogin, setLoading } = useAuthContext();
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const login = useCallback(
//     async (loginData: LoginRequest) => {
//       setIsLoading(true);
//       setError(null);
//       setLoading(true);

//       try {
//         const response = await loginUser(loginData);
//         if (response.success) {
//           authLogin(response.user, response.token, response.refreshToken);
//           return true;
//         } else {
//           setError(response.message || 'Login failed');
//           return false;
//         }
//       } catch (err) {
//         const errorMessage = err instanceof Error ? err.message : 'Login failed';
//         setError(errorMessage);
//         return false;
//       } finally {
//         setIsLoading(false);
//         setLoading(false);
//       }
//     },
//     [authLogin, setLoading]
//   );

//   const clearError = useCallback(() => {
//     setError(null);
//   }, []);

//   return { login, isLoading, error, clearError };
// };

// /**
//  * Custom hook for handling OTP verification
//  */
// export const useOtpVerification = () => {
//   const { login: authLogin, setLoading } = useAuthContext();
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const verifyOtpCode = useCallback(
//     async (verificationData: OtpVerificationRequest) => {
//       setIsLoading(true);
//       setError(null);
//       setLoading(true);

//       try {
//         const response = await verifyOtp(verificationData);
//         if (response.success) {
//           authLogin(response.user, response.token, response.refreshToken);
//           return true;
//         } else {
//           setError(response.message || 'OTP verification failed');
//           return false;
//         }
//       } catch (err) {
//         const errorMessage = err instanceof Error ? err.message : 'OTP verification failed';
//         setError(errorMessage);
//         return false;
//       } finally {
//         setIsLoading(false);
//         setLoading(false);
//       }
//     },
//     [authLogin, setLoading]
//   );

//   const clearError = useCallback(() => {
//     setError(null);
//   }, []);

//   return { verifyOtpCode, isLoading, error, clearError };
// };

// /**
//  * Custom hook for handling logout
//  */
// export const useLogout = () => {
//   const { logout: authLogout, state } = useAuthContext();
//   const [isLoading, setIsLoading] = useState(false);

//   const logout = useCallback(async () => {
//     setIsLoading(true);

//     try {
//       if (state.token) {
//         await logoutUser(state.token);
//       }
//     } catch (error) {
//       console.error('Logout API error:', error);
//     } finally {
//       // Always logout from the client side, even if the API call fails
//       authLogout();
//       setIsLoading(false);
//     }
//   }, [authLogout, state.token]);

//   return { logout, isLoading };
// };

// /**
//  * Custom hook to check if the user has a specific role
//  */
// export const useHasRole = (requiredRole: string) => {
//   const { state } = useAuthContext();
  
//   return state.user?.role === requiredRole;
// };

// /**
//  * Custom hook to check if the user has specific permissions
//  */
// export const useHasPermission = (requiredPermission: string) => {
//   const { state } = useAuthContext();
  
//   return state.user?.permissions.includes(requiredPermission) || false;
// };

// /**
//  * Custom hook to get current user information
//  */
// export const useCurrentUser = (): UserInfo | null => {
//   const { state } = useAuthContext();
  
//   return state.user;
// };
