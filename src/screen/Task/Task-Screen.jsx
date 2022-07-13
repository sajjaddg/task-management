import React, {useState} from "react";
import AddButtoncircle from "../../component/Button/AddProject/AddProject-Button-component";
import ProjectList from "../../component/ProjectList/Project-List-component";
import CreateProject from "../../component/CreateProject/Create-Project-Modal-component";
const TaskScreen = () => {
    const [modalOn, setModalOn] = useState(false);
    const [projects,setProjects]=useState([]);
    const clicked = () => {
        setModalOn(true)
    }
    
    return (
        <div className="p-10">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-5xl font-semibold">Task</h1>
                <AddButtoncircle onClick={() => clicked()} />
            </div>
            <ProjectList projects={projects} />
            {modalOn && < CreateProject setModalOn={setModalOn} setProjects={setProjects}/>}
        </div>
    )
}

export default TaskScreen;