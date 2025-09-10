import { Box, Button, TextField } from "@mui/material";
import { PageContent } from "../../../shared/components/PageContent/page-content";
import loginStyle from "./login.module.css";
import { useState } from "react";
import apiClient from "../../../config/api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const makeLogin = async (): Promise<void> => {
    try {
      const response = await apiClient.post("/api/login", {
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

  return (
    <PageContent
      title="Login"
      subTitle="Faça seu login para acessar a plataforma"
    >
      <Box className={loginStyle["div-login"]}>
        <Box className={loginStyle["div-buttons"]}>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            label="Nome de usuário"
            value={email || ""}
            onChange={handleEmail}
            className={loginStyle["div-solo-button"]}
            margin="normal"
          ></TextField>
          <TextField
            variant="outlined"
            type="password"
            size="small"
            label="Senha"
            value={password || ""}
            onChange={handlePassword}
            className={loginStyle["div-solo-button"]}
            margin="normal"
          ></TextField>
        </Box>
        <Button onClick={makeLogin} variant="contained">
          Fazer login
        </Button>
      </Box>
    </PageContent>
  );
};
