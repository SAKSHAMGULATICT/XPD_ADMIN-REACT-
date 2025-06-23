/**
 * Authentication response models
 */

// User information
export interface UserInfo {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: string[];
  profilePicture?: string;
  lastLogin?: string;
  isActive: boolean;
}

// Base authentication response
export interface AuthResponse {
  success: boolean;
  message: string;
}

// Login response model
export interface LoginResponse extends AuthResponse {
  token: string;
  refreshToken: string;
  user: UserInfo;
  expiresIn: number; // expiration time in seconds
}

// OTP verification response
export interface OtpVerificationResponse extends AuthResponse {
  token: string;
  refreshToken: string;
  user: UserInfo;
  expiresIn: number;
}

// Refresh token response
export interface RefreshTokenResponse extends AuthResponse {
  token: string;
  refreshToken: string;
  expiresIn: number;
}

// Forgot password response
export interface ForgotPasswordResponse extends AuthResponse {
  email: string;
}

// Reset password response
export interface ResetPasswordResponse extends AuthResponse {
  email: string;
}
