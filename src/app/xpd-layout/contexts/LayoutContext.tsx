import React, { createContext, useState, useContext } from 'react';

/**
 * Layout context state interface
 */
interface LayoutContextState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  pageTitle: string;
  setPageTitle: (title: string) => void;
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
}

/**
 * Breadcrumb item interface
 */
export interface Breadcrumb {
  title: string;
  path?: string;
}

/**
 * Create layout context with default values
 */
const LayoutContext = createContext<LayoutContextState>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
  toggleSidebar: () => {},
  pageTitle: '',
  setPageTitle: () => {},
  breadcrumbs: [],
  setBreadcrumbs: () => {},
});

/**
 * Layout provider props
 */
interface LayoutProviderProps {
  children: React.ReactNode;
}

/**
 * Layout context provider component
 */
export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  // State for sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // State for page title
  const [pageTitle, setPageTitle] = useState('');
  
  // State for breadcrumbs
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
  
  /**
   * Toggle sidebar open/closed
   */
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  
  // Context value
  const contextValue: LayoutContextState = {
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    pageTitle,
    setPageTitle,
    breadcrumbs,
    setBreadcrumbs,
  };
  
  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

/**
 * Custom hook to use layout context
 */
export const useLayout = () => {
  const context = useContext(LayoutContext);
  
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  
  return context;
};

export default LayoutContext;
