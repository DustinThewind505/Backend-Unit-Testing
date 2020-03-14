
import React from "react"
import { isPropertySignature } from "typescript";

const ToDo = props => {

    return (
        <div className={`${props.task.complete ? "complete" : ""}`} onClick={() => props.toggleTask(props.task.id)}>
            <h3>{props.task.name}</h3>
        </div>
    )
}

export default ToDo;