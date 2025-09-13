import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserRoutes } from "../../constants/routes";
import { PageContent } from "../../../../shared/components/PageContent/page-content";

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
      <Box className="div-buttons">
        <Box className="click-buttons">
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
