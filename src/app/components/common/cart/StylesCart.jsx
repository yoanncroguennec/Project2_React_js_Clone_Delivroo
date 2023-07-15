import { Box, styled, List } from "@mui/material";

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: "#333",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid green`,
}));


export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));