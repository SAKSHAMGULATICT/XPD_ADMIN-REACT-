// import React, { useState, useEffect } from 'react';
// import { useOtpVerification } from '../auth/auth-hooks';
// import { OtpVerificationRequest } from '../models/auth-request';
// import { Button } from '@cleartax/truss/button';
// import { Card } from '@cleartax/truss/card';
// import { Input } from '@cleartax/truss/input';
// import { Label } from '@cleartax/truss/label';

// interface OTPVerificationProps {
//   email: string;
//   onBack: () => void;
// }

// /**
//  * OTP Verification component
//  */
// const OTPVerification: React.FC<OTPVerificationProps> = ({ email, onBack }) => {
//   // Form state
//   const [otp, setOtp] = useState('');
//   const [timer, setTimer] = useState(60);
  
//   // Auth hook
//   const { verifyOtpCode, isLoading, error, clearError } = useOtpVerification();

//   // Countdown timer
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
      
//       return () => clearInterval(interval);
//     }
//   }, [timer]);

//   /**
//    * Handle form submission
//    */
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Clear any previous errors
//     clearError();
    
//     // Validate form
//     if (!otp) {
//       return;
//     }
    
//     // Create verification request
//     const verificationData: OtpVerificationRequest = {
//       email,
//       otp,
//       deviceInfo: {
//         deviceType: 'web',
//         deviceName: navigator.userAgent,
//       },
//     };
    
//     // Attempt verification
//     await verifyOtpCode(verificationData);
//   };

//   /**
//    * Handle resend OTP
//    */
//   const handleResend = () => {
//     // Here you would call the API to resend OTP
//     // For now, just reset the timer
//     setTimer(60);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
//       <Card className="w-full max-w-md p-6">
//         <div className="mb-6 text-center">
//           <h1 className="text-2xl font-bold">Verify OTP</h1>
//           <p className="text-gray-600">
//             A one-time password has been sent to your email
//           </p>
//         </div>
        
//         {error && (
//           <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
//             {error}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <Label htmlFor="otp" className="mb-1 block">
//               One-Time Password
//             </Label>
//             <Input
//               id="otp"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Enter OTP"
//               required
//               className="w-full"
//               disabled={isLoading}
//             />
//           </div>
          
//           <div className="mb-6 text-center text-sm text-gray-600">
//             {timer > 0 ? (
//               <p>Resend OTP in {timer} seconds</p>
//             ) : (
//               <button 
//                 type="button" 
//                 onClick={handleResend} 
//                 className="text-blue-600 hover:underline"
//                 disabled={isLoading}
//               >
//                 Resend OTP
//               </button>
//             )}
//           </div>
          
//           <div className="flex gap-4">
//             <Button 
//               type="button" 
//               variant="outline"
//               className="flex-1" 
//               onClick={onBack}
//               disabled={isLoading}
//             >
//               Back
//             </Button>
//             <Button 
//               type="submit" 
//               className="flex-1" 
//               disabled={isLoading}
//             >
//               {isLoading ? 'Verifying...' : 'Verify'}
//             </Button>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default OTPVerification;
