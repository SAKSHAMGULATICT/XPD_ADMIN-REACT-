// import apiService, { ApiResponse } from '../../../../services/api.service';
// import { DATA_POSTING_URLS } from '../../../../api-url/url.constants';
// import { UploadRecord, UploadHistoryResponse } from '../hooks/useDataPosting';

// /**
//  * Data Posting Service
//  * Provides methods for interacting with data posting API endpoints
//  */
// class DataPostingService {
//   /**
//    * Get upload history
//    * @param page Page number
//    * @param pageSize Number of records per page
//    * @returns Upload history response
//    */
//   async getUploadHistory(
//     page: number = 1,
//     pageSize: number = 10
//   ): Promise<ApiResponse<UploadHistoryResponse>> {
//     return await apiService.get<UploadHistoryResponse>(DATA_POSTING_URLS.LIST, {
//       page,
//       pageSize,
//     });
//   }

//   /**
//    * Get upload details
//    * @param id Upload record ID
//    * @returns Upload record details
//    */
//   async getUploadDetails(id: string): Promise<ApiResponse<UploadRecord>> {
//     const url = DATA_POSTING_URLS.DETAILS(id);
//     return await apiService.get<UploadRecord>(url);
//   }

//   /**
//    * Upload file for data posting
//    * @param file File to upload
//    * @param type File type (company, buyer, etc.)
//    * @returns Upload response
//    */
//   async uploadFile(
//     file: File,
//     type?: string
//   ): Promise<ApiResponse<{ id: string; status: string }>> {
//     const formData = new FormData();
//     formData.append('file', file);
    
//     if (type) {
//       formData.append('type', type);
//     }

//     // Use custom config for file upload to handle FormData properly
//     const config = {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     };

//     return await apiService.post(DATA_POSTING_URLS.UPLOAD, formData, config);
//   }

//   /**
//    * Delete an upload record
//    * @param id Upload record ID
//    * @returns Delete response
//    */
//   async deleteUpload(id: string): Promise<ApiResponse<void>> {
//     const url = DATA_POSTING_URLS.DETAILS(id);
//     return await apiService.delete(url);
//   }

//   /**
//    * Retry a failed upload
//    * @param id Upload record ID to retry
//    * @returns Retry response
//    */
//   async retryUpload(id: string): Promise<ApiResponse<{ status: string }>> {
//     const url = `${DATA_POSTING_URLS.DETAILS(id)}/retry`;
//     return await apiService.post(url);
//   }

//   /**
//    * Download a template file
//    * @param templateType Template type (company, buyer, etc.)
//    * @returns Template file blob
//    */
//   async downloadTemplate(
//     templateType: string
//   ): Promise<ApiResponse<Blob>> {
//     const url = `${DATA_POSTING_URLS.LIST}/templates/${templateType}`;
    
//     const config = {
//       responseType: 'blob' as 'blob',
//     };

//     return await apiService.get<Blob>(url, {}, config);
//   }
// }

// export default new DataPostingService();
