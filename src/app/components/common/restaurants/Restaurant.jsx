import React from 'react'
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { RestaurantRoot } from './StylesRestaurant';


export default function Restaurant({ data }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <RestaurantRoot>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant={matches ? "h5" : "h4"} style={{ marginBottom: "20px"}}>{data.restaurant.name}</Typography>
                <Typography variant={matches ? "h7" : "h5"}>{data.restaurant.description}</Typography>
            </div>
            <img
            	alt="Restaurant"
                src={data.restaurant.picture}
                style={{ borderRadius: "20px"}}
                width= {matches ? "200" : "250"}
            />
        </RestaurantRoot>
    )
}
