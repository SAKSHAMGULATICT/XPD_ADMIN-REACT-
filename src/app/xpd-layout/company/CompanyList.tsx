// import React, { useState } from 'react';
// import { Card } from '@cleartax/truss/card';
// import { Button } from '@cleartax/truss/button';
// import { Input } from '@cleartax/truss/input';
// import { useLayout } from '../contexts/LayoutContext';
// import { useDataQuery } from '../../../hooks/useTanstackQuery';
// import { COMPANY_URLS } from '../../../api-url/url.constants';

// /**
//  * Interface for company item
//  */
// interface Company {
//   id: string;
//   name: string;
//   email: string;
//   phone?: string;
//   status: string;
//   createdAt: string;
// }

// /**
//  * CompanyList component
//  * Displays list of companies with filtering and pagination
//  */
// const CompanyList: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   // Set page title using layout context
//   const { setPageTitle } = useLayout();
//   React.useEffect(() => {
//     setPageTitle('Companies');
//   }, [setPageTitle]);
  
//   // Construct query parameters
//   const queryParams = {
//     page: currentPage,
//     limit: 10,
//     ...(searchQuery ? { name: searchQuery } : {})
//   };
  
//   // Fetch companies data using TanStack Query
//   const { 
//     data: companyData, 
//     isLoading, 
//     error 
//   } = useDataQuery<{
//     items: Company[];
//     totalPages: number;
//     currentPage: number;
//     totalItems: number;
//   }>(
//     ['companies', currentPage, searchQuery], 
//     COMPANY_URLS.LIST,
//     queryParams
//   );
  
//   // Extract companies and pagination data
//   const companies = companyData?.items || [];
//   const totalPages = companyData?.totalPages || 1;
  
//   // Handle search input change
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1); // Reset to first page on new search
//   };
  
//   // Navigation to detail page
//   const handleViewCompany = (id: string) => {
//     window.location.href = `/company/${id}`;
//   };
  
//   // For demonstration purposes, using placeholder data if API fails
//   const placeholderCompanies: Company[] = [
//     {
//       id: '1',
//       name: 'ABC Corporation',
//       email: 'info@abccorp.com',
//       phone: '+1-555-123-4567',
//       status: 'Active',
//       createdAt: '2023-01-15T10:30:00Z',
//     },
//     {
//       id: '2',
//       name: 'XYZ Industries',
//       email: 'contact@xyzind.com',
//       phone: '+1-555-987-6543',
//       status: 'Active',
//       createdAt: '2023-02-22T14:15:00Z',
//     },
//     {
//       id: '3',
//       name: 'Global Enterprises',
//       email: 'hello@globalent.com',
//       status: 'Inactive',
//       createdAt: '2023-03-10T09:45:00Z',
//     },
//   ];
  
//   // Use placeholder data if no companies returned from API
//   const displayCompanies = companies.length > 0 ? companies : placeholderCompanies;
  
//   // Render loading state
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-[50vh]">
//         <div className="text-center">
//           <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
//           <p>Loading companies...</p>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="company-list">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Companies</h1>
//         <Button variant="default">Add New Company</Button>
//       </div>
      
//       {/* Search and filters */}
//       <Card className="mb-6 p-4">
//         <div className="flex gap-4">
//           <div className="flex-1">
//             <Input
//               type="text"
//               placeholder="Search companies..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="w-full"
//             />
//           </div>
//           <Button variant="outline">Filter</Button>
//         </div>
//       </Card>
      
//       {/* Error message */}
//       {error && (
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
//           <p>{error instanceof Error ? error.message : 'An error occurred'}</p>
//         </div>
//       )}
      
//       {/* Companies table */}
//       <Card className="overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 text-left">
//               <tr>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Created</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {displayCompanies.map((company) => (
//                 <tr key={company.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 font-medium">{company.name}</td>
//                   <td className="px-6 py-4 text-gray-600">{company.email}</td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-block px-2 py-1 text-xs rounded-full ${
//                       company.status === 'Active' 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-gray-100 text-gray-800'
//                     }`}>
//                       {company.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-gray-600">
//                     {new Date(company.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="px-6 py-4">
//                     <Button 
//                       variant="ghost" 
//                       size="sm"
//                       onClick={() => handleViewCompany(company.id)}
//                     >
//                       View
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         {/* Pagination */}
//         <div className="px-6 py-4 flex items-center justify-between border-t">
//           <div>
//             <p className="text-sm text-gray-500">
//               Showing page {currentPage} of {totalPages}
//             </p>
//           </div>
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default CompanyList;
