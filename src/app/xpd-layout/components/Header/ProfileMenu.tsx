// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@cleartax/truss/button';
// import { useAuth } from '../../../../hooks/useAuth';
// import { UserInfo } from '../../../models/login-response';

// interface ProfileMenuProps {
//   user: UserInfo;
// }

// /**
//  * ProfileMenu component
//  * Displays user profile dropdown menu in the header
//  */
// const ProfileMenu: React.FC<ProfileMenuProps> = ({ user }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();
//   const { logout } = useAuth();
  
//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };
    
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
  
//   // Handle menu toggle
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
  
//   // Handle logout
//   const handleLogout = async () => {
//     await logout();
//     navigate('/login');
//   };
  
//   // Handle navigation
//   const navigateTo = (path: string) => {
//     setIsOpen(false);
//     navigate(path);
//   };
  
//   return (
//     <div className="relative" ref={menuRef}>
//       <Button 
//         variant="ghost" 
//         onClick={toggleMenu}
//         className="flex items-center gap-2"
//       >
//         <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
//           {user.name.charAt(0).toUpperCase()}
//         </div>
//         <span className="hidden md:inline">{user.name}</span>
//       </Button>
      
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 overflow-hidden">
//           <div className="px-4 py-3 border-b">
//             <p className="text-sm font-medium">{user.name}</p>
//             <p className="text-xs text-gray-500 truncate">{user.email}</p>
//           </div>
          
//           <div className="py-1">
//             <button 
//               className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//               onClick={() => navigateTo('/profile')}
//             >
//               Your Profile
//             </button>
//             <button 
//               className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//               onClick={() => navigateTo('/settings')}
//             >
//               Settings
//             </button>
//             <button 
//               className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
//               onClick={handleLogout}
//             >
//               Sign out
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileMenu;
