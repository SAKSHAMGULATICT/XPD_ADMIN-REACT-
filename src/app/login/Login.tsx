// import React, { useState } from 'react';
// import { useLogin } from '../auth/auth-hooks';
// import { LoginRequest } from '../models/auth-request';
// import { Button } from '@cleartax/truss/button';
// import { Card } from '@cleartax/truss/card';
// import { Input } from '@cleartax/truss/input';
// import { Checkbox } from '@cleartax/truss/checkbox';
// import { Label } from '@cleartax/truss/label';

// /**
//  * Login component
//  */
// const Login: React.FC = () => {
//   // Form state
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
  
//   // Auth hook
//   const { login, isLoading, error, clearError } = useLogin();

//   /**
//    * Handle form submission
//    */
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Clear any previous errors
//     clearError();
    
//     // Validate form
//     if (!email || !password) {
//       return;
//     }
    
//     // Create login request
//     const loginData: LoginRequest = {
//       email,
//       password,
//       rememberMe,
//     };
    
//     // Attempt login
//     await login(loginData);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
//       <Card className="w-full max-w-md p-6">
//         <div className="mb-6 text-center">
//           <h1 className="text-2xl font-bold">Clear Admin</h1>
//           <p className="text-gray-600">Login to your account</p>
//         </div>
        
//         {error && (
//           <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
//             {error}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <Label htmlFor="email" className="mb-1 block">
//               Email
//             </Label>
//             <Input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//               className="w-full"
//               disabled={isLoading}
//             />
//           </div>
          
//           <div className="mb-6">
//             <Label htmlFor="password" className="mb-1 block">
//               Password
//             </Label>
//             <Input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               className="w-full"
//               disabled={isLoading}
//             />
//           </div>
          
//           <div className="mb-6 flex items-center">
//             <Checkbox
//               id="remember-me"
//               checked={rememberMe}
//               onCheckedChange={(checked) => 
//                 setRememberMe(checked === true)
//               }
//               disabled={isLoading}
//             />
//             <Label htmlFor="remember-me" className="ml-2">
//               Remember me
//             </Label>
//           </div>
          
//           <Button 
//             type="submit" 
//             className="w-full" 
//             disabled={isLoading}
//           >
//             {isLoading ? 'Logging in...' : 'Login'}
//           </Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default Login;
