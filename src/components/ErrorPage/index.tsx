import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      data-testid="error-page"
      sx={{
        width: "100%",
        height: "calc(100vh - 128px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>Sorry... There was an error loading the page.</Typography>
    </Box>
  );
};

export default ErrorPage;
