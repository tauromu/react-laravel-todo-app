import { Card, CardContent, CardHeader, List } from "@mui/material";
import React from "react";
import ToDoDetail from "./ToDoDetail";

const ToDo = (props) => {
    return (
        <Card>
            <CardHeader title={props.toDo.title} />
            <CardContent>
                <List>
                    {props.toDo.to_do_details.map((detail) => {
                        return <ToDoDetail key={detail.id} detail={detail} />;
                    })}
                </List>
            </CardContent>
        </Card>
    );
};

export default ToDo;
