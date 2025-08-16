import { Box, Button, Typography } from "@mui/material";

export const UserOptions = () => {
  return (
    <Box className="div-page">
      <Typography variant="h2">User Options</Typography>
      <Box className="div-buttons">
        <Box className="click-buttons">
          <Button variant="contained" onClick={() => {}}>
            List users
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
