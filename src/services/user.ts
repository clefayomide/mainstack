import { api } from "@/axios";

export class User {
  async getUserInfo() {
    try {
      const response = await api.get(`/user`);

      return response.data;
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw new Error("Failed to fetch user info");
    }
  }
}
