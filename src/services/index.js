export { default as authService } from "./auth.service";

/**
 * Example usage in component
import { authService } from '@/services';

const LoginComponent = () => {
  const handleLogin = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      // Handle successful login
    } catch (error) {
      // Handle error
      console.error('Login failed:', error.message);
    }
  };

  // ... rest of component
};
 */

/**
 * Example usage in redux
 * // redux/slices/authSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '@/services';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
 */
