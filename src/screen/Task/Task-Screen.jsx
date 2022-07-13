import React, { useContext, useEffect, useState } from "react";
import AddButtoncircle from "../../component/Button/AddProject/AddProject-Button-component";
import ProjectList from "../../component/ProjectList/Project-List-component";
import CreateProject from "../../component/CreateProject/Create-Project-Modal-component";
import { ProjectsContext } from "../../context/ProjectsContext";
const TaskScreen = () => {
    const [state, setState] = useContext(ProjectsContext)
    const [modalOn, setModalOn] = useState(false);
    const [redey, setRedey] = useState(false)
    const clicked = () => {
        setModalOn(true)
    }
    useEffect(() => {
        if (state) {
          
            setRedey(true)
        }
    }, [state])
    useEffect(() => {
        if (redey) {
            if (state.length > 0) {
                localStorage.setItem('Projects', JSON.stringify(state))
            }
        }
    }, [redey, state])
    return (
        <div className="p-10">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-5xl font-semibold">Task</h1>
                <AddButtoncircle onClick={() => clicked()} />
            </div>
            <ProjectList />
            {modalOn && < CreateProject setModalOn={setModalOn} />}
        </div>
    )
}

export default TaskScreen;