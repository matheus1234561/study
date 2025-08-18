import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserRoutes } from "../../constants/routes";

export const UserOptions = () => {
  const navigate = useNavigate();

  const goToListUsers = () => {
    navigate(UserRoutes.listUsers, { replace: true });
  };
  return (
    <Box className="div-page">
      <Typography variant="h2">User Options</Typography>
      <Box className="div-buttons">
        <Box className="click-buttons">
          <Button variant="contained" onClick={goToListUsers}>
            List users
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
