import { Box, Button, TextField } from "@mui/material";
import { PageContent } from "../../../../shared/components/PageContent/page-content";
import { useState } from "react";
import addUserStyle from "./add-user.module.css";
import { addUser } from "../../../../service/user-service";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const add = () => {
    addUser(name, email, password);
  };

  return (
    <PageContent title="Add User" haveGoBack={true}>
      <Box className={addUserStyle["div-form"]}>
        <Box className={addUserStyle["div-buttons"]}>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            label="Name"
            value={name || ""}
            onChange={handleName}
            className={addUserStyle["div-solo-button"]}
            margin="normal"
          ></TextField>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            label="Email"
            value={email || ""}
            onChange={handleEmail}
            className={addUserStyle["div-solo-button"]}
            margin="normal"
          ></TextField>
          <TextField
            variant="outlined"
            type="password"
            size="small"
            label="Senha"
            value={password || ""}
            onChange={handlePassword}
            className={addUserStyle["div-solo-button"]}
            margin="normal"
          ></TextField>
        </Box>
        <Button onClick={add} variant="contained">
          Adicionar usuário
        </Button>
      </Box>
    </PageContent>
  );
};
