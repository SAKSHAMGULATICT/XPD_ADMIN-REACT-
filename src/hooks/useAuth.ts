// import { useAuthContext } from '../app/auth/auth-context';
// import { LoginRequest, OtpVerificationRequest } from '../app/models/auth-request';
// import { useLogin, useLogout, useOtpVerification, useCurrentUser, useHasRole, useHasPermission } from '../app/auth/auth-hooks';

// /**
//  * Central hook for authentication functionality
//  * This hook aggregates all auth-related hooks into a single interface
//  */
// export const useAuth = () => {
//   const { state } = useAuthContext();
//   const loginHook = useLogin();
//   const logoutHook = useLogout();
//   const otpHook = useOtpVerification();
  
//   // Get the current authenticated user
//   const user = useCurrentUser();
  
//   // Check if the user is authenticated
//   const isAuthenticated = state.isAuthenticated && !!state.token;
  
//   // Check if authentication is still loading
//   const isLoading = state.loading;
  
//   /**
//    * Login with email and password
//    */
//   const login = async (data: LoginRequest) => {
//     return loginHook.login(data);
//   };
  
//   /**
//    * Verify OTP code
//    */
//   const verifyOtp = async (data: OtpVerificationRequest) => {
//     return otpHook.verifyOtpCode(data);
//   };
  
//   /**
//    * Logout the current user
//    */
//   const logout = async () => {
//     return logoutHook.logout();
//   };
  
//   // Get role check function
//   const checkRole = useHasRole;
  
//   // Get permission check function
//   const checkPermission = useHasPermission;
  
//   /**
//    * Check if the user has a specific role
//    */
//   const hasRole = (role: string) => {
//     return user?.role === role;
//   };
  
//   /**
//    * Check if the user has a specific permission
//    */
//   const hasPermission = (permission: string) => {
//     return user?.permissions.includes(permission) || false;
//   };
  
//   return {
//     user,
//     isAuthenticated,
//     isLoading,
//     login,
//     logout,
//     verifyOtp,
//     loginError: loginHook.error,
//     otpError: otpHook.error,
//     hasRole,
//     hasPermission,
//     clearLoginError: loginHook.clearError,
//     clearOtpError: otpHook.clearError,
//   };
// };
