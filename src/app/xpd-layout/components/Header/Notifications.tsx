import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@cleartax/truss/button';

/**
 * Notification item interface
 */
interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

/**
 * Notifications component
 * Displays notification bell and dropdown in the header
 */
const Notifications: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Load notifications (placeholder data for now)
  useEffect(() => {
    // This would normally come from an API
    const demoNotifications: Notification[] = [
      {
        id: '1',
        title: 'New Company Registered',
        message: 'ABC Corp has registered on the platform.',
        timestamp: '2023-06-18T10:30:00Z',
        read: false,
      },
      {
        id: '2',
        title: 'Buyer Update',
        message: 'John Smith updated their profile information.',
        timestamp: '2023-06-17T14:45:00Z',
        read: false,
      },
      {
        id: '3',
        title: 'System Notification',
        message: 'System maintenance scheduled for Sunday, June 25.',
        timestamp: '2023-06-16T08:15:00Z',
        read: true,
      },
    ];
    
    setNotifications(demoNotifications);
    setUnreadCount(demoNotifications.filter(n => !n.read).length);
  }, []);
  
  // Toggle notifications dropdown
  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };
  
  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    
    setUnreadCount(prevCount => Math.max(0, prevCount - 1));
  };
  
  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
    
    setUnreadCount(0);
  };
  
  return (
    <div className="relative" ref={menuRef}>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleNotifications}
        className="relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 overflow-hidden">
          <div className="px-4 py-3 border-b flex justify-between items-center">
            <h3 className="text-sm font-semibold">Notifications</h3>
            {unreadCount > 0 && (
              <button 
                className="text-xs text-blue-600 hover:text-blue-800"
                onClick={markAllAsRead}
              >
                Mark all as read
              </button>
            )}
          </div>
          
          <div className="max-h-72 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              notifications.map(notification => (
                <div 
                  key={notification.id}
                  className={`p-4 border-b last:border-0 hover:bg-gray-50 ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">{notification.title}</h4>
                    <span className="text-xs text-gray-500">
                      {new Date(notification.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                </div>
              ))
            )}
          </div>
          
          <div className="p-2 border-t text-center">
            <button className="text-xs text-blue-600 hover:text-blue-800">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
