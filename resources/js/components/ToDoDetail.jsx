import { Delete } from "@mui/icons-material";
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import React from "react";

const ToDoDetail = (props) => {
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
                <ListItemText primary={`${props.detail.name}`}></ListItemText>
            </ListItemButton>
        </ListItem>
    );
};

export default ToDoDetail;
