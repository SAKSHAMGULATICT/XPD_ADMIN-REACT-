// import React from 'react';
// import { Card } from '@cleartax/truss/card';
// import { useDataQuery } from '../../../hooks/useTanstackQuery';
// import { useLayout } from '../contexts/LayoutContext';

// // API base URL
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

// // Dashboard data interfaces
// interface Activity {
//   id: number;
//   action: string;
//   timestamp: string;
// }

// interface DashboardStats {
//   totalCompanies: number;
//   totalBuyers: number;
//   pendingRequests: number;
//   recentActivity: Activity[];
// }

// /**
//  * Dashboard component
//  * Displays overview statistics and summary information
//  */
// const Dashboard: React.FC = () => {
//   // Set page title using layout context
//   const { setPageTitle } = useLayout();
//   React.useEffect(() => {
//     setPageTitle('Dashboard');
//   }, [setPageTitle]);
  
//   // Fetch dashboard data using TanStack Query
//   const { 
//     data: stats, 
//     isLoading, 
//     error 
//   } = useDataQuery<any>(
//     ['dashboard'], 
//     `${API_BASE_URL}/dashboard`
//   );
  
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-[50vh]">
//         <div className="text-center">
//           <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
//           <p>Loading dashboard data...</p>
//         </div>
//       </div>
//     );
//   }
  
//   if (error) {
//     return (
//       <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
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
  
//   // For demonstration purposes, we'll show placeholder stats
//   const placeholderStats: DashboardStats = {
//     totalCompanies: stats?.totalCompanies || 125,
//     totalBuyers: stats?.totalBuyers || 348,
//     pendingRequests: stats?.pendingRequests || 42,
//     recentActivity: stats?.recentActivity || [
//       { id: 1, action: 'Company Created', timestamp: '2023-06-18T08:30:00Z' },
//       { id: 2, action: 'Buyer Updated', timestamp: '2023-06-17T15:45:00Z' },
//       { id: 3, action: 'Data Posted', timestamp: '2023-06-17T12:15:00Z' },
//     ]
//   };
  
//   return (
//     <div className="dashboard">
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <Card className="p-6">
//           <h3 className="text-lg font-medium text-gray-500 mb-2">Total Companies</h3>
//           <p className="text-3xl font-bold">{placeholderStats.totalCompanies}</p>
//         </Card>
        
//         <Card className="p-6">
//           <h3 className="text-lg font-medium text-gray-500 mb-2">Total Buyers</h3>
//           <p className="text-3xl font-bold">{placeholderStats.totalBuyers}</p>
//         </Card>
        
//         <Card className="p-6">
//           <h3 className="text-lg font-medium text-gray-500 mb-2">Pending Requests</h3>
//           <p className="text-3xl font-bold">{placeholderStats.pendingRequests}</p>
//         </Card>
//       </div>
      
//       {/* Recent Activity */}
//       <Card className="p-6">
//         <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
//         <div className="space-y-4">
//           {placeholderStats.recentActivity.map((activity) => (
//             <div key={activity.id} className="border-b pb-3 last:border-0">
//               <p className="font-medium">{activity.action}</p>
//               <p className="text-sm text-gray-500">
//                 {new Date(activity.timestamp).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Dashboard;
