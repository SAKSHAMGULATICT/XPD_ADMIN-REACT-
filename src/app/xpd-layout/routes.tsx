// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import XpdLayout from './XpdLayout';

// // Import pages
// import { useAuth } from '../../hooks/useAuth';
// import Login from '../login/Login';
// import UserNotFound from '../user-not-found/UserNotFound';

// // Lazy-loaded feature modules
// const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));
// const CompanyList = React.lazy(() => import('./company/CompanyList'));
// const BuyerList = React.lazy(() => import('./buyer/BuyerList'));
// const DataPosting = React.lazy(() => import('./data-posting/DataPosting'));
// // const UserUpload = React.lazy(() => import('./user-upload/UserUpload'));
// // const CD = React.lazy(() => import('./cd/CD'));

// /**
//  * Protected route component to handle authentication
//  */
// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isAuthenticated, isLoading } = useAuth();
  
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
  
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
  
//   return <>{children}</>;
// };

// /**
//  * Application routes configuration
//  */
// const AppRoutes: React.FC = () => {
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/user-not-found" element={<UserNotFound />} />
        
//         {/* Protected routes */}
//         <Route 
//           path="/" 
//           element={
//             <ProtectedRoute>
//               <XpdLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Navigate to="/dashboard" replace />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="company/*" element={<CompanyList />} />
//           <Route path="buyer/*" element={<BuyerList />} />
//           <Route path="data-posting/*" element={<DataPosting />} />
//           {/* <Route path="user-upload/*" element={<UserUpload />} />
//           <Route path="cd/*" element={<CD />} /> */}
//         </Route>
        
//         {/* Fallback route */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </React.Suspense>
//   );
// };

// export default AppRoutes;
