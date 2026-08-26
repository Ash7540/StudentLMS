import { apiClient } from "@/lib/api-client";

export const studentService = {
  async getDashboard() {
    const response = await apiClient.get("/students/dashboard");
    return response.data;
  },
  async getPreferences() {
    const response = await apiClient.get("/students/preferences");
    return response.data;
  },
};
