import { Delete } from "@mui/icons-material";
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useUpdateToDoDetailMutateTask } from "../hooks/ToDoDetail";

const ToDoDetail = (props) => {
    const [timer, setTimer] = useState(null);

    let toDoDetail = {
        id: props.detail.id,
        name: props.detail.name,
    };

    const { updateToDoDetailMutation } = useUpdateToDoDetailMutateTask();
    const eventUpdateToDoDetail = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDoDetail,
                name: event.target.value,
            };
            updateToDoDetailMutation.mutate(data);
        }, 500);

        setTimer(newTimer);
    };
    return (
        <ListItem
            key={props.detail.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <Checkbox edge="start" />
                <TextField
                    variant="standard"
                    margin="dense"
                    defaultValue={props.detail.name}
                    fullWidth
                    onChange={eventUpdateToDoDetail}
                />
            </ListItemButton>
        </ListItem>
    );
};

export default ToDoDetail;
