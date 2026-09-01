import { apiClient } from "@/lib/api-client";

export interface RegisterPayload {
  email: string;
  password: string;
  full_name: string;
  role: "student" | "educator" | "admin";
}

export interface LoginPayload {
  email: string;
  password: string;
}

export const authService = {
  async register(payload: RegisterPayload) {
    try {
      const response = await apiClient.post("/auth/register", payload);
      return { success: true, data: response.data };
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.detail ||
        "Registration failed. Please try again.";
      return { success: false, error: message };
    }
  },

  async login(payload: LoginPayload) {
    try {
      const response = await apiClient.post("/auth/login", payload);
      const data = response.data;
      if (typeof window !== "undefined" && data.access_token) {
        localStorage.setItem("access_token", data.access_token);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      }
      return { success: true, data };
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.detail ||
        "Login failed. Invalid email address or password.";
      return { success: false, error: message };
    }
  },

  async getCurrentUser() {
    try {
      const response = await apiClient.get("/auth/me");
      return { success: true, data: response.data };
    } catch (error: any) {
      return { success: false, error: "Failed to fetch profile." };
    }
  },

  logout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    }
  },
};
