import { Box, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
// UTILS ASSETS IMG
import logoDeliveroo from "../../../utils/assets/imgs/LogoDeliveroo.png";
// STYLES
import { RootNavbar, stylesLogo } from "./StylesNavbar";

////////////////////// EXPORT FUNCTION //////////////////////
export default function Navbar() {

  return (
    <RootNavbar>
      <img src={logoDeliveroo} alt='Logo deliveroo' style={stylesLogo} />
      <Typography color='#01ccbd' variant='h4'>
        Clone Deliveroo
      </Typography>
    </RootNavbar>
  );
}
