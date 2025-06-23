// 'use client'; // Removed: In a standard React app, this directive isn't used.

import React from 'react';
import { Button } from '@cleartax/truss/button'; // Assuming ShadCN components are available
import { ArrowLeft, Menu } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@cleartax/truss/hover-card";
import { useMutation } from '@tanstack/react-query'; // Assuming TanStack Query is set up
// import { logoutUser } from '@/lib/api'; // You'll import this from your API services
// import { useToast } from '@/hooks/use-toast'; // You'll use your own toast hook/system

// Mock for demonstration. Replace with your actual API call.
const logoutUser = async (): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged out successfully (mock).");
      resolve({ success: true });
    }, 300);
  });
};

// Mock for demonstration. Replace with your actual toast hook.
const useToast = () => ({
  toast: (options: { title: string; description?: string; variant?: string }) => {
    console.log('Toast:', options.title, options.description);
  }
});


interface AppHeaderProps {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  // Add any other props your header might need from context or parent, e.g., userEmail, lastLogin
  userEmail?: string;
  lastLoginDate?: string | null;
}

export default function AppHeader({
  isSidebarCollapsed,
  toggleSidebar,
  userEmail = "user@example.com", // Example default, provide via props or context
  lastLoginDate,
}: AppHeaderProps) {
  const { toast } = useToast();

  const [lastLoginDisplay, setLastLoginDisplay] = React.useState<string | null>(null);

  React.useEffect(() => {
    // This logic for displaying a fixed date was for demo.
    // In your app, lastLoginDate would likely come from props or context based on auth state.
    if (lastLoginDate) {
        setLastLoginDisplay(lastLoginDate);
    } else {
        // Example: Set a mock date if not provided, or handle appropriately
        setLastLoginDisplay(new Date(Date.UTC(2025, 5, 12, 14, 42, 0)).toLocaleString(undefined, {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }));
    }
  }, [lastLoginDate]);

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      toast({ title: "Logged Out", description: "You have been successfully logged out." });
      // In your React app, you'd handle redirection using react-router-dom, e.g., navigate('/login');
      console.log("Redirect to login page would happen here.");
    },
    onError: () => {
      toast({ variant: "destructive", title: "Logout Failed", description: "Could not log you out. Please try again." });
    }
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full h-16 flex items-center justify-between px-1">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={toggleSidebar}
            aria-label={isSidebarCollapsed ? "Open sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? <Menu className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
          </Button>

          <div className="flex flex-col items-start leading-tight ml-2">
            {/* You might want to make the logo/company name dynamic via props or context */}
            <span className="text-2xl font-bold">clear</span>
            <span className="text-xs font-semibold uppercase tracking-wider">ADMIN</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 mr-6">
          <div className="text-sm text-right hidden md:block">
            <div>Welcome, {userEmail}</div>
          </div>
          <HoverCard openDelay={100}>
            <HoverCardTrigger asChild>
              <Button
                className="bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-700 border-slate-300 hover:border-slate-400"
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
              >
                {logoutMutation.isPending ? "Logging out..." : "Log Out"}
              </Button>
            </HoverCardTrigger>
             {lastLoginDisplay && (
                <HoverCardContent className="w-auto text-sm text-popover-foreground bg-popover p-2">
                    Last login at {lastLoginDisplay}
                </HoverCardContent>
            )}
          </HoverCard>
        </div>
      </div>
    </header>
  );
}
