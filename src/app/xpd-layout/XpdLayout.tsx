// 'use client'; // Re-added: This page uses client-side React hooks.

import React, { useState, useEffect } from 'react';
import AppHeader from './components/Header/AppHeader';
import AppSidebar from './components/Sidebar/AppSidebar';
import AppFooter from './components/Footer/AppFooter';

import { Button } from '@cleartax/truss/button';
import { Label } from '@cleartax/truss/label';
import {Badge} from '@cleartax/truss/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cleartax/truss/select';
import { Switch } from '@cleartax/truss/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@cleartax/truss/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@cleartax/truss/card';
import { Popover, PopoverContent, PopoverTrigger } from "@cleartax/truss/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@cleartax/truss/command";
import { Check, ChevronsUpDown, Loader2, XIcon } from "lucide-react";
import { cn } from '../../lib/utils';
import { useQuery, useMutation, } from '@tanstack/react-query';

// You would define these types in your `src/models` directory or similar
interface Company {
  value: string;
  label: string;
}
interface ActivityItem {
  id: number;
  user: string;
  action: string;
  timestamp: string;
  details?: string;
}
interface ActivityStreamFilters {
  companyId?: string[];
  recordsPerPage?: string;
  actionFilter?: string;
  showLoginLogout?: boolean;
}
// End mock types

// You would import these from your `src/api/services`
// For generic React app, this would be: import { fetchCompanies, fetchActivityStream } from '../api/services/xpd.service';
const fetchCompanies = async (): Promise<Company[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 'company1', label: 'Company Alpha' },
        { value: 'company2', label: 'Company Beta' },
        { value: 'company3', label: 'Company Gamma' },
        { value: 'company4', label: 'Company Theta' },
        { value: 'company5', label: 'Company Delta' },
      ]);
    }, 500);
  });
};
const fetchActivityStream = async (filters: ActivityStreamFilters): Promise<ActivityItem[]> => {
  console.log("Fetching activity stream with filters:", filters);
  return new Promise((resolve) => {
    setTimeout(() => {
      const baseActivities: ActivityItem[] = [
        { id: 1, user: 'user@example.com', action: 'Logged In', timestamp: '2024-07-29 10:00 AM', details: 'IP: 192.168.1.1' },
        { id: 2, user: 'admin@example.com', action: 'Uploaded report.pdf', timestamp: '2024-07-29 10:05 AM', details: 'File size: 2.5MB' },
        { id: 3, user: 'user2@example.com', action: 'Changed password', timestamp: '2024-07-29 10:15 AM', details: 'Security event' },
        { id: 4, user: 'user@example.com', action: 'Viewed Dashboard', timestamp: '2024-07-29 11:00 AM' },
        { id: 5, user: 'ops@example.com', action: 'Generated financial_summary.xlsx', timestamp: '2024-07-29 11:30 AM', details: 'Filters: Q3 2024' },
      ];

      // let filteredActivities = [...baseActivities];
      let activitiesToFilter: ActivityItem[] = [];
      const selectedCompanyIDs=filters.companyId||[];

      if (selectedCompanyIDs.length>0) {
        if (selectedCompanyIDs.includes('company1')) {
          activitiesToFilter.push(
            { id: 101, user: 'alpha_user@example.com', action: 'Logged In (Alpha)', timestamp: '2024-07-29 09:00 AM', details: 'From AlphaNet' },
            { id: 102, user: 'alpha_admin@example.com', action: 'Updated settings for Alpha', timestamp: '2024-07-29 09:30 AM' },
          )

        } 
        if (selectedCompanyIDs.includes('company2')) {
          activitiesToFilter.push(
            { id: 201, user: 'beta_user@example.com', action: 'Accessed Beta Dashboard', timestamp: '2024-07-29 08:00 AM' },
            { id: 202, user: 'beta_ops@example.com', action: 'Downloaded beta_report.zip', timestamp: '2024-07-29 08:30 AM' }
          );
        }
           // If no specific activities were found for ANY of the selected companies,
        // provide a message indicating this.
        if(activitiesToFilter.length===0&&selectedCompanyIDs.length>0){
          const companyNames=selectedCompanyIDs.join(', ');  // Or fetch actual names if available
          activitiesToFilter=[{
            id:301,
            user:'system@example.com',
            action: `No specific activities found for: ${companyNames}.`, 
            timestamp:new Date().toLocaleString(),
            details: 'Try selecting other companies or broader filters.' 
          }];

        }
      }
      else{
        // No companies selected, use base activities
        activitiesToFilter=[...baseActivities];
      }
      let finalFilteredActivities=[...activitiesToFilter];
      if(filters.actionFilter&&filters.actionFilter!=='all'){
        finalFilteredActivities=finalFilteredActivities.filter(act=>{
          return act.action.toLowerCase().includes(filters.actionFilter!.toLowerCase());

        }
        )
      }
      if(filters.showLoginLogout===false){
        finalFilteredActivities=finalFilteredActivities.filter(act=>{
          return !act.action.toLowerCase().includes('login')&&!act.action.toLowerCase().includes('logout');
        })
      }
      
      //   if (selectedCompanyIDs.includes('company2')) {
      //     activitiesToFilter.push(
      //       { id: 201, user: 'beta_user@example.com', action: 'Accessed Beta Dashboard', timestamp: '2024-07-29 08:00 AM' },
      //       { id: 202, user: 'beta_ops@example.com', action: 'Downloaded beta_report.zip', timestamp: '2024-07-29 08:30 AM' }
      //     );
      //   }
      //   else {
      //      filteredActivities = [{ id: 301, user: `user@${filters.companyId}.com`, action: `Logged In (${filters.companyId})`, timestamp: '2024-07-29 09:00 AM' }];
      //   }
      // }

      // if (filters.actionFilter) {
      //   filteredActivities = filteredActivities.filter(act => act.action.toLowerCase().includes(filters.actionFilter!.toLowerCase()));
      // }

      // if (filters.showLoginLogout === false) {
      //   filteredActivities = filteredActivities.filter(act => !act.action.toLowerCase().includes('login') && !act.action.toLowerCase().includes('logout'));
      // }
      
      const numRecords = parseInt(filters.recordsPerPage || '10', 10);
      resolve(finalFilteredActivities.slice(0, numRecords));
    }, 700);
  });
};
// End Mock API functions


