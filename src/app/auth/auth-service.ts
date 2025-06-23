// import axios from 'axios';
// import { LoginRequest, OtpVerificationRequest } from '../models/auth-request';
// import { LoginResponse, OtpVerificationResponse } from '../models/login-response';
// import { AUTH_URLS } from '../../api-url/url.constants';

// /**
//  * Login user with email and password
//  * @param loginData Login request data
//  * @returns Login response with token and user info
//  */
// export const loginUser = async (loginData: LoginRequest): Promise<LoginResponse> => {
//   try {
//     const response = await axios.post<LoginResponse>(AUTH_URLS.LOGIN, loginData);
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error) && error.response) {
//       return error.response.data as LoginResponse;
//     }
//     throw new Error('Failed to login. Please check your internet connection.');
//   }
// };

// /**
//  * Verify OTP code
//  * @param verificationData OTP verification data
//  * @returns Verification response with token and user info
//  */
// export const verifyOtp = async (
//   verificationData: OtpVerificationRequest
// ): Promise<OtpVerificationResponse> => {
//   try {
//     const response = await axios.post<OtpVerificationResponse>(
//       AUTH_URLS.VERIFY_OTP,
//       verificationData
//     );
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error) && error.response) {
//       return error.response.data as OtpVerificationResponse;
//     }
//     throw new Error('Failed to verify OTP. Please check your internet connection.');
//   }
// };

// /**
//  * Logout user
//  * @param token Authentication token
//  * @returns True if logout was successful
//  */
// export const logoutUser = async (token: string): Promise<boolean> => {
//   try {
//     await axios.post(
//       AUTH_URLS.LOGOUT,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return true;
//   } catch (error) {
//     console.error('Logout error:', error);
//     return false;
//   }
// };

// /**
//  * Refresh authentication token
//  * @param refreshToken Refresh token
//  * @returns New authentication token and refresh token
//  */
// export const refreshAuthToken = async (refreshToken: string) => {
//   try {
//     const response = await axios.post(AUTH_URLS.REFRESH_TOKEN, { refreshToken });
//     return response.data;
//   } catch (error) {
//     console.error('Token refresh error:', error);
//     throw error;
//   }
// };

// /**
//  * Setup authentication interceptors
//  * @param getToken Function to get the current token
//  * @param refreshToken Function to refresh the token
//  * @param logout Function to logout the user
//  */
// export const setupAuthInterceptors = (
//   getToken: () => string | null,
//   refreshToken: () => Promise<void>,
//   logout: () => void
// ) => {
//   // Add request interceptor
//   axios.interceptors.request.use(
//     (config) => {
//       const token = getToken();
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   // Add response interceptor
//   axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;

//       // If the error is 401 and we haven't already tried to refresh the token
//       if (error.response?.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;

//         try {
//           // Try to refresh the token
//           await refreshToken();
          
//           // Update the authorization header
//           originalRequest.headers.Authorization = `Bearer ${getToken()}`;
          
//           // Retry the original request
//           return axios(originalRequest);
//         } catch (refreshError) {
//           // If refreshing the token fails, logout the user
//           logout();
//           return Promise.reject(refreshError);
//         }
//       }

//       return Promise.reject(error);
//     }
//   );
// };
