import { Box, Typography, IconButton } from "@mui/material";
import pageContent from "./page-content.module.css";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface PageContentProps {
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
}

export const PageContent: React.FC<PageContentProps> = ({
  children,
  title,
  subTitle,
}) => {

  const navigate = useNavigate();

  const goBack = () =>{
    navigate(-1);
  }

  return (
    <Box className={pageContent["div-page"]}>
      <Box className={pageContent["div-header"]}>
        <IconButton onClick={goBack}>
        <ArrowBack className={pageContent["icon"]} fontSize="large"/>
      </IconButton>
      <Typography className={pageContent["typography-title"]} variant="h2">
        {title}
      </Typography>
      {subTitle && <Typography>{subTitle}</Typography>}
      </Box>
      <Box className={pageContent["div-content"]}>{children}</Box>
    </Box>
  );
};
