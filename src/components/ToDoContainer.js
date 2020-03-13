import React from "react";

import ToDo from "./Todo";
import Form from "./Form";

const ToDoConatainer = props => {

    return (
        <div>
            {props.tasks.map(task => (
                <ToDo key={task.id} task={task} />
            ))}
            <button>
                Clear Tasks
            </button>

            <Form />
        </div>
    )
};

export default ToDoConatainer;