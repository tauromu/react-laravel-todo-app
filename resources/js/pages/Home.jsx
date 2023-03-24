import { Box, Grid } from "@mui/material";
import React from "react";
import ToDo from "../components/ToDo";
import { useGetToDoList } from "../hooks/ToDoList";
import useCurrentToDoList from "../hooks/ToDoList/useCurrentToDoList";

const Home = () => {
    const { isLoading } = useGetToDoList();
    const toDoList = useCurrentToDoList();
    if (isLoading) return "Now Loading...";
    return (
        <Box sx={{ flexGrow: 1, m: 2 }}>
            <Grid container spacing={2}>
                {toDoList.map((toDo) => {
                    return (
                        <Grid item key={toDo.id} xs={3}>
                            <ToDo toDo={toDo} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Home;
