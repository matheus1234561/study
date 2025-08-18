import { Box, Button, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import apiClient from "../../../../config/api";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
}

export const ListUser = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async (): Promise<void> => {
    try {
      const response = await apiClient.get("/api/users");
      setUsers(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <Box className="div-page">
      <Typography variant="h2"> List Users</Typography>
      <Box className="div-buttons">
        <Box className="click-buttons">
          <Button variant="contained" onClick={getUsers}>
            List users
          </Button>
        </Box>
      </Box>

      <Box>
        {users.length > 0 ? (
          users.map((user) => (
            <Box
              key={user.id}
              className="user-box"
              mb={2}
              p={2}
              border={1}
              borderRadius={2}
            >
              <Typography variant="h6">Name: {user.name}</Typography>
              <Typography variant="body1">Email: {user.email}</Typography>
              <Typography variant="body2" color="textSecondary">
                Created at: {user.created_at}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">No users available.</Typography>
        )}
      </Box>
    </Box>
  );
};
