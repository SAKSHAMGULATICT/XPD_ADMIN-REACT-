
// 'use client'; // Removed: In a standard React app, this directive isn't used.

import React, { useState } from 'react';
// import Link from 'next/link'; // Removed: You'll use Link from react-router-dom
// For example: import { Link } from 'react-router-dom';
import {
  Home,
  FileText,
  Settings,
  Landmark,
  Replace,
  Blocks,
  Rss,
  CloudUpload,
  Archive,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@cleartax/truss/button'; // Assuming ShadCN components are available
import { cn } from '../../../../lib/utils'; // Using utils from project root lib folder
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from'@cleartax/truss/tooltip';


interface NavItem {
  // href: string; // In react-router, this would be 'to'
  to: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { to: '/admin/home', label: 'Home', icon: Home }, // Example: use paths relevant to your react-router setup
  { to: '/admin/invoice-details', label: 'Invoice details', icon: FileText },
  { to: '/admin/company-setup', label: 'Company Setup', icon: Settings },
  { to: '/admin/bank-rate', label: 'Bank rate', icon: Landmark },
  { to: '/admin/status-change', label: 'Status Change', icon: Replace },
  { to: '/admin/product-config', label: 'Company Product Configuration', icon: Blocks },
  { to: '/admin/posting-update', label: 'Posting Update', icon: Rss },
  { to: '/admin/uploaded-logs', label: 'Uploaded Files Logs', icon: CloudUpload },
  { to: '/admin/invoice-recoveries', label: 'Invoice & Recoveries', icon: Archive },
  { to: '/admin/manage-users', label: 'Manage Users', icon: Users },
];

interface AppSidebarProps {
  isCollapsed: boolean;
  // activePath: string; // You'd likely pass the current pathname from react-router to determine activeItem
}

export default function AppSidebar({ isCollapsed /*, activePath */ }: AppSidebarProps) {
  // In a react-router setup, you might derive activeItem based on the current route's pathname
  // For simplicity, keeping local state here.
  // const { pathname } = useLocation(); // Example if using react-router's useLocation hook
  const [activeItem, setActiveItem] = useState('/admin/home'); // Default or derived from router

  // React.useEffect(() => {
  //   setActiveItem(pathname); // Update activeItem when route changes
  // }, [pathname]);

  const NavLinkComponent = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => {
    // This is a placeholder. In your app, you'd use:
    // import { Link } from 'react-router-dom';
    // return <Link to={to} {...props}>{children}</Link>;
    return <a href={to} {...props} onClick={(e) => { e.preventDefault(); console.log("Navigate to:", to); setActiveItem(to); }}>{children}</a>;
  };


  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border shadow-sm transition-all duration-300 ease-in-out flex flex-col",
          isCollapsed ? "w-20 py-4 px-2" : "w-64 p-4"
        )}
      >
        <nav className="flex-grow">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                {isCollapsed ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        variant="ghost"
                        className={cn(
                          "w-full text-sm py-2.5 my-0.5 justify-center",
                           activeItem === item.to
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" // Active item style
                            : "bg-transparent text-sidebar-foreground hover:bg-accent hover:text-accent-foreground" // Inactive item style
                        )}
                        // onClick={() => setActiveItem(item.to)} // onClick handled by NavLinkComponent or Link
                      >
                        <NavLinkComponent to={item.to} className="flex items-center justify-center w-full h-full">
                          <item.icon className="h-5 w-5 shrink-0" />
                        </NavLinkComponent>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full text-sm py-2.5 my-0.5 px-3 justify-start",
                      activeItem === item.to
                       ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" // Active item style
                       : "bg-transparent text-sidebar-foreground hover:bg-accent hover:text-accent-foreground" // Inactive item style
                    )}
                    // onClick={() => setActiveItem(item.to)} // onClick handled by NavLinkComponent or Link
                  >
                    <NavLinkComponent to={item.to} className="flex items-center w-full h-full">
                      <item.icon className="h-5 w-5 shrink-0 mr-3" />
                      <span className="truncate">{item.label}</span>
                    </NavLinkComponent>
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </TooltipProvider>
  );
}
