import { useState} from 'react'

import './App.css'

import Task from './components/Task.tsx'
import type {TaskType} from './types/taskTypes.ts';
import * as React from "react";

function App() {

  function updateTask(i:number){
    const newTasks = [...tasks];
    const foundTask = newTasks[i];
    foundTask.status = !foundTask.status;
    foundTask.last_update = new Date();
    setTasks(newTasks);

  }

  function cancelTask(i:number){
    const newTasks = [...tasks]
    newTasks.splice(i,1);
    setTasks(newTasks);
  }

  function addNewTask(name: string, e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    const newestTask:TaskType = {label:name,status:false,start:new Date(),last_update: new Date()}
    const newTasks = [newestTask,...tasks]
    setNewTaskName("")
    setTasksMade(tasksMade+1);
    setTasks(newTasks);
  }

  const [tasks,setTasks] = useState<TaskType[]>([
    {
      label: "Task 1",
      start: new Date(),
      last_update: new Date(),
      status: false
    },
    {
      label: "Task 2",
      start: new Date(),
      last_update: new Date(),
      status: true
    }
  ]);
  function handleTaskNameChange(e:React.ChangeEvent<HTMLInputElement>){
      setNewTaskName(e.target.value);

  }

  const [tasksMade,setTasksMade] = useState(2);
  const [newTaskName,setNewTaskName] = useState("")

  return (
    <>
      <form className={"task-input"}  onSubmit={(event)=>addNewTask(newTaskName==""?`Task ${tasksMade+1}`:newTaskName,event)}>
        <input type={"text"} value={newTaskName} onChange={handleTaskNameChange} placeholder={"New Task Name..."} />
        <button type={'submit'} id={"add-button"}>Add</button>
      </form>
      <div className={"container"}>
        {tasks.map((t,index)=>
            <Task task={t} updateFunction={()=>updateTask(index)} cancelFunction={()=>cancelTask(index)} />
        )}
      </div>
    </>
  )
}

export default App
