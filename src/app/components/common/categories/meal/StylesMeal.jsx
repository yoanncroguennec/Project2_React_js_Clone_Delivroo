import { Paper, styled } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    alignItems: "center",
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
    display: "flex",
    flexWrap: "nowrap",
    height: "260px",
    justifyContent: "center",
    padding: theme.spacing(1),
    textAlign: 'center',
    [theme.breakpoints.down("sm")]:
        {
            display: "flex",
            flexDirection: "column",
        },
}));

export const Content = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]:
        {
            height: "250px"
        },
}));