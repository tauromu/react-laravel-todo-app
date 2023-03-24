import { Box, Grid } from "@mui/material";
import React from "react";
import ToDo from "../components/ToDo";

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1, m: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ToDo />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
