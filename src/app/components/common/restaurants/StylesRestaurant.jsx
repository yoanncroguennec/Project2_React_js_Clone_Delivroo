import { styled } from '@mui/material';

export const RestaurantRoot = styled('div')(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]:
        {
            display: "flex",
            flexDirection: "column",
        },
}));
