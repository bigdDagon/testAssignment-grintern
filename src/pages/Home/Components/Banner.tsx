import React from "react";

import { Box, Typography } from "@mui/material";

interface BannerProps {
  label: string;
}
const Banner: React.FC<BannerProps> = ({ label }) => {
  return (
    <Box m={5}>
      <Typography textAlign={"center"} variant="h4">
        {label}
      </Typography>
    </Box>
  );
};

export default Banner;
