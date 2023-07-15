import React from 'react'
import { Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
// ICONS
import { AiFillStar } from "react-icons/ai"
// STYLES
import { Item, Content } from "./StylesMeal";


export default function Meal({ meal, handleAddToCart }) {

    const { title, description, price, popular, picture } = meal

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }
    // console.log(meal);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid item xs={6}>
            <Item onClick={() => {handleAddToCart(meal)}}>
                <Content>
                    <Typography variant={matches ? "h6" : "h4"}>{title}</Typography>
                    <Typography variant={matches ? "h7" : "h5"} align='left'>
                        {truncate(`${description}`, 80)}
                    </Typography>
                    <div style={{ alignItems: "center", }}>  
                        {popular ? <><AiFillStar color="#FFFF00" size={`${matches ? 25  : 35 }`} />Populaire</> : <></> }
                        <Typography variant={matches ? "h7" : "h5"}>{price} €</Typography>
                    </div>
                </Content>
                {picture && <img
                                alt="meal"
                                src={picture}
                                style={{ borderRadius: "20px"}}
                                width= {matches ? "100" : "250"}
                            />
                }
            </Item>
        </Grid>
    )
}


