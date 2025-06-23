import { QueryClient } from '@tanstack/react-query';

/**
 * Configure the global QueryClient instance
 * This client will be used by the QueryClientProvider
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Only retry failed queries once by default
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
      gcTime: 10 * 60 * 1000, // Unused data is garbage collected after 10 minutes
    },
    mutations: {
      retry: 1, // Only retry failed mutations once by default
    },
  },
});
