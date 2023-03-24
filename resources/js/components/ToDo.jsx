import { Card, CardContent, CardHeader, List } from "@mui/material";
import React from "react";
import ToDoDetail from "./ToDoDetail";

const ToDo = (props) => {
    return (
        <Card>
            <CardHeader title={props.toDo.title} />
            <CardContent>
                <List>
                    {[0, 1, 2, 3].map((value) => {
                        return <ToDoDetail id={value} key={value} />;
                    })}
                </List>
            </CardContent>
        </Card>
    );
};

export default ToDo;
