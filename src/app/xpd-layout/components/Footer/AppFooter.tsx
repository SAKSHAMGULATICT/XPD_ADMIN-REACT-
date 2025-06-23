
// 'use client'; // Removed

import React from 'react';
// import Link from 'next/link'; // Removed: Use react-router-dom's Link or standard <a>
import { useQuery } from '@tanstack/react-query'; // Assuming TanStack Query
// import type { BuildInfo } from '@/lib/api'; // You'll import this from your models/types
// import { fetchBuildInfo } from '@/lib/api'; // You'll import this from your API services


interface BuildInfo { // Define BuildInfo if not already available globally
  version: string;
  buildNumber: string;
}

// Mock for demonstration. Replace with your actual API call.
const fetchBuildInfo = async (): Promise<BuildInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ version: "1.0.R", buildNumber: "20240730.R.1" }); // 'R' for React version
    }, 500);
  });
};

// Placeholder for react-router-dom's Link or a simple anchor for external links
const AppLink = ({ href, children, ...props }: { href: string, children: React.ReactNode, [key: string]: any }) => {
  // If internal route, use: import { Link } from 'react-router-dom'; return <Link to={href} {...props}>{children}</Link>;
  // For external or placeholder:
  if (href.startsWith('http') || href.startsWith('mailto')) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  }
  return <a href={href} {...props} onClick={(e) => {e.preventDefault(); console.log("Navigate to (footer):", href)}}>{children}</a>;
};


export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  const { data: buildInfo, isLoading: isLoadingBuildInfo } = useQuery<BuildInfo>({
    queryKey: ['buildInfo'],
    queryFn: fetchBuildInfo,
  });

  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-center p-4 text-xs text-gray-600 sticky bottom-0 z-50 w-full">
      <div className="container mx-auto">
        <span>© {currentYear} Xpedize Ventures Private Limited</span>
        <span className="mx-1">|</span>
        <AppLink href="https://www.xpedize.com/contact.php" className="hover:underline text-primary">Contact Us</AppLink>
        <span className="mx-1">|</span>
        <AppLink href="mailto:info@xpedize.com" className="hover:underline text-primary">Feedback</AppLink>
        <span className="mx-1">|</span>
        {/* For internal routes, use react-router Link: <Link to="/terms-and-conditions">...</Link> */}
        <AppLink href="/terms" className="hover:underline text-primary">Terms & Conditions</AppLink>
        <span className="mx-1">|</span>
        <AppLink href="/privacy" className="hover:underline text-primary">Privacy Policy</AppLink>
        <span className="mx-1 hidden sm:inline">|</span>
        <span className="block sm:inline mt-1 sm:mt-0">
          Version: {isLoadingBuildInfo ? 'Loading...' : buildInfo?.version || '1.0.R'} Build #{isLoadingBuildInfo ? '...' : buildInfo?.buildNumber || 'N/A'}
        </span>
      </div>
    </footer>
  );
}
