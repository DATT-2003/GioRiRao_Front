// services/auth.service.js
import api from "./api/axios";
import { ENDPOINTS } from "./api/endpoints";

class AuthService {
  async login(credentials) {
    try {
      const response = await api.post(ENDPOINTS.AUTH.LOGIN, credentials);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async register(userData) {
    try {
      return await api.post(ENDPOINTS.AUTH.REGISTER, userData);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async logout() {
    try {
      await api.post(ENDPOINTS.AUTH.LOGOUT);
      localStorage.removeItem("token");
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    return {
      message: error.response?.data?.message || "An error occurred",
      status: error.response?.status,
      data: error.response?.data,
    };
  }
}

export default new AuthService();
