import type {TaskType} from "../types/taskTypes.ts";

interface TaskSetup{
    task: TaskType;
    updateFunction: ()=>void;
    cancelFunction: ()=>void;
}

function Task(props:TaskSetup){
    return(
        <div className={"task-container"}>
            <div className={"task-body"}>
                <p>{props.task.label}</p>
                <p><>Created:</> <>{props.task.start.toLocaleDateString()}</></p>
                <p><>Updated:</> <>{props.task.last_update.toLocaleDateString()}</></p>
                <p><>Status:</> <>{props.task.status?"Complete":"Incomplete"}</></p>
                <button onClick={props.updateFunction}>Update Status</button>
                <button onClick={props.cancelFunction}>Remove</button>
            </div>
        </div>
    )
}

export default Task;