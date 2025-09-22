import apiClient from "../config/api";

export const makeLogin = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const response = await apiClient.post("/login", {
      email: email,
      password: password,
    });
    const token = response.data.token;

    localStorage.setItem("Token", token);

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};
