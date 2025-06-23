// import React, { useState } from 'react';
// import { Card } from '@cleartax/truss/card';
// import { Button } from '@cleartax/truss/button';
// import { Input } from '@cleartax/truss/input';
// import { useLayout } from '../contexts/LayoutContext';
// import { useDataQuery } from '../../../hooks/useTanstackQuery';
// import { BUYER_URLS } from '../../../api-url/url.constants';

// /**
//  * Interface for buyer item
//  */
// interface Buyer {
//   id: string;
//   name: string;
//   email: string;
//   companyId: string;
//   companyName: string;
//   status: string;
//   createdAt: string;
// }

// /**
//  * BuyerList component
//  * Displays list of buyers with filtering and pagination
//  */
// const BuyerList: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   // Set page title using layout context
//   const { setPageTitle } = useLayout();
//   React.useEffect(() => {
//     setPageTitle('Buyers');
//   }, [setPageTitle]);
  
//   // Construct query parameters
//   const queryParams = {
//     page: currentPage,
//     limit: 10,
//     ...(searchQuery ? { name: searchQuery } : {})
//   };
  
//   // Fetch buyers data using TanStack Query
//   const { 
//     data: buyerData, 
//     isLoading, 
//     error 
//   } = useDataQuery<{
//     items: Buyer[];
//     totalPages: number;
//     currentPage: number;
//     totalItems: number;
//   }>(
//     ['buyers', currentPage, searchQuery], 
//     BUYER_URLS.LIST,
//     queryParams
//   );
  
//   // Extract buyers and pagination data
//   const buyers = buyerData?.items || [];
//   const totalPages = buyerData?.totalPages || 1;
  
//   // Handle search input change
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1); // Reset to first page on new search
//   };
  
//   // Navigation to detail page
//   const handleViewBuyer = (id: string) => {
//     window.location.href = `/buyer/${id}`;
//   };
  
//   // For demonstration purposes, using placeholder data if API fails
//   const placeholderBuyers: Buyer[] = [
//     {
//       id: '1',
//       name: 'John Smith',
//       email: 'john.smith@abccorp.com',
//       companyId: '1',
//       companyName: 'ABC Corporation',
//       status: 'Active',
//       createdAt: '2023-02-15T10:30:00Z',
//     },
//     {
//       id: '2',
//       name: 'Jane Doe',
//       email: 'jane.doe@xyzind.com',
//       companyId: '2',
//       companyName: 'XYZ Industries',
//       status: 'Active',
//       createdAt: '2023-03-22T14:15:00Z',
//     },
//     {
//       id: '3',
//       name: 'Mike Johnson',
//       email: 'mike.johnson@globalent.com',
//       companyId: '3',
//       companyName: 'Global Enterprises',
//       status: 'Inactive',
//       createdAt: '2023-04-10T09:45:00Z',
//     },
//   ];
  
//   // Use placeholder data if no buyers returned from API
//   const displayBuyers = buyers.length > 0 ? buyers : placeholderBuyers;
  
//   // Render loading state
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-[50vh]">
//         <div className="text-center">
//           <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
//           <p>Loading buyers...</p>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="buyer-list">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Buyers</h1>
//         <Button variant="default">Add New Buyer</Button>
//       </div>
      
//       {/* Search and filters */}
//       <Card className="mb-6 p-4">
//         <div className="flex gap-4">
//           <div className="flex-1">
//             <Input
//               type="text"
//               placeholder="Search buyers..."
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
      
//       {/* Buyers table */}
//       <Card className="overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 text-left">
//               <tr>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Company</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Created</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {displayBuyers.map((buyer) => (
//                 <tr key={buyer.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 font-medium">{buyer.name}</td>
//                   <td className="px-6 py-4 text-gray-600">{buyer.email}</td>
//                   <td className="px-6 py-4 text-gray-600">{buyer.companyName}</td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-block px-2 py-1 text-xs rounded-full ${
//                       buyer.status === 'Active' 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-gray-100 text-gray-800'
//                     }`}>
//                       {buyer.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-gray-600">
//                     {new Date(buyer.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="px-6 py-4">
//                     <Button 
//                       variant="ghost" 
//                       size="sm"
//                       onClick={() => handleViewBuyer(buyer.id)}
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

// export default BuyerList;
