/**
 * Authentication request models
 */

// Login request model with email/password
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// OTP verification request
export interface OtpVerificationRequest {
  email: string;
  otp: string;
  deviceInfo?: {
    deviceId?: string;
    deviceType?: string;
    deviceName?: string;
  };
}

// Forgot password request
export interface ForgotPasswordRequest {
  email: string;
}

// Reset password request
export interface ResetPasswordRequest {
  email: string;
  token: string;
  newPassword: string;
  confirmPassword: string;
}

// Change password request
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Refresh token request
export interface RefreshTokenRequest {
  refreshToken: string;
}
