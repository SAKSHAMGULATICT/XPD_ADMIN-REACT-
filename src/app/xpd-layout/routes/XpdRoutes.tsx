import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
import XpdLayout from '../XpdLayout';

// Import pages
// import Login from '../../login/Login';
import UserNotFound from '../../user-not-found/UserNotFound';

// Lazy-loaded feature modules
// const Dashboard = React.lazy(() => import('../dashboard/Dashboard'));
// const CompanyList = React.lazy(() => import('../company/CompanyList'));
// const BuyerList = React.lazy(() => import('../buyer/BuyerList'));
// const DataPosting = React.lazy(() => import('../data-posting/DataPosting'));
// const UserUpload = React.lazy(() => import('../user-upload/UserUpload'));
// const CD = React.lazy(() => import('../cd/CD'));

/**
 * Application routes configuration
 */
const XpdRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/user-not-found" element={<UserNotFound />} />
        
        {/* Protected routes */}
        <Route 
          path="/xpd-admin" 
          element={
            // <ProtectedRoute>
              <XpdLayout />
            // {/* </ProtectedRoute> */}
          }
        >
          {/* Dashboard as the index route */}
          {/* <Route index element={<Dashboard />} /> */}
          {/* Activity Stream route */}
          <Route path="activity-stream" element={null} />
          {/* <Route path="company/*" element={<CompanyList />} />
          <Route path="buyer/*" element={<BuyerList />} />
          <Route path="data-posting/*" element={<DataPosting />} /> */}
          {/* <Route path="user-upload/*" element={<UserUpload />} /> */}
          {/* <Route path="cd/*" element={<CD />} /> */}
        </Route>
        
        {/* Redirect root to xpd-admin */}
        <Route path="/" element={<Navigate to="/xpd-admin" replace />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/xpd-admin" replace />} />
      </Routes>
    </React.Suspense>
  );
};

export default XpdRoutes;
