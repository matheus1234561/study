import { Box, Button, TextField } from "@mui/material";
import { PageContent } from "../../../shared/components/PageContent/page-content";
import loginStyle from "./login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeRoutes } from "../../home/constants/routes";
import { makeLogin } from "../../../service/auth-service";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = () => {
    makeLogin(email, password).then(() => {
      navigate(HomeRoutes.home);
    });
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
            label="Email"
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
        <Button onClick={login} variant="contained">
          Fazer login
        </Button>
      </Box>
    </PageContent>
  );
};
