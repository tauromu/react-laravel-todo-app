import { AddCircle, Delete } from "@mui/icons-material";
import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    List,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
    useDeleteToDoMutateTask,
    useUpdateToDoMutateTask,
} from "../hooks/ToDo";
import { useStoreToDoDetailMutateTask } from "../hooks/ToDoDetail";
import ToDoDetail from "./ToDoDetail";

const ToDo = (props) => {
    const [timer, setTimer] = useState(null);
    let toDo = {
        id: props.toDo.id,
        title: props.toDo.title,
    };
    const { updateToDoMutation } = useUpdateToDoMutateTask();
    const eventUpdateToDo = (event) => {
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            let data = {
                ...toDo,
                title: event.target.value,
            };
            updateToDoMutation.mutate(data);
        }, 500);
        setTimer(newTimer);
    };

    const { deleteToDoMutation } = useDeleteToDoMutateTask();
    const eventDeleteToDo = (event) => {
        console.log(deleteToDoMutation);
        deleteToDoMutation.mutate(toDo);
    };

    const { storeToDoDetailMutation } = useStoreToDoDetailMutateTask();
    const eventStoreToDoDetail = (event) => {
        storeToDoDetailMutation.mutate(toDo);
    };

    return (
        <Card>
            <TextField
                variant="standard"
                margin="dense"
                defaultValue={props.toDo.title}
                fullWidth
                onChange={eventUpdateToDo}
            />
            <CardContent>
                <List>
                    {props.toDo.to_do_details.map((detail) => {
                        return <ToDoDetail key={detail.id} detail={detail} />;
                    })}
                </List>
            </CardContent>
            <CardActions>
                <IconButton
                    edge="start"
                    aria-label="add"
                    color="primary"
                    onClick={eventStoreToDoDetail}
                >
                    <AddCircle />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteToDo}
                >
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ToDo;
