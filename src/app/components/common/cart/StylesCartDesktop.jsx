import { Box, styled, List, Button } from "@mui/material";

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  background: "red",
  border: "1px solid #000",
  borderRadius: "25px",
  padding: "15px",
  position: "fixed",
  right: "35px",
}));

export const BoxBtnsQtyPrice = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
}));

export const BoxBtnsQty = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
}));

export const BtnsQty = styled(Button)(() => ({
  //   background: "blue",
  //   background: "linear-gradient(225deg, #27d86c 0%, #26caf8 50%, #c625d0 100%)",
  //   height: "25px",
  //   maxWidth: "41px",
  padding: "1px 1px",
  margin: "10px",
  cursor: "pointer",
  border: "0px",
  color: "#FFF",
  background: "transparent",
  position: "relative",
  transition: "all .2s",
  overflow: "hidden",
  borderRadius: "30px",
  boxShadow:
    "0px -0px 0px 0px rgba(143, 64, 248, .5), 0px 0px 0px 0px rgba(39, 200, 255, .5)",
  "&::after": {
    content: "''",
    width: "300px",
    height: "300px",
    position: "absolute",
    top: "-50px",
    left: "-100px",
    background:
      "linear-gradient(225deg, #27d86c 0%, #26caf8 50%, #c625d0 100%)",
    zIndex: "-1",
    transition: "all .5s",
  },
  "&::hover": {
    transform: "translate(0, -6px)",
    boxShadow: "10px -10px 25px 0px rgba(143, 64, 248, .25), -10px 10px 25px 0px rgba(39, 200, 255, .25)",
  },
}));

