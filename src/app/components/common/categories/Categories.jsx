import React from 'react'
import { Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { Meal } from '..';
// COMMONS



export default function Categories({ category, handleAddToCart }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Typography variant={matches ? "h6" : "h4"}>{category.name}</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {category.meals.map((meal) => {
                    return (
                        <Meal meal={meal} key={meal.id} handleAddToCart={handleAddToCart} />
                    );
                })}
            </Grid>
        </>
    )
}
