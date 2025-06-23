// import { useCreateMutation, useDataQuery } from '../../../../hooks/useTanstackQuery';
// import { DATA_POSTING_URLS } from '../../../../api-url/url.constants';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Types for data posting
// export interface UploadRecord {
//   id: string;
//   fileName: string;
//   fileType: string;
//   fileSize: string;
//   status: 'Processed' | 'Processing' | 'Failed';
//   uploadedAt: string;
//   errors?: string[];
// }

// export interface UploadHistoryResponse {
//   items: UploadRecord[];
//   totalItems: number;
//   currentPage: number;
//   totalPages: number;
// }

// export interface UploadTemplateItem {
//   id: string;
//   name: string;
//   description: string;
//   format: string;
//   url: string;
// }

// /**
//  * Custom hook for data posting functionality
//  * Provides methods for uploading files and fetching upload history
//  */
// export const useDataPosting = () => {
//   const navigate = useNavigate();
//   const [uploadProgress, setUploadProgress] = useState(0);
  
//   // Fetch upload history
//   const uploadHistoryQuery = useDataQuery<UploadHistoryResponse>(
//     ['data-posting-history'],
//     DATA_POSTING_URLS.LIST
//   );
  
//   // Upload file mutation
//   const uploadMutation = useCreateMutation<any, FormData>(
//     DATA_POSTING_URLS.UPLOAD,
//     {
//       onSuccess: () => {
//         // Reset progress and navigate back to dashboard
//         setUploadProgress(100);
//         setTimeout(() => {
//           navigate('/data-posting');
//         }, 1000);
//       },
//       onError: () => {
//         // Reset progress on error
//         setUploadProgress(0);
//       }
//     }
//   );
  
//   // Simulate upload progress
//   const simulateProgress = () => {
//     setUploadProgress(0);
    
//     const interval = setInterval(() => {
//       setUploadProgress((prevProgress) => {
//         if (prevProgress >= 95 || !uploadMutation.isPending) {
//           clearInterval(interval);
//           return prevProgress;
//         }
//         return prevProgress + 5;
//       });
//     }, 300);
//   };
  
//   // Upload file
//   const uploadFile = (file: File) => {
//     if (!file) return;
    
//     // Create FormData for file upload
//     const formData = new FormData();
//     formData.append('file', file);
    
//     // Start progress simulation
//     simulateProgress();
    
//     // Send the upload request
//     uploadMutation.mutate(formData);
//   };
  
//   // Get available templates
//   const getTemplates = (): UploadTemplateItem[] => {
//     return [
//       { id: '1', name: 'Company Data Template', description: 'Template for uploading company information', format: 'CSV', url: '/templates/company_template.csv' },
//       { id: '2', name: 'Buyer Data Template', description: 'Template for uploading buyer information', format: 'CSV', url: '/templates/buyer_template.csv' },
//       { id: '3', name: 'Transaction Data Template', description: 'Template for uploading transaction records', format: 'CSV', url: '/templates/transaction_template.csv' },
//       { id: '4', name: 'Product Data Template', description: 'Template for uploading product information', format: 'CSV', url: '/templates/product_template.csv' },
//     ];
//   };
  
//   return {
//     // Upload functionality
//     uploadFile,
//     uploadProgress,
//     isUploading: uploadMutation.isPending,
//     uploadError: uploadMutation.error,
    
//     // History data
//     uploadHistory: uploadHistoryQuery.data?.items || [],
//     isLoadingHistory: uploadHistoryQuery.isLoading,
//     historyError: uploadHistoryQuery.error,
    
//     // Templates
//     templates: getTemplates(),
    
//     // Reset progress
//     resetProgress: () => setUploadProgress(0)
//   };
// };
