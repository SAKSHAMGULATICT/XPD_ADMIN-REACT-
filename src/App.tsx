import React from 'react';
import { LayoutProvider } from './app/xpd-layout/contexts/LayoutContext';
import XpdRoutes from './app/xpd-layout/routes/XpdRoutes';

/**
 * Main application component
 * Sets up the layout context provider and routes
 */
function App() {
  return (
    <LayoutProvider>
      <XpdRoutes />
     </LayoutProvider>
  );
}

export default App;
