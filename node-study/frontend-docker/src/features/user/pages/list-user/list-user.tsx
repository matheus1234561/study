import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import apiClient from "../../../../config/api";
import { PageContent } from "../../../../shared/components/PageContent/page-content";
import { DateFormatter } from "../../../../shared/utils/formatter";

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
      const response = await apiClient.get("/api/users", {
        headers: { Authorization: localStorage.getItem("Token") || "" },
      });
      setUsers(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <PageContent title="Lista de Usuários">
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
                Created at: {DateFormatter(user.created_at)}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">No users available.</Typography>
        )}
      </Box>
    </PageContent>
  );
};
