import React, { useContext, useEffect, useState } from "react"
import { ProjectsContext } from "../../context/ProjectsContext";

const EditProject = ({ setModalOn, project }) => {
    const [state, setState] = useContext(ProjectsContext)
    const [projectName, setProjectName] = useState(project.ProjectName);
    const [error, setError] = useState(false);

    const handleOKClick = () => {
        if (!projectName.length > 0) {
            setError(true)
            return;
        }

        const newState = state.map(item => {
            if (item.Id === project.Id) {
                return { ...item, ProjectName: projectName }
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
                    <h1 className="text-lg font-medium text-[#121212]">Edit Project</h1>
                    <input value={projectName} onChange={(e) => { setProjectName(e.target.value) }} type="text" placeholder={`${error ? `Please fill in here :) ` : `What is The Project?`}`} className={`border focus:outline-[#7784EE] focus:shadow-md rounded-lg w-full mt-3 h-12 p-4 ${error ? `border-red-400` : null}`} />
                    <button className="w-full mt-3 bg-[#7784EE] rounded-lg h-12 text-white font-medium" onClick={() => handleOKClick()}>Done</button>
                </div>
            </div>
        </div>
    );
}

export default EditProject;