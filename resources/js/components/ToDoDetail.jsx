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
import {
    useDeleteToDoDetailMutateTask,
    useUpdateToDoDetailMutateTask,
} from "../hooks/ToDoDetail";

const ToDoDetail = (props) => {
    const [timer, setTimer] = useState(null);

    let toDoDetail = {
        id: props.detail.id,
        name: props.detail.name,
        completed_flag: props.detail.completed_flag,
        to_do_id: props.detail.to_do_id,
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

    const eventCheckToDoDetail = (event) => {
        let data = {
            ...toDoDetail,
            completed_flag: event.target.checked,
        };
        updateToDoDetailMutation.mutate(data);
    };

    const { deleteToDoDetailMutation } = useDeleteToDoDetailMutateTask();
    const eventDeleteToDoDetail = (event) => {
        deleteToDoDetailMutation.mutate(toDoDetail);
    };

    return (
        <ListItem
            key={props.detail.id}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteToDoDetail}
                >
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <Checkbox
                    edge="start"
                    checked={props.detail.completed_flag}
                    onChange={eventCheckToDoDetail}
                />
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