// Mock for demonstration. Replace with your actual toast hook.
// For generic React app, this would be: import { useToast } from '../hooks/useToast';
const useToast = () => ({
  toast: (options: { title: string; description?: string; variant?: string }) => {
    console.log('Toast:', options.title, options.description);
  }
});


// This component would typically be your DashboardPage.tsx or similar
export default function AdminDashboardPage() { // Renamed for clarity
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [recordsPerPage, setRecordsPerPage] = useState('10');
  const [selectedActionFilter, setSelectedActionFilter] = useState('all'); 
  const [showLoginLogoutActivities, setShowLoginLogoutActivities] = useState(true);
  
  // Sidebar state would likely be managed by a LayoutContext or passed from MainLayout.tsx
  // For generic React app: const { isSidebarCollapsed, toggleSidebar } = useLayout();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); 
  const [openCompanyCombobox, setOpenCompanyCombobox] = useState(false);
  
  const { toast } = useToast();
  // const queryClient = useQueryClient();

  const { data: companies = [], isLoading: isLoadingCompanies, isError: isErrorCompanies } = useQuery<Company[]>({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
  });

  const [activityItems, setActivityItems] = useState<ActivityItem[]>([]);

  const activityStreamMutation = useMutation({
    mutationFn: (filters: ActivityStreamFilters) => fetchActivityStream(filters),
    onSuccess: (data) => {
      setActivityItems(data);
    },
    onError: () => {
      toast({ variant: "destructive", title: "Failed to Fetch Activities", description: "Could not load the activity stream." });
    },
  });

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const filterActionOptions = [
    { value: 'all', label: 'All Actions' }, 
    { value: 'login', label: 'User Login' },
    { value: 'upload', label: 'File Upload' },
    { value: 'settings', label: 'Settings Change' },
    { value: 'viewed', label: 'Viewed Dashboard' },
  ];
  
  const handleGetDetails = () => {
    const filters: ActivityStreamFilters = {
      companyId: selectedCompanies,
      recordsPerPage: recordsPerPage,
      actionFilter: selectedActionFilter === 'all' ? undefined : selectedActionFilter,
      showLoginLogout: showLoginLogoutActivities,
    };
    activityStreamMutation.mutate(filters);
  };

  useEffect(() => {
    // Initial fetch
    handleGetDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 


  // The outer div structure might be part of your MainLayout.tsx in your target app
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <AppSidebar isCollapsed={isSidebarCollapsed} />
        <main className="flex-1 p-6 overflow-auto"> {/* This main would be the content area of your MainLayout */}
          <Tabs defaultValue="activity-stream" className="w-full">
            <TabsList className="border-b border-gray-200 mb-4">
              <TabsTrigger value="activity-stream" className="pb-2">Activity Stream</TabsTrigger>
              <TabsTrigger value="change-requests" className="pb-2">Change Requests</TabsTrigger>
              <TabsTrigger value="inconsistent-invoices" className="pb-2">Inconsistent Invoices</TabsTrigger>
              <TabsTrigger value="inconsistent-transactions" className="pb-2">Inconsistent Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="activity-stream">
              <Card className="mb-6 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">XPEDIZE ADMIN</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-end">
                    <div className="space-y-1.5">
                      <Label htmlFor="select-company-combobox" className="text-sm font-medium">
                        Select Company
                      </Label>
                       <Popover open={openCompanyCombobox} onOpenChange={setOpenCompanyCombobox}>
                        <PopoverTrigger asChild>
                        <div
                            role="combobox"
                            aria-expanded={openCompanyCombobox}
                            aria-controls="company-list"
                            tabIndex={0}
                            className={cn(
                              "flex h-auto min-h-10 w-full items-center justify-between rounded-md border border-input px-3 py-2 text-sm",
                              "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                              (isLoadingCompanies || isErrorCompanies) ? "cursor-not-allowed opacity-50" : "cursor-default",
                               selectedCompanies.length > 0
                                ? "bg-background text-card-foreground" // Use background when there's content
                                : "bg-muted text-muted-foreground hover:bg-muted/90" // Muted when empty
                            )}
                            onClick={() => !(isLoadingCompanies || isErrorCompanies) && setOpenCompanyCombobox(prev => !prev)}
                            onKeyDown={(e) => {
                              if (!(isLoadingCompanies || isErrorCompanies) && (e.key === 'Enter' || e.key === ' ')) {
                                e.preventDefault();
                                setOpenCompanyCombobox(prev => !prev);
                              }
                            }}
                          >
                            <div className="flex flex-wrap gap-1 items-center flex-grow">
                              {isLoadingCompanies && <span className="text-sm text-muted-foreground">Loading...</span>}
                              {isErrorCompanies && <span className="text-sm text-destructive">Error fetching companies</span>}
                              {!isLoadingCompanies && !isErrorCompanies && selectedCompanies.length === 0 && (
                                <span className="text-muted-foreground">Select companies...</span>
                              )}
                              {!isLoadingCompanies && !isErrorCompanies && selectedCompanies.map((companyId) => {
                                const company = companies.find(c => c.value === companyId);
                                if (!company) return null;
                                return (
                                  <Badge
                                    variant="secondary"
                                    key={company.value}
                                    className="pl-2 pr-1 py-0.5 text-xs rounded-sm flex items-center font-normal"
                                  >
                                    {company.label}
                                    <Button
                                      aria-label={`Remove ${company.label}`}
                                      variant="ghost"
                                      size="icon"
                                      className="ml-1 h-4 w-4 p-0 text-muted-foreground hover:text-foreground hover:bg-transparent"
                                      onClick={(e) => {
                                        e.stopPropagation(); // Prevent popover from toggling
                                        setSelectedCompanies(prev => prev.filter(id => id !== company.value));
                                      }}
                                    >
                                      <XIcon className="h-3 w-3" />
                                    </Button>
                                  </Badge>
                                );
                              })}
                            </div>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                          <Command>
                            <CommandInput placeholder="Search company..." />
                            {isLoadingCompanies ? (
                              <CommandList><CommandItem disabled>Loading companies...</CommandItem></CommandList>
                            ) : isErrorCompanies ? (
                              <CommandList><CommandItem disabled>Error fetching companies.</CommandItem></CommandList>
                            ) : (
                              <>
                                <CommandEmpty>No company found.</CommandEmpty>
                                <CommandList>
                                  <CommandGroup>
                                    {companies.map((company) => (
                                      <CommandItem
                                        key={company.value}
                                        value={company.label} 
                                        onSelect={(currentLabel: string) => {
                                          const companyToToggle = companies.find(c => c.label.toLowerCase() === currentLabel.toLowerCase());
                                          if (companyToToggle) {
                                            setSelectedCompanies(prevSelected =>
                                              prevSelected.includes(companyToToggle.value)
                                                ? prevSelected.filter(v => v !== companyToToggle.value)
                                                : [...prevSelected, companyToToggle.value]
                                            );
                                          }
                                          // setOpenCompanyCombobox(false); // Keep open for multi-select
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedCompanies.includes(company.value) ? "opacity-100" : "opacity-0"
                                          )}
                                        />
                                        {company.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </>
                            )}
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="records-per-page" className="text-sm font-medium">
                        Records Per Page
                      </Label>
                      <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
                        <SelectTrigger id="records-per-page">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="25">25</SelectItem>
                          <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      className="self-end h-10 bg-primary hover:bg-primary/90"
                      onClick={handleGetDetails}
                      disabled={activityStreamMutation.isPending}
                    >
                      {activityStreamMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Getting Details...
                        </>
                      ) : (
                        "Get Details"
                      )}
                    </Button>

                    <div className="space-y-1.5">
                      <Label htmlFor="filter-action" className="text-sm font-medium">
                        Filter Action
                      </Label>
                      <Select value={selectedActionFilter} onValueChange={setSelectedActionFilter}>
                        <SelectTrigger id="filter-action">
                          <SelectValue placeholder="Select Action" />
                        </SelectTrigger>
                        <SelectContent>
                          {filterActionOptions.map((action) => (
                            <SelectItem key={action.value} value={action.value}>
                              {action.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2 self-end pb-2">
                       <Label htmlFor="show-login-logout-activities" className="text-sm font-medium whitespace-nowrap">
                        Show Login/Logout
                      </Label>
                      <Switch
                        id="show-login-logout-activities"
                        checked={showLoginLogoutActivities}
                        onCheckedChange={setShowLoginLogoutActivities}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">ACTIVITY RESULTS</CardTitle>
                </CardHeader>
                <CardContent>
                  {activityStreamMutation.isPending && (
                     <div className="flex justify-center items-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="ml-2 text-muted-foreground">Loading activities...</p>
                    </div>
                  )}
                  {activityStreamMutation.isError && !activityStreamMutation.isPending && (
                     <div className="text-center py-8 text-destructive">
                        <p>Failed to load activity stream.</p>
                        <Button variant="link" onClick={handleGetDetails} className="mt-2">Try Again</Button>
                    </div>
                  )}
                  {!activityStreamMutation.isPending && !activityStreamMutation.isError && activityItems.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        <p>No activity to display for the current filters.</p>
                        <Button variant="link" onClick={handleGetDetails} className="mt-2">Refresh Stream</Button>
                    </div>
                  )}
                  {!activityStreamMutation.isPending && !activityStreamMutation.isError && activityItems.length > 0 && (
                    <div className="space-y-4">
                      {activityItems.map(item => (
                        <div key={item.id} className="p-3 border rounded-md bg-gray-50/50 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">{item.action}</span>
                            <span className="text-xs text-gray-500">{item.timestamp}</span>
                          </div>
                          <div className="text-gray-600">User: {item.user}</div>
                          {item.details && <div className="text-xs text-gray-500 mt-0.5">{item.details}</div>}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

            </TabsContent>

            <TabsContent value="change-requests">
              <Card>
                <CardHeader><CardTitle>Change Requests</CardTitle></CardHeader>
                <CardContent><p>Content for Change Requests will go here.</p></CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="inconsistent-invoices">
              <Card>
                <CardHeader><CardTitle>Inconsistent Invoices</CardTitle></CardHeader>
                <CardContent><p>Content for Inconsistent Invoices will go here.</p></CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="inconsistent-transactions">
              <Card>
                <CardHeader><CardTitle>Inconsistent Transactions</CardTitle></CardHeader>
                <CardContent><p>Content for Inconsistent Transactions will go here.</p></CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <AppFooter />
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { Button } from '@cleartax/truss/button';
// import { Card } from '@cleartax/truss/card';
// import { Input } from '@cleartax/truss/input';
// import { Label } from '@cleartax/truss/label';
// import { 
//   Select, 
//   SelectContent, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from '@cleartax/truss/select';
// import { Switch } from '@cleartax/truss/switch';
// import { 
//   Tabs, 
//   TabsContent, 
//   TabsList, 
//   TabsTrigger 
// } from '@cleartax/truss/tabs';
// import './XpdLayout.css';
// import { environment } from '../../environments/environment';

// // Mock data for activity stream
// interface ActivityItem {
//   id: string;
//   action: string;
//   user: string;
//   timestamp: string;
//   details?: string;
// }

// const mockActivityItems: ActivityItem[] = [
//   {
//     id: '1',
//     action: 'User Login',
//     user: 'John Doe',
//     timestamp: '2025-06-18 14:30:45',
//     details: 'Login from 192.168.1.1 using Chrome browser'
//   },
//   {
//     id: '2',
//     action: 'File Upload',
//     user: 'Jane Smith',
//     timestamp: '2025-06-18 13:15:22',
//     details: 'Uploaded invoice batch XYZ123.csv'
//   },
//   {
//     id: '3',
//     action: 'Settings Change',
//     user: 'Admin User',
//     timestamp: '2025-06-18 11:05:33',
//     details: 'Updated company payment terms from Net 30 to Net 45'
//   }
// ];

// // Mock company data
// const mockCompanies = [
//   { value: 'company1', label: 'ClearTax Inc.' },
//   { value: 'company2', label: 'Xpedize Ventures' },
//   { value: 'company3', label: 'Acme Corporation' },
//   { value: 'company4', label: 'Global Enterprises' },
//   { value: 'company5', label: 'Tech Solutions Ltd.' },
// ];

// // Header Component
// // const AppHeader: React.FC<{ isSidebarCollapsed: boolean; toggleSidebar: () => void }> = ({ 
// //   isSidebarCollapsed, toggleSidebar 
// // }) => {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();
  
// //   const handleLogout = async () => {
// //     await logout();
// //     navigate('/login');
// //   };
  
// //   return (
// //     <header className="bg-white border-b border-gray-200 shadow-sm">
// //       <div className="flex items-center justify-between px-4 py-3">
// //         <div className="flex items-center space-x-4">
// //           <Button 
// //             variant="ghost" 
// //             size="icon" 
// //             onClick={toggleSidebar}
// //             className="sidebar-toggle"
// //           >
// //             <span className="sr-only">Toggle sidebar</span>
// //             <i className={isSidebarCollapsed ? "fa fa-bars" : "fa fa-arrow-left"}></i>
// //           </Button>
// //           <div 
// //             className="cursor-pointer flex items-center"
// //             onClick={() => navigate('/xpd-admin')}
// //           >
// //             <img src="/assets/images/company-name_1.png" alt="Logo" className="h-8" />
// //           </div>
// //         </div>
// //         <div className="flex items-center space-x-4">
// //           <div className="text-sm">
// //             <span className="font-medium">Welcome, {user?.name}</span>
// //             {user?.lastLogin && (
// //               <div className="text-xs text-gray-500">
// //                 Last login: {new Date(user.lastLogin).toLocaleString()}
// //               </div>
// //             )}
// //           </div>
// //           <Button variant="destructive" size="sm" onClick={handleLogout}>
// //             Logout
// //           </Button>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // Sidebar Component
// // const AppSidebar: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => {
// //   const location = useLocation();
  
// //   const menuItems = [
// //     { path: '/xpd-admin', icon: 'fa-dashboard', label: 'Dashboard' },
// //     { path: '/xpd-admin/activity-stream', icon: 'fa-stream', label: 'Activity Stream' },
// //     { path: '/xpd-admin/company', icon: 'fa-building', label: 'Companies' },
// //     { path: '/xpd-admin/buyer', icon: 'fa-users', label: 'Buyers' },
// //     { path: '/xpd-admin/data-posting', icon: 'fa-upload', label: 'Data Posting' },
// //     { path: '/xpd-admin/user-upload', icon: 'fa-user-plus', label: 'User Upload' },
// //     { path: '/xpd-admin/cd', icon: 'fa-circle', label: 'CD' }
// //   ];

// //   return (
// //     <aside className={`sidebar bg-gray-100 border-r border-gray-200 ${isCollapsed ? 'closed' : 'open'}`}>
// //       <div className="py-4">
// //         <nav>
// //           <ul className="space-y-1">
// //             {menuItems.map((item) => (
// //               <li key={item.path}>
// //                 <Link
// //                   to={item.path}
// //                   className={`flex items-center px-4 py-2 text-sm ${
// //                     (location.pathname === item.path || 
// //                      (item.path !== '/xpd-admin' && location.pathname.startsWith(item.path)))
// //                       ? 'bg-gray-200 text-primary font-medium'
// //                       : 'text-gray-700 hover:bg-gray-200'
// //                   }`}
// //                 >
// //                   <i className={`fa ${item.icon} mr-3`}></i>
// //                   {!isCollapsed && <span>{item.label}</span>}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
// //       </div>
// //     </aside>
// //   );
// // };

// // Footer Component
// // const AppFooter: React.FC = () => {
// //   const currentYear = new Date().getFullYear();
// //   const [isLoadingBuildInfo, setIsLoadingBuildInfo] = useState(false);
// //   const [buildInfo, setBuildInfo] = useState({ version: '1.0', buildNumber: environment.version || '1.0.0' });
  
// //   return (
// //     <footer className="bg-gray-100 border-t border-gray-200 text-center p-4 text-xs text-gray-600 sticky bottom-0 z-50 w-full">
// //       <div className="container mx-auto">
// //         <span>© {currentYear} Xpedize Ventures Private Limited</span>
// //         <span className="mx-1">|</span>
// //         <Link to="#contact" className="hover:underline text-primary">Contact Us</Link>
// //         <span className="mx-1">|</span>
// //         <Link to="#feedback" className="hover:underline text-primary">Feedback</Link>
// //         <span className="mx-1">|</span>
// //         <Link to="/terms-conditions" className="hover:underline text-primary">Terms & Conditions</Link>
// //         <span className="mx-1">|</span>
// //         <Link to="/privacy-policy" className="hover:underline text-primary">Privacy Policy</Link>
// //         <span className="mx-1 hidden sm:inline">|</span>
// //         <span className="block sm:inline mt-1 sm:mt-0">
// //           Version: {isLoadingBuildInfo ? 'Loading...' : buildInfo?.version || '1.0'} 
// //           Build #{isLoadingBuildInfo ? '...' : buildInfo?.buildNumber || 'N/A'}
// //         </span>
// //       </div>
// //     </footer>
// //   );
// // };

// // Activity Stream Panel
// const ActivityStreamPanel: React.FC = () => {
//   const [selectedCompany, setSelectedCompany] = useState('');
//   const [recordsPerPage, setRecordsPerPage] = useState('10');
//   const [selectedActionFilter, setSelectedActionFilter] = useState('');
//   const [showLoginLogoutActivities, setShowLoginLogoutActivities] = useState(true);
//   const [activityItems, setActivityItems] = useState<ActivityItem[]>(mockActivityItems);
//   const [isLoading, setIsLoading] = useState(false);
  
//   const filterActionOptions = [
//     { value: '', label: 'All Actions' },
//     { value: 'login', label: 'User Login' },
//     { value: 'upload', label: 'File Upload' },
//     { value: 'settings', label: 'Settings Change' },
//     { value: 'viewed', label: 'Viewed Dashboard' },
//   ];
  
//   const handleGetDetails = () => {
//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setActivityItems(mockActivityItems);
//       setIsLoading(false);
//       // Toast notification can be added when the proper implementation is available
//       console.log("Activity stream updated successfully");
//     }, 1000);
//   };
  
//   return (
//     <>
//      <AppHeader isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
//       <Card className="mb-6 shadow-sm">
//         <div className="p-4 border-b border-gray-200">
//           <h2 className="text-lg font-semibold">XPEDIZE ADMIN</h2>
//         </div>
//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-end">
//             <div className="space-y-1.5">
//               <Label htmlFor="select-company">Select Company</Label>
//               <Select value={selectedCompany} onValueChange={setSelectedCompany}>
//                 <SelectTrigger id="select-company">
//                   <SelectValue placeholder="Select Company..." />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {mockCompanies.map((company) => (
//                     <SelectItem key={company.value} value={company.value}>
//                       {company.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
            
//             <div className="space-y-1.5">
//               <Label htmlFor="records-per-page">Records Per Page</Label>
//               <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
//                 <SelectTrigger id="records-per-page">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="2">2</SelectItem>
//                   <SelectItem value="5">5</SelectItem>
//                   <SelectItem value="10">10</SelectItem>
//                   <SelectItem value="25">25</SelectItem>
//                   <SelectItem value="50">50</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
            
//             <Button 
//               className="self-end"
//               onClick={handleGetDetails}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <span className="mr-2 h-4 w-4 animate-spin">⟳</span>
//                   Getting Details...
//                 </>
//               ) : (
//                 "Get Details"
//               )}
//             </Button>
            
//             <div className="space-y-1.5">
//               <Label htmlFor="filter-action">Filter Action</Label>
//               <Select value={selectedActionFilter} onValueChange={setSelectedActionFilter}>
//                 <SelectTrigger id="filter-action">
//                   <SelectValue placeholder="Select Action" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {filterActionOptions.map((action) => (
//                     <SelectItem key={action.value} value={action.value}>
//                       {action.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
            
//             <div className="flex items-center space-x-2 self-end">
//               <Label htmlFor="show-login-logout" className="whitespace-nowrap">
//                 Show Login/Logout
//               </Label>
//               <Switch
//                 id="show-login-logout"
//                 checked={showLoginLogoutActivities}
//                 onCheckedChange={setShowLoginLogoutActivities}
//               />
//             </div>
//           </div>
//         </div>
//       </Card>
      
//       <Card className="shadow-sm">
//         <div className="p-4 border-b border-gray-200">
//           <h2 className="text-lg font-semibold">ACTIVITY STREAM</h2>
//         </div>
//         <div className="p-6">
//           {isLoading ? (
//             <div className="flex justify-center items-center py-8">
//               <span className="h-8 w-8 animate-spin text-primary">⟳</span>
//               <p className="ml-2 text-gray-500">Loading activities...</p>
//             </div>
//           ) : activityItems.length > 0 ? (
//             <div className="space-y-4">
//               {activityItems.map(item => (
//                 <div key={item.id} className="p-3 border rounded-md bg-gray-50 text-sm">
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium text-gray-700">{item.action}</span>
//                     <span className="text-xs text-gray-500">{item.timestamp}</span>
//                   </div>
//                   <div className="text-gray-600">User: {item.user}</div>
//                   {item.details && <div className="text-xs text-gray-500 mt-0.5">{item.details}</div>}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-8 text-gray-500">
//               <p>No activity to display for the current filters.</p>
//               <Button variant="link" onClick={handleGetDetails} className="mt-2">Refresh Stream</Button>
//             </div>
//           )}
//         </div>
//       </Card>
//     </>
//   );
// };

// /**
//  * Main application layout component
//  * Follows the modern UI design from NextJS example
//  */
// const XpdLayout: React.FC = () => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const location = useLocation();
  
//   // Toggle sidebar visibility
//   const toggleSidebar = () => {
//     setSidebarCollapsed(!sidebarCollapsed);
//   };
  
//   return (
//     <div className="flex flex-col min-h-screen bg-background">
//       <AppHeader 
//         isSidebarCollapsed={sidebarCollapsed} 
//         toggleSidebar={toggleSidebar} 
//       />
//       <div className="flex flex-1">
//         <AppSidebar isCollapsed={sidebarCollapsed} />
//         <main className="flex-1 p-6 overflow-auto">
//           {location.pathname === '/xpd-admin/activity-stream' ? (
//             <Tabs defaultValue="activity-stream" className="w-full">
//               <TabsList className="border-b border-gray-200 mb-4">
//                 <TabsTrigger value="activity-stream" className="pb-2">Activity Stream</TabsTrigger>
//                 <TabsTrigger value="change-requests" className="pb-2">Change Requests</TabsTrigger>
//                 <TabsTrigger value="inconsistent-invoices" className="pb-2">Inconsistent Invoices</TabsTrigger>
//                 <TabsTrigger value="inconsistent-transactions" className="pb-2">Inconsistent Transactions</TabsTrigger>
//               </TabsList>

//               <TabsContent value="activity-stream">
//                 <ActivityStreamPanel />
//               </TabsContent>

//               <TabsContent value="change-requests">
//                 <Card>
//                   <div className="p-4 border-b border-gray-200">
//                     <h2 className="text-lg font-semibold">Change Requests</h2>
//                   </div>
//                   <div className="p-6">
//                     <p>Content for Change Requests will go here.</p>
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               <TabsContent value="inconsistent-invoices">
//                 <Card>
//                   <div className="p-4 border-b border-gray-200">
//                     <h2 className="text-lg font-semibold">Inconsistent Invoices</h2>
//                   </div>
//                   <div className="p-6">
//                     <p>Content for Inconsistent Invoices will go here.</p>
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               <TabsContent value="inconsistent-transactions">
//                 <Card>
//                   <div className="p-4 border-b border-gray-200">
//                     <h2 className="text-lg font-semibold">Inconsistent Transactions</h2>
//                   </div>
//                   <div className="p-6">
//                     <p>Content for Inconsistent Transactions will go here.</p>
//                   </div>
//                 </Card>
//               </TabsContent>
//             </Tabs>
//           ) : (
//             <Outlet />
//           )}
//         </main>
//       </div>
//       <AppFooter />
//     </div>
//   );
// };

// export default XpdLayout;


