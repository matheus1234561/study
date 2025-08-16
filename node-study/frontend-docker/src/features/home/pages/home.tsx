import { Box, Button, Typography } from "@mui/material";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { UserRoutes } from "../../user/constants/routes";

export const Home = () => {
  const navigate = useNavigate();

  const goToUsers = () => {
    navigate(UserRoutes.userOptions);
  };

  return (
    <Box className="div-page">
      <Typography className="typography-title" variant="h2">
        Home Page
      </Typography>
      <Box className="div-buttons">
        <Box className="click-buttons">
          <Button variant="contained" onClick={goToUsers}>
            Users
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
