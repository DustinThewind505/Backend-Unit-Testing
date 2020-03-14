import React from "react";

import ToDo from "./Todo";
import Form from "./Form";

const ToDoConatainer = props => {

    return (
        <div>
            <Form addNewTask={props.addNewTask}/>
            {props.tasks.map(task => (
                <ToDo key={task.id} task={task} toggleTask={props.toggleTask}/>
            ))}
            <button onClick={() => console.log("Meow")}>
                Clear Tasks
            </button>
        </div>
    )
};

export default ToDoConatainer;