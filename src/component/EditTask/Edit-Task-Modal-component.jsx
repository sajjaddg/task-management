import React, { useContext, useEffect, useState } from "react"
import { ProjectsContext } from "../../context/ProjectsContext";

const EditTask = ({ setModalOn, project, task }) => {
    const [state, setState] = useContext(ProjectsContext)
    const [taskName, setTaskName] = useState(task.TaskName);
    const [taskDescription, setTaskDescription] = useState(task.TaskDescription);
    const [error, setError] = useState(false);

    const handleOKClick = () => {
        if (!taskName.length > 0) {
            setError(true)
            return;
        }
        task = { ...task, TaskName: taskName, TaskDescription: taskDescription }

        project.Tasks = project.Tasks.map((item) => {
            if (item.Id === task.Id) {
                return task
            }
            return item
        })
        const newState = state.map((item) => {
            if (item.Id === project.Id) {
                return project
            }
            return item
        })
        setState(newState)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setModalOn(false)
    }
    return (
        <div className=" bg-zinc-200 bg-opacity-25 backdrop-blur-sm fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col justify-center w-96  bg-white py-4 px-4 rounded-xl drop-shadow-lg">
                    <div className="flex flex-row justify-end">
                        <button className="text-[#95A3B9]" onClick={() => handleCancelClick()}>X</button>
                    </div>
                    <h1 className="text-lg font-medium text-[#121212]">Edit Task</h1>
                    <input value={taskName} onChange={(e) => { setTaskName(e.target.value) }} type="text" placeholder={`${error ? `Please fill in here :) ` : `What is The Task?`}`} className={`border focus:outline-[#7784EE] focus:shadow-md rounded-lg w-full mt-3 h-12 p-4 ${error ? `border-red-400` : null}`} />
                    <textarea value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} placeholder={'What is Task about?'} className={'border focus:outline-[#7784EE] focus:shadow-md rounded-lg w-full mt-3 h-32 p-4 text-start align-top'} />
                    <button className="w-full mt-3 bg-[#7784EE] rounded-lg h-12 text-white font-medium" onClick={() => handleOKClick()}>Done</button>
                </div>
            </div>
        </div>
    );
}

export default EditTask;