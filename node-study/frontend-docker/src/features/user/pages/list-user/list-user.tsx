import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { PageContent } from "../../../../shared/components/PageContent/page-content";
import { DateFormatter } from "../../../../shared/utils/formatter";
import { User } from "../../../../shared/models/user-model";
import { getUsers } from "../../../../service/user-service";

export const ListUser = () => {
  const [users, setUsers] = useState<User[]>([]);


  const listUser = () => {
    const user = getUsers();
    user.then((res) => {
      if (Array.isArray(res)) {
        setUsers(res);
      } else {
        console.error("Unexpected response:", res);
      }
    });
  }

  return (
    <PageContent title="Lista de Usuários">
      <Box className="div-buttons">
        <Box className="click-buttons">
          <Button variant="contained" onClick={listUser}>
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
                BirthDate: {DateFormatter(user.created_at)}
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
