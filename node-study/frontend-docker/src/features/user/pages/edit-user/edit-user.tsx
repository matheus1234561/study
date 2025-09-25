import { useState } from "react";
import { PageContent } from "../../../../shared/components/PageContent/page-content";
import { Box, Button, TextField } from "@mui/material";
import editUserStyle from "./edit-user.module.css";
import { updateUser } from "../../../../service/user-service";

export const EditUser = () => {
  const id = localStorage.getItem("id");
  let newId = 0;

  if (id !== null) {
    newId = Number.parseInt(id);
  }
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(event.target.value);
  };

  const edit = () => {
    updateUser(newId, newName, newEmail);
  };

  return (
    <PageContent title="Edit User" haveGoBack={true}>
      <Box className={editUserStyle["div-form"]}>
        <Box className={editUserStyle["div-buttons"]}>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            label="Name"
            value={newName || ""}
            onChange={handleName}
            className={editUserStyle["div-solo-button"]}
            margin="normal"
          ></TextField>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            label="Email"
            value={newEmail || ""}
            onChange={handleEmail}
            className={editUserStyle["div-solo-button"]}
            margin="normal"
          ></TextField>
        </Box>
        <Button onClick={edit} variant="contained">
          Editar usuário
        </Button>
      </Box>
    </PageContent>
  );
};
