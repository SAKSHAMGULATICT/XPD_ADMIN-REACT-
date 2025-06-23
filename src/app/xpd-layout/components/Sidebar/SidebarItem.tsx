import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Menu item interface (same as in Sidebar.tsx)
interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  path: string;
  children?: MenuItem[];
  permission?: string;
}

interface SidebarItemProps {
  item: MenuItem;
  isActive: boolean;
}

/**
 * SidebarItem component
 * Renders a single menu item in the sidebar
 */
const SidebarItem: React.FC<SidebarItemProps> = ({ item, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle submenu for items with children
  const toggleSubmenu = () => {
    if (item.children && item.children.length > 0) {
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <li className={`sidebar-item ${isActive ? 'active' : ''}`}>
      {item.children && item.children.length > 0 ? (
        // Item with submenu
        <>
          <button
            className="sidebar-link"
            onClick={toggleSubmenu}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-title">{item.title}</span>
            <span className={`sidebar-arrow ${isOpen ? 'open' : ''}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          
          {isOpen && (
            <ul className="sidebar-submenu">
              {item.children.map((child) => (
                <li key={child.id} className="sidebar-submenu-item">
                  <Link to={child.path} className="sidebar-submenu-link">
                    <span className="sidebar-submenu-icon">{child.icon}</span>
                    <span className="sidebar-submenu-title">{child.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        // Regular item
        <Link to={item.path} className="sidebar-link">
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-title">{item.title}</span>
        </Link>
      )}
    </li>
  );
};

export default SidebarItem;
