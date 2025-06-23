// import { useState, useCallback } from 'react';
// import { NotificationType } from '../api-url/enum.constants';

// /**
//  * Toast/notification interface
//  */
// export interface Toast {
//   id: string;
//   type: NotificationType;
//   message: string;
//   title?: string;
//   duration?: number;
//   onClose?: () => void;
// }

// /**
//  * Toast hook for managing notifications
//  */
// export const useToast = () => {
//   // Toast state
//   const [toasts, setToasts] = useState<Toast[]>([]);
  
//   /**
//    * Add a new toast notification
//    */
//   const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
//     const id = Math.random().toString(36).substring(2, 9);
//     const newToast: Toast = {
//       ...toast,
//       id,
//       duration: toast.duration || 5000, // Default 5 seconds
//     };
    
//     setToasts((prev) => [...prev, newToast]);
    
//     // Auto-dismiss toast after duration
//     if (newToast.duration && newToast.duration > 0) {
//       setTimeout(() => {
//         removeToast(id);
        
//         // Call onClose callback if provided
//         if (toast.onClose) {
//           toast.onClose();
//         }
//       }, newToast.duration);
//     }
    
//     return id;
//   }, []);
  
//   /**
//    * Remove a toast by ID
//    */
//   const removeToast = useCallback((id: string) => {
//     setToasts((prev) => prev.filter((toast) => toast.id !== id));
//   }, []);
  
//   /**
//    * Clear all toasts
//    */
//   const clearToasts = useCallback(() => {
//     setToasts([]);
//   }, []);
  
//   /**
//    * Show a success toast
//    */
//   const success = useCallback(
//     (message: string, options?: Omit<Toast, 'id' | 'type' | 'message'>) => {
//       return addToast({
//         type: NotificationType.SUCCESS,
//         message,
//         title: options?.title || 'Success',
//         ...options,
//       });
//     },
//     [addToast]
//   );
  
//   /**
//    * Show an error toast
//    */
//   const error = useCallback(
//     (message: string, options?: Omit<Toast, 'id' | 'type' | 'message'>) => {
//       return addToast({
//         type: NotificationType.ERROR,
//         message,
//         title: options?.title || 'Error',
//         ...options,
//       });
//     },
//     [addToast]
//   );
  
//   /**
//    * Show a warning toast
//    */
//   const warning = useCallback(
//     (message: string, options?: Omit<Toast, 'id' | 'type' | 'message'>) => {
//       return addToast({
//         type: NotificationType.WARNING,
//         message,
//         title: options?.title || 'Warning',
//         ...options,
//       });
//     },
//     [addToast]
//   );
  
//   /**
//    * Show an info toast
//    */
//   const info = useCallback(
//     (message: string, options?: Omit<Toast, 'id' | 'type' | 'message'>) => {
//       return addToast({
//         type: NotificationType.INFO,
//         message,
//         title: options?.title || 'Info',
//         ...options,
//       });
//     },
//     [addToast]
//   );
  
//   return {
//     toasts,
//     addToast,
//     removeToast,
//     clearToasts,
//     success,
//     error,
//     warning,
//     info,
//   };
// };
