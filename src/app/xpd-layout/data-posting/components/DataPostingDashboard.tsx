// import React from 'react';
// import { Card } from '@cleartax/truss/card';
// import { Button } from '@cleartax/truss/button';
// import { useLayout } from '../../contexts/LayoutContext';
// import { useDataQuery } from '../../../../hooks/useTanstackQuery';
// import { DATA_POSTING_URLS } from '../../../../api-url/url.constants';
// import { Link } from 'react-router-dom';

// // Data interface for upload history
// interface UploadRecord {
//   id: string;
//   fileName: string;
//   fileType: string;
//   fileSize: string;
//   status: 'Processed' | 'Processing' | 'Failed';
//   uploadedAt: string;
//   errors?: string[];
// }

// /**
//  * DataPostingDashboard component
//  * Displays the dashboard for data posting with history and stats
//  */
// const DataPostingDashboard: React.FC = () => {
//   // Set page title using layout context
//   const { setPageTitle } = useLayout();
//   React.useEffect(() => {
//     setPageTitle('Data Posting');
//   }, [setPageTitle]);

//   // Fetch upload history using TanStack Query
//   const { 
//     data: uploadHistory, 
//     isLoading, 
//     error 
//   } = useDataQuery<UploadRecord[]>(
//     ['data-posting-history'], 
//     DATA_POSTING_URLS.LIST
//   );

//   // Loading state
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-[50vh]">
//         <div className="text-center">
//           <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
//           <p>Loading data...</p>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
//         <p>{error instanceof Error ? error.message : 'An error occurred'}</p>
//         <button 
//           className="mt-2 bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   // Placeholder data if no data from API
//   const displayHistory = uploadHistory || [
//     {
//       id: '1',
//       fileName: 'company_data_june2023.csv',
//       fileType: 'CSV',
//       fileSize: '256 KB',
//       status: 'Processed',
//       uploadedAt: '2023-06-15T10:30:00Z',
//     },
//     {
//       id: '2',
//       fileName: 'buyers_may2023.xlsx',
//       fileType: 'Excel',
//       fileSize: '512 KB',
//       status: 'Processed',
//       uploadedAt: '2023-05-22T14:15:00Z',
//     },
//     {
//       id: '3',
//       fileName: 'transactions_q2.csv',
//       fileType: 'CSV',
//       fileSize: '128 KB',
//       status: 'Failed',
//       uploadedAt: '2023-04-10T09:45:00Z',
//       errors: ['Invalid column format', 'Missing required fields']
//     },
//   ] as UploadRecord[];

//   return (
//     <div className="data-posting-dashboard">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Data Posting</h1>
//         <Link to="/data-posting/upload">
//           <Button variant="default">Upload New Data</Button>
//         </Link>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <Card className="p-6">
//           <h3 className="text-lg font-medium text-gray-500 mb-2">Total Uploads</h3>
//           <p className="text-3xl font-bold">{displayHistory.length}</p>
//         </Card>
        
//         <Card className="p-6">
//           <h3 className="text-lg font-medium text-gray-500 mb-2">Successful</h3>
//           <p className="text-3xl font-bold text-green-600">
//             {displayHistory.filter(item => item.status === 'Processed').length}
//           </p>
//         </Card>
        
//         <Card className="p-6">
//           <h3 className="text-lg font-medium text-gray-500 mb-2">Failed</h3>
//           <p className="text-3xl font-bold text-red-600">
//             {displayHistory.filter(item => item.status === 'Failed').length}
//           </p>
//         </Card>
//       </div>

//       {/* Upload History */}
//       <Card className="overflow-hidden">
//         <div className="px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold">Upload History</h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 text-left">
//               <tr>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">File Name</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Type</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Size</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Uploaded</th>
//                 <th className="px-6 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {displayHistory.map((record) => (
//                 <tr key={record.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 font-medium">{record.fileName}</td>
//                   <td className="px-6 py-4 text-gray-600">{record.fileType}</td>
//                   <td className="px-6 py-4 text-gray-600">{record.fileSize}</td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-block px-2 py-1 text-xs rounded-full ${
//                       record.status === 'Processed' 
//                         ? 'bg-green-100 text-green-800' 
//                         : record.status === 'Processing'
//                           ? 'bg-blue-100 text-blue-800'
//                           : 'bg-red-100 text-red-800'
//                     }`}>
//                       {record.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-gray-600">
//                     {new Date(record.uploadedAt).toLocaleDateString()}
//                   </td>
//                   <td className="px-6 py-4">
//                     {record.status === 'Failed' ? (
//                       <Button 
//                         variant="ghost" 
//                         size="sm"
//                       >
//                         View Errors
//                       </Button>
//                     ) : (
//                       <Button 
//                         variant="ghost" 
//                         size="sm"
//                       >
//                         Download
//                       </Button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {displayHistory.length === 0 && (
//           <div className="py-8 text-center text-gray-500">
//             <p>No upload history found</p>
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// };

// export default DataPostingDashboard;
