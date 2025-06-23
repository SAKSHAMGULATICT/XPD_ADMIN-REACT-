// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../../hooks/useAuth';

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// /**
//  * Protected route component to handle authentication
//  * Redirects to login page if user is not authenticated
//  */
// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const { isAuthenticated, isLoading } = useAuth();
  
//   // Show a loading indicator while checking authentication status
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
//           <p>Loading...</p>
//         </div>
//       </div>
//     );
//   }
  
//   // Redirect to login if not authenticated
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
  
//   // Render children if authenticated
//   return <>{children}</>;
// };

// export default ProtectedRoute;
