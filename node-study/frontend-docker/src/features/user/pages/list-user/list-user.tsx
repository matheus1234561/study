import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { PageContent } from "../../../../shared/components/PageContent/page-content";
import { DateFormatter } from "../../../../shared/utils/formatter";
import { User } from "../../../../shared/models/user-model";
import { getUsers } from "../../../../service/user-service";
import { Delete, Edit } from "@mui/icons-material";
import listUserStyle from "./list-user.module.css";

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
  };

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
            <Box key={user.id} className={listUserStyle["user-box"]}>
              <Box className={listUserStyle["typography-box"]}>
                <Typography variant="h6">Name: {user.name}</Typography>
                <Typography variant="body1">Email: {user.email}</Typography>
                <Typography variant="body2" color="textSecondary">
                  BirthDate: {DateFormatter(user.created_at)}
                </Typography>
              </Box>
              <Box className={listUserStyle["icon-box"]}>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <Typography variant="body1">No users available.</Typography>
        )}
      </Box>
    </PageContent>
  );
};
