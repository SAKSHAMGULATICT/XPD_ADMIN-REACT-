// import { useState, useCallback } from 'react';
// import apiService, { ApiResponse } from '../services/api.service';
// import { ApiStatus } from '../api-url/enum.constants';

// /**
//  * Generic hook for making API calls with loading and error state management
//  */
// export function useApi<T>() {
//   const [status, setStatus] = useState<ApiStatus>(ApiStatus.IDLE);
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   /**
//    * Generic GET request with state management
//    */
//   const get = useCallback(
//     async (url: string, params?: Record<string, any>) => {
//       try {
//         setStatus(ApiStatus.LOADING);
//         setError(null);

//         const response: ApiResponse<T> = await apiService.get<T>(url, params);

//         if (response.success && response.data) {
//           setData(response.data);
//           setStatus(ApiStatus.SUCCESS);
//           return response.data;
//         } else {
//           setError(response.error || 'An error occurred');
//           setStatus(ApiStatus.ERROR);
//           return null;
//         }
//       } catch (err) {
//         const errorMessage = err instanceof Error ? err.message : 'An error occurred';
//         setError(errorMessage);
//         setStatus(ApiStatus.ERROR);
//         return null;
//       }
//     },
//     []
//   );

//   /**
//    * Generic POST request with state management
//    */
//   const post = useCallback(
//     async (url: string, requestData?: any) => {
//       try {
//         setStatus(ApiStatus.LOADING);
//         setError(null);

//         const response: ApiResponse<T> = await apiService.post<T>(url, requestData);

//         if (response.success && response.data) {
//           setData(response.data);
//           setStatus(ApiStatus.SUCCESS);
//           return response.data;
//         } else {
//           setError(response.error || 'An error occurred');
//           setStatus(ApiStatus.ERROR);
//           return null;
//         }
//       } catch (err) {
//         const errorMessage = err instanceof Error ? err.message : 'An error occurred';
//         setError(errorMessage);
//         setStatus(ApiStatus.ERROR);
//         return null;
//       }
//     },
//     []
//   );

//   /**
//    * Generic PUT request with state management
//    */
//   const put = useCallback(
//     async (url: string, requestData?: any) => {
//       try {
//         setStatus(ApiStatus.LOADING);
//         setError(null);

//         const response: ApiResponse<T> = await apiService.put<T>(url, requestData);

//         if (response.success && response.data) {
//           setData(response.data);
//           setStatus(ApiStatus.SUCCESS);
//           return response.data;
//         } else {
//           setError(response.error || 'An error occurred');
//           setStatus(ApiStatus.ERROR);
//           return null;
//         }
//       } catch (err) {
//         const errorMessage = err instanceof Error ? err.message : 'An error occurred';
//         setError(errorMessage);
//         setStatus(ApiStatus.ERROR);
//         return null;
//       }
//     },
//     []
//   );

//   /**
//    * Generic DELETE request with state management
//    */
//   const del = useCallback(
//     async (url: string) => {
//       try {
//         setStatus(ApiStatus.LOADING);
//         setError(null);

//         const response: ApiResponse<T> = await apiService.delete(url);

//         if (response.success) {
//           setData(null);
//           setStatus(ApiStatus.SUCCESS);
//           return true;
//         } else {
//           setError(response.error || 'An error occurred');
//           setStatus(ApiStatus.ERROR);
//           return false;
//         }
//       } catch (err) {
//         const errorMessage = err instanceof Error ? err.message : 'An error occurred';
//         setError(errorMessage);
//         setStatus(ApiStatus.ERROR);
//         return false;
//       }
//     },
//     []
//   );

//   /**
//    * Reset state to initial values
//    */
//   const reset = useCallback(() => {
//     setStatus(ApiStatus.IDLE);
//     setData(null);
//     setError(null);
//   }, []);

//   return {
//     data,
//     error,
//     status,
//     isIdle: status === ApiStatus.IDLE,
//     isLoading: status === ApiStatus.LOADING,
//     isSuccess: status === ApiStatus.SUCCESS,
//     isError: status === ApiStatus.ERROR,
//     get,
//     post,
//     put,
//     delete: del,
//     reset,
//   };
// }
