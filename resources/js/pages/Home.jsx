import { Add } from "@mui/icons-material";
import { Box, Fab, Grid } from "@mui/material";
import React from "react";
import ToDo from "../components/ToDo";
import { useStoreToDoMutateTask } from "../hooks/ToDo";
import { useGetToDoList } from "../hooks/ToDoList";
import useCurrentToDoList from "../hooks/ToDoList/useCurrentToDoList";

const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
};

const Home = () => {
    const { storeToDoMutation } = useStoreToDoMutateTask();
    const eventStoreToDo = (event) => {
        storeToDoMutation.mutate();
    };
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
            <Fab
                color="primary"
                aria-label="add"
                sx={fabStyle}
                onClick={eventStoreToDo}
            >
                <Add />
            </Fab>
        </Box>
    );
};

export default Home;
