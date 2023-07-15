import {
  Box,
  styled,
} from "@mui/material";

export const RootNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  [theme.breakpoints.down("sm")]: {},
}));

export const stylesLogo = {
  width: "60px",
};
