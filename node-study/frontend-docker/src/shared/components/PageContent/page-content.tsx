import { Box, Typography } from "@mui/material";
import pageContent from "./page-content.module.css";

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
  return (
    <Box className={pageContent["div-page"]}>
      <Typography className={pageContent["typography-title"]} variant="h2">
        {title}
      </Typography>
      {subTitle && <Typography>{subTitle}</Typography>}
      <Box className={pageContent["div-content"]}>{children}</Box>
    </Box>
  );
};
