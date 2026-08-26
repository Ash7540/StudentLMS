import { apiClient } from "@/lib/api-client";

export const authService = {
  async login(email: string, password: string) {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  },
  async register(data: Record<string, any>) {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  },
};
