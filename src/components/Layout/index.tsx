import React from "react";
import { Box, Container } from "@mui/material";
import NavBar from "../Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Container sx={{ marginTop: 3 }}>{children}</Container>
    </Box>
  );
};

export default Layout;
