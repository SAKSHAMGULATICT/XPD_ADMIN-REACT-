// import React, { createContext, useReducer, useContext, useEffect } from 'react';
// import { UserInfo } from '../models/login-response';
// import { APP_CONSTANTS } from '../../api-url/app.constants';
// import { environment } from '../../environments/environment';

// // Define the auth state
// interface AuthState {
//   isAuthenticated: boolean;
//   user: UserInfo | null;
//   token: string | null;
//   refreshToken: string | null;
//   loading: boolean;
//   error: string | null;
// }

// // Initial auth state
// const initialState: AuthState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
//   refreshToken: null,
//   loading: true,
//   error: null,
// };

// // Define action types
// enum AuthActionType {
//   LOGIN_SUCCESS = 'LOGIN_SUCCESS',
//   LOGOUT = 'LOGOUT',
//   AUTH_ERROR = 'AUTH_ERROR',
//   CLEAR_ERROR = 'CLEAR_ERROR',
//   SET_LOADING = 'SET_LOADING',
//   UPDATE_USER = 'UPDATE_USER',
// }

// // Define actions
// type AuthAction =
//   | {
//       type: AuthActionType.LOGIN_SUCCESS;
//       payload: {
//         user: UserInfo;
//         token: string;
//         refreshToken: string;
//       };
//     }
//   | { type: AuthActionType.LOGOUT }
//   | { type: AuthActionType.AUTH_ERROR; payload: string }
//   | { type: AuthActionType.CLEAR_ERROR }
//   | { type: AuthActionType.SET_LOADING; payload: boolean }
//   | { type: AuthActionType.UPDATE_USER; payload: UserInfo };

// // Define auth reducer
// const authReducer = (state: AuthState, action: AuthAction): AuthState => {
//   switch (action.type) {
//     case AuthActionType.LOGIN_SUCCESS:
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//         token: action.payload.token,
//         refreshToken: action.payload.refreshToken,
//         loading: false,
//         error: null,
//       };
//     case AuthActionType.LOGOUT:
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//         token: null,
//         refreshToken: null,
//         loading: false,
//       };
//     case AuthActionType.AUTH_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     case AuthActionType.CLEAR_ERROR:
//       return {
//         ...state,
//         error: null,
//       };
//     case AuthActionType.SET_LOADING:
//       return {
//         ...state,
//         loading: action.payload,
//       };
//     case AuthActionType.UPDATE_USER:
//       return {
//         ...state,
//         user: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Define the auth context
// interface AuthContextProps {
//   state: AuthState;
//   login: (
//     user: UserInfo,
//     token: string,
//     refreshToken: string
//   ) => void;
//   logout: () => void;
//   updateUser: (user: UserInfo) => void;
//   clearError: () => void;
//   setLoading: (isLoading: boolean) => void;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// // Auth provider component
// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   // Initialize auth state from localStorage on component mount
//   useEffect(() => {
//     const loadUserFromStorage = () => {
//       const token = localStorage.getItem(APP_CONSTANTS.TOKEN_KEY);
//       const refreshToken = localStorage.getItem(APP_CONSTANTS.REFRESH_TOKEN_KEY);
//       const userInfo = localStorage.getItem(APP_CONSTANTS.USER_INFO_KEY);

//       if (token && refreshToken && userInfo) {
//         try {
//           const user = JSON.parse(userInfo) as UserInfo;
//           dispatch({
//             type: AuthActionType.LOGIN_SUCCESS,
//             payload: {
//               user,
//               token,
//               refreshToken,
//             },
//           });
//         } catch (error) {
//           // Invalid user info in storage
//           console.error('Failed to parse user info from storage', error);
//           localStorage.removeItem(APP_CONSTANTS.TOKEN_KEY);
//           localStorage.removeItem(APP_CONSTANTS.REFRESH_TOKEN_KEY);
//           localStorage.removeItem(APP_CONSTANTS.USER_INFO_KEY);
//           dispatch({ type: AuthActionType.LOGOUT });
//         }
//       } else {
//         // Auto-login for development purposes if no stored credentials
//         if (environment.autoLogin) {
//           console.warn('DEVELOPMENT MODE: Auto-login enabled. This should be disabled in production.');
//           // Create a mock/test user for development
//           const testUser: UserInfo = {
//             id: 'test-user-id',
//             name: 'Test User',
//             email: 'test@example.com',
//             role: 'admin',
//             permissions: ['read', 'write', 'admin'],
//             isActive: true,
//           };
//           const testToken = 'test-token-12345';
//           const testRefreshToken = 'test-refresh-token-12345';
          
//           // Save to localStorage
//           localStorage.setItem(APP_CONSTANTS.TOKEN_KEY, testToken);
//           localStorage.setItem(APP_CONSTANTS.REFRESH_TOKEN_KEY, testRefreshToken);
//           localStorage.setItem(APP_CONSTANTS.USER_INFO_KEY, JSON.stringify(testUser));
          
//           // Update state with test user
//           dispatch({
//             type: AuthActionType.LOGIN_SUCCESS,
//             payload: {
//               user: testUser,
//               token: testToken,
//               refreshToken: testRefreshToken,
//             },
//           });
//         } else {
//           dispatch({ type: AuthActionType.LOGOUT });
//         }
//       }
//     };

//     loadUserFromStorage();
//   }, []);

//   // Auth context actions
//   const login = (user: UserInfo, token: string, refreshToken: string) => {
//     // Save to localStorage
//     localStorage.setItem(APP_CONSTANTS.TOKEN_KEY, token);
//     localStorage.setItem(APP_CONSTANTS.REFRESH_TOKEN_KEY, refreshToken);
//     localStorage.setItem(APP_CONSTANTS.USER_INFO_KEY, JSON.stringify(user));

//     dispatch({
//       type: AuthActionType.LOGIN_SUCCESS,
//       payload: {
//         user,
//         token,
//         refreshToken,
//       },
//     });
//   };

//   const logout = () => {
//     // Clear localStorage
//     localStorage.removeItem(APP_CONSTANTS.TOKEN_KEY);
//     localStorage.removeItem(APP_CONSTANTS.REFRESH_TOKEN_KEY);
//     localStorage.removeItem(APP_CONSTANTS.USER_INFO_KEY);

//     dispatch({ type: AuthActionType.LOGOUT });
//   };

//   const updateUser = (user: UserInfo) => {
//     localStorage.setItem(APP_CONSTANTS.USER_INFO_KEY, JSON.stringify(user));
//     dispatch({
//       type: AuthActionType.UPDATE_USER,
//       payload: user,
//     });
//   };

//   const clearError = () => {
//     dispatch({ type: AuthActionType.CLEAR_ERROR });
//   };

//   const setLoading = (isLoading: boolean) => {
//     dispatch({
//       type: AuthActionType.SET_LOADING,
//       payload: isLoading,
//     });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         state,
//         login,
//         logout,
//         updateUser,
//         clearError,
//         setLoading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the auth context
// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuthContext must be used within an AuthProvider');
//   }
//   return context;
// };
