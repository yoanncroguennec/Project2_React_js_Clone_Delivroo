import { Box, styled } from "@mui/material";

export const RootLayoutApp = styled(Box)(({ theme }) => ({
  margin: "0px 250px",
  [theme.breakpoints.down("sm")]: {
    margin: "0",
  },
}));
