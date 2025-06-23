// import apiService from '../../../services/api.service';
// import { environment } from '../../../environments/environment';

// /**
//  * Base API URL
//  */
// const API_BASE_URL = environment.apiUrl;

// /**
//  * Generic response interface for XPD service
//  */
// export interface XpdResponse<T = any> {
//   success: boolean;
//   data?: T;
//   message?: string;
//   statusCode?: number;
// }

// /**
//  * XPD Service - Main service for XPD layout
//  * Handles API calls for dashboard, company, buyer, and other features
//  */
// export const xpdService = {
//   /**
//    * Get dashboard data
//    * @returns Dashboard statistics and data
//    */
//   getDashboardData: async (): Promise<XpdResponse<any>> => {
//     try {
//       const response = await apiService.get(`${API_BASE_URL}/dashboard`);
//       return response;
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//       return {
//         success: false,
//         message: 'Failed to fetch dashboard data',
//       };
//     }
//   },
  
//   /**
//    * Get companies list with optional filtering and pagination
//    * @param page Page number
//    * @param limit Items per page
//    * @param filters Optional filter criteria
//    * @returns Paginated list of companies
//    */
//   getCompanies: async (
//     page: number = 1,
//     limit: number = 10,
//     filters?: Record<string, any>
//   ): Promise<XpdResponse<any>> => {
//     try {
//       const params = {
//         page,
//         limit,
//         ...filters,
//       };
      
//       const response = await apiService.get(`${API_BASE_URL}/companies`, params);
//       return response;
//     } catch (error) {
//       console.error('Error fetching companies:', error);
//       return {
//         success: false,
//         message: 'Failed to fetch companies',
//       };
//     }
//   },
  
//   /**
//    * Get company details by ID
//    * @param id Company ID
//    * @returns Company details
//    */
//   getCompanyById: async (id: string): Promise<XpdResponse<any>> => {
//     try {
//       const response = await apiService.get(`${API_BASE_URL}/companies/${id}`);
//       return response;
//     } catch (error) {
//       console.error(`Error fetching company with ID ${id}:`, error);
//       return {
//         success: false,
//         message: 'Failed to fetch company details',
//       };
//     }
//   },
  
//   /**
//    * Get buyers list with optional filtering and pagination
//    * @param page Page number
//    * @param limit Items per page
//    * @param filters Optional filter criteria
//    * @returns Paginated list of buyers
//    */
//   getBuyers: async (
//     page: number = 1,
//     limit: number = 10,
//     filters?: Record<string, any>
//   ): Promise<XpdResponse<any>> => {
//     try {
//       const params = {
//         page,
//         limit,
//         ...filters,
//       };
      
//       const response = await apiService.get(`${API_BASE_URL}/buyers`, params);
//       return response;
//     } catch (error) {
//       console.error('Error fetching buyers:', error);
//       return {
//         success: false,
//         message: 'Failed to fetch buyers',
//       };
//     }
//   },
  
//   /**
//    * Get buyer details by ID
//    * @param id Buyer ID
//    * @returns Buyer details
//    */
//   getBuyerById: async (id: string): Promise<XpdResponse<any>> => {
//     try {
//       const response = await apiService.get(`${API_BASE_URL}/buyers/${id}`);
//       return response;
//     } catch (error) {
//       console.error(`Error fetching buyer with ID ${id}:`, error);
//       return {
//         success: false,
//         message: 'Failed to fetch buyer details',
//       };
//     }
//   },
  
//   /**
//    * Get data posting list with optional filtering and pagination
//    * @param page Page number
//    * @param limit Items per page
//    * @param filters Optional filter criteria
//    * @returns Paginated list of data postings
//    */
//   getDataPostings: async (
//     page: number = 1,
//     limit: number = 10,
//     filters?: Record<string, any>
//   ): Promise<XpdResponse<any>> => {
//     try {
//       const params = {
//         page,
//         limit,
//         ...filters,
//       };
      
//       const response = await apiService.get(`${API_BASE_URL}/data-postings`, params);
//       return response;
//     } catch (error) {
//       console.error('Error fetching data postings:', error);
//       return {
//         success: false,
//         message: 'Failed to fetch data postings',
//       };
//     }
//   },
  
//   /**
//    * Get user upload list with optional filtering and pagination
//    * @param page Page number
//    * @param limit Items per page
//    * @param filters Optional filter criteria
//    * @returns Paginated list of user uploads
//    */
//   getUserUploads: async (
//     page: number = 1,
//     limit: number = 10,
//     filters?: Record<string, any>
//   ): Promise<XpdResponse<any>> => {
//     try {
//       const params = {
//         page,
//         limit,
//         ...filters,
//       };
      
//       const response = await apiService.get(`${API_BASE_URL}/user-uploads`, params);
//       return response;
//     } catch (error) {
//       console.error('Error fetching user uploads:', error);
//       return {
//         success: false,
//         message: 'Failed to fetch user uploads',
//       };
//     }
//   },
  
//   /**
//    * Get CD data with optional filtering and pagination
//    * @param page Page number
//    * @param limit Items per page
//    * @param filters Optional filter criteria
//    * @returns Paginated list of CD data
//    */
//   getCDData: async (
//     page: number = 1,
//     limit: number = 10,
//     filters?: Record<string, any>
//   ): Promise<XpdResponse<any>> => {
//     try {
//       const params = {
//         page,
//         limit,
//         ...filters,
//       };
      
//       const response = await apiService.get(`${API_BASE_URL}/cd`, params);
//       return response;
//     } catch (error) {
//       console.error('Error fetching CD data:', error);
//       return {
//         success: false,
//         message: 'Failed to fetch CD data',
//       };
//     }
//   },
// };

// export default xpdService;
