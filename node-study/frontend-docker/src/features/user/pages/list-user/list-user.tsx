import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PageContent } from "../../../../shared/components/PageContent/page-content";
import { DateFormatter } from "../../../../shared/utils/formatter";
import { User } from "../../../../shared/models/user-model";
import { deleteUser, getUsers } from "../../../../service/user-service";
import { Delete, Edit } from "@mui/icons-material";
import listUserStyle from "./list-user.module.css";

export const ListUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

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

  const userDelete = (id: number) => {
    setLoading(true);
    const userToDelete = deleteUser(id);
    userToDelete.then((res) => {
      setLoading(false);
      listUser();
    });
  };

  return (
    <PageContent title="Lista de Usuários" haveGoBack={true}>
      <Box className="div-buttons">
        <Box className="click-buttons">
          <Button variant="contained" onClick={listUser}>
            List users
          </Button>
        </Box>
      </Box>

      <Box>
        {!loading && users.length > 0 ? (
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
                <IconButton onClick={() => userDelete(user.id)}>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <>
            {loading && users.length === 0 && (
              <Typography variant="body1">No users available.</Typography>
            )}
            {loading && <Typography variant="body1">Loading...</Typography>}
          </>
        )}
      </Box>
    </PageContent>
  );
};
