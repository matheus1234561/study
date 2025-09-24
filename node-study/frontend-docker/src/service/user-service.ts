import apiClient from "../config/api";

export const getUsers = async (): Promise<void> => {
  try {
    const response = await apiClient.get("/api/users", {
      headers: { Authorization: localStorage.getItem("Token") || "" },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const addUser = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const response = await apiClient.post(
      "/api/users",
      { name: name, email: email, password: password },
      {
        headers: { Authorization: localStorage.getItem("Token") || "" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const deleteUser = async (id: number): Promise<void>=>{
  try {
    const response = await apiClient.delete(
      `/api/users/${id}`,
      {
        headers: { Authorization: localStorage.getItem("Token") || "" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}
