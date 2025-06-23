// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import { environment } from '../environments/environment';
// // import { APP_CONSTANTS, ERROR_MESSAGES } from '../api-url/app.constants';

// // Default API configuration
// // const apiConfig: AxiosRequestConfig = {
// //   baseURL: environment.apiUrl,
// //   timeout: APP_CONSTANTS.API_TIMEOUT,
// //   headers: {
// //     'Content-Type': 'application/json',
// //     Accept: 'application/json',
// //   },
// // };

// // Create axios instance with default config
// const apiClient = axios.create(apiConfig);

// /**
//  * General API response interface
//  */
// export interface ApiResponse<T = any> {
//   success: boolean;
//   data?: T;
//   error?: string;
//   statusCode?: number;
// }

// /**
//  * Generic GET request
//  * @param url API endpoint
//  * @param params URL parameters
//  * @param config Axios request configuration
//  * @returns Promise with response data
//  */
// export const get = async <T>(
//   url: string,
//   params?: Record<string, any>,
//   config?: AxiosRequestConfig
// ): Promise<ApiResponse<T>> => {
//   try {
//     const response: AxiosResponse<T> = await apiClient.get(url, {
//       ...config,
//       params,
//     });
//     return {
//       success: true,
//       data: response.data,
//       statusCode: response.status,
//     };
//   } catch (error) {
//     return handleApiError<T>(error as AxiosError);
//   }
// };

// /**
//  * Generic POST request
//  * @param url API endpoint
//  * @param data Request body
//  * @param config Axios request configuration
//  * @returns Promise with response data
//  */
// export const post = async <T>(
//   url: string,
//   data?: any,
//   config?: AxiosRequestConfig
// ): Promise<ApiResponse<T>> => {
//   try {
//     const response: AxiosResponse<T> = await apiClient.post(url, data, config);
//     return {
//       success: true,
//       data: response.data,
//       statusCode: response.status,
//     };
//   } catch (error) {
//     return handleApiError<T>(error as AxiosError);
//   }
// };

// /**
//  * Generic PUT request
//  * @param url API endpoint
//  * @param data Request body
//  * @param config Axios request configuration
//  * @returns Promise with response data
//  */
// export const put = async <T>(
//   url: string,
//   data?: any,
//   config?: AxiosRequestConfig
// ): Promise<ApiResponse<T>> => {
//   try {
//     const response: AxiosResponse<T> = await apiClient.put(url, data, config);
//     return {
//       success: true,
//       data: response.data,
//       statusCode: response.status,
//     };
//   } catch (error) {
//     return handleApiError<T>(error as AxiosError);
//   }
// };

// /**
//  * Generic DELETE request
//  * @param url API endpoint
//  * @param config Axios request configuration
//  * @returns Promise with response data
//  */
// export const del = async <T>(
//   url: string,
//   config?: AxiosRequestConfig
// ): Promise<ApiResponse<T>> => {
//   try {
//     const response: AxiosResponse<T> = await apiClient.delete(url, config);
//     return {
//       success: true,
//       data: response.data,
//       statusCode: response.status,
//     };
//   } catch (error) {
//     return handleApiError<T>(error as AxiosError);
//   }
// };

// /**
//  * Handle API errors
//  * @param error Axios error
//  * @returns Formatted API response with error details
//  */
// // const handleApiError = <T>(error: AxiosError): ApiResponse<T> => {
// //   // Handle Axios errors
// //   if (error.response) {
// //     // Server responded with an error status
// //     const responseData = error.response.data as any;
// //     return {
// //       success: false,
// //       error: responseData.message || responseData.error || ERROR_MESSAGES.GENERAL_ERROR,
// //       statusCode: error.response.status,
// //     };
// //   } else if (error.request) {
// //     // No response received from server
// //     return {
// //       success: false,
// //       error: ERROR_MESSAGES.NETWORK_ERROR,
// //       statusCode: 0,
// //     };
// //   } else {
// //     // Error setting up the request
// //     return {
// //       success: false,
// //       error: error.message || ERROR_MESSAGES.GENERAL_ERROR,
// //       statusCode: 0,
// //     };
// //   }
// // };

// export default {
//   get,
//   post,
//   put,
//   delete: del,
//   client: apiClient,
// };
