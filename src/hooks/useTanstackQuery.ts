// import { 
//   useQuery, 
//   useMutation, 
//   useQueryClient,
//   UseQueryOptions,
//   UseMutationOptions,
//   QueryKey
// } from '@tanstack/react-query';
// // import apiService, { ApiResponse } from '../services/api.service';

// /**
//  * Custom hook for data fetching using TanStack Query
//  * @param queryKey - Unique key for the query
//  * @param url - API endpoint URL
//  * @param params - Query parameters
//  * @param options - Additional query options
//  * @returns Query result with data, loading state, and error handling
//  */
// export function useDataQuery<T>(
//   queryKey: QueryKey,
//   url: string,
//   params?: Record<string, any>,
//   options?: UseQueryOptions<ApiResponse<T>, Error, T>
// ) {
//   return useQuery<ApiResponse<T>, Error, T>({
//     queryKey,
//     queryFn: async () => await apiService.get<T>(url, params),
//     select: (data) => data.data as T,
//     ...options,
//   });
// }

// /**
//  * Custom hook for creating data using TanStack Query
//  * @param url - API endpoint URL
//  * @param options - Additional mutation options
//  * @returns Mutation result with mutation function and states
//  */
// export function useCreateMutation<T, D = any>(
//   url: string,
//   options?: UseMutationOptions<ApiResponse<T>, Error, D>
// ) {
//   const queryClient = useQueryClient();
  
//   return useMutation<ApiResponse<T>, Error, D>({
//     mutationFn: async (data) => await apiService.post<T>(url, data),
//     onSuccess: () => {
//       // You can invalidate queries here to refetch data
//       // queryClient.invalidateQueries({ queryKey: ['some-key'] });
//     },
//     ...options,
//   });
// }

// /**
//  * Custom hook for updating data using TanStack Query
//  * @param url - API endpoint URL
//  * @param options - Additional mutation options
//  * @returns Mutation result with mutation function and states
//  */
// export function useUpdateMutation<T, D = any>(
//   url: string,
//   options?: UseMutationOptions<ApiResponse<T>, Error, D>
// ) {
//   const queryClient = useQueryClient();
  
//   return useMutation<ApiResponse<T>, Error, D>({
//     mutationFn: async (data) => await apiService.put<T>(url, data),
//     onSuccess: () => {
//       // You can invalidate queries here to refetch data
//       // queryClient.invalidateQueries({ queryKey: ['some-key'] });
//     },
//     ...options,
//   });
// }

// /**
//  * Custom hook for deleting data using TanStack Query
//  * @param url - API endpoint URL
//  * @param options - Additional mutation options
//  * @returns Mutation result with mutation function and states
//  */
// export function useDeleteMutation<T>(
//   url: string,
//   options?: UseMutationOptions<ApiResponse<T>, Error, string>
// ) {
//   const queryClient = useQueryClient();
  
//   return useMutation<ApiResponse<T>, Error, string>({
//     mutationFn: async (id) => await apiService.delete<T>(`${url}/${id}`),
//     onSuccess: () => {
//       // You can invalidate queries here to refetch data
//       // queryClient.invalidateQueries({ queryKey: ['some-key'] });
//     },
//     ...options,
//   });
// }

// /**
//  * Custom hook for fetching data with infinite loading using TanStack Query
//  * This is useful for pagination, infinite scrolling, etc.
//  * @param queryKey - Unique key for the query
//  * @param url - API endpoint URL
//  * @param getNextPageParam - Function to get the next page parameter
//  * @param options - Additional query options
//  * @returns Infinite query result with data, loading state, and fetch more function
//  */
// export function useInfiniteDataQuery<T>(
//   queryKey: QueryKey,
//   url: string,
//   getNextPageParam: (lastPage: ApiResponse<T>) => any,
//   options?: any
// ) {
//   return useQuery({
//     queryKey,
//     queryFn: async ({ pageParam = 1 }) => {
//       return await apiService.get<T>(url, { page: pageParam });
//     },
//     getNextPageParam,
//     ...options,
//   });
// }
