import { Box, styled } from "@mui/material";

export const RootLayoutApp = styled(Box)(({ theme }) => ({
  margin: "0px",
  [theme.breakpoints.down("sm")]: {
    margin: "0 250px",
  },
}));
