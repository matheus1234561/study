import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserRoutes } from "../../constants/routes";
import { PageContent } from "../../../../shared/components/PageContent/page-content";
import userOptionStyles from "./user-option.module.css";

export const UserOptions = () => {
  const navigate = useNavigate();

  const goToListUsers = () => {
    navigate(UserRoutes.listUsers, { replace: true });
  };

  const goToAddUser = () => {
    navigate(UserRoutes.addUser, { replace: true });
  };

  return (
    <PageContent title="Opções do Usuário">
      <Box className={userOptionStyles["div-form"]}>
        <Box className={userOptionStyles["div-buttons"]}>
          <Button variant="contained" onClick={goToListUsers}>
            List users
          </Button>
          <Button variant="contained" onClick={goToAddUser}>
            Add User
          </Button>
        </Box>
      </Box>
    </PageContent>
  );
};
