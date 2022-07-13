import React, { useContext, useEffect, useState } from "react";
import AddTaskButton from "../Button/AddTask/AddTask-Button-component";
import { RiDeleteBin7Line } from 'react-icons/ri';
import { BiCopy } from 'react-icons/bi'
import { GrEdit } from 'react-icons/gr'
import Popup from 'reactjs-popup';
import { ProjectsContext } from "../../context/ProjectsContext";
import EditProject from "../EditProject/Edit-Project-Modal-component";
const ProjectTitle = ({Id}) => {
    const[state,setState] = useContext(ProjectsContext);
    const [modalOn, setModalOn] = useState(false);
    const [project,setProject] = useState('');
   useEffect(()=>{
        if(state){
            let p = state.find((x)=> x.Id===Id)
            setProject(p)
        }
   },[state])
    const handleDuplicate = () => {
        let newProject = {
            Id: Date.now(),
            ProjectName: project.ProjectName,
            Tasks: project.Tasks
        }
        setState(old => [...old, newProject])
    }
    const handleDelete = () => {
        let p = state.filter((item)=>{return Id!==item.Id})
         setState(p)
     }
    const handleEdit = () => { 
        setModalOn(true)
    }
    return (
        <div className="bg-white lg:w-60 p-6 w-full md:w-80 md:p-4 py-3 rounded-xl flex-row flex justify-between items-center">
            <div className="flex">
                <h1 className="md:text-xl w-full text-2xl text-[#232360] truncate font-medium">{project.ProjectName}</h1>
            </div>
            <div className="flex flex-row-reverse items-center">
                <AddTaskButton />

                <Popup
                    trigger={open => <button className="flex mr-5 md:mr-2 justify-center items-center md:h-4 md:w-4 h-6 w-6 text-[#768396] md:text-2xl pb-3 text-3xl">...</button>}
                    position="center top"
                    closeOnDocumentClick
                    contentStyle={{ padding: '0px', border: 'none' }}
                    arrow={true}
                >
                    {close => (
                        <div className="flex flex-col bg-white  drop-shadow-lg rounded-lg mt-8 space-y-1 px-2 w-40 mr-20">
                            <button onClick={()=>[handleEdit(),close()]} className="flex flex-row items-center space-x-4 hover:bg-[#7F8698] hover:bg-opacity-10 rounded-xl py-2">
                                <GrEdit />
                                <h1 className="font-medium">Edit</h1>
                            </button>
                            <button onClick={() => [handleDuplicate(),close()]} className="flex flex-row items-center space-x-4 hover:bg-[#7F8698] hover:bg-opacity-10 rounded-xl py-2">
                                <BiCopy />
                                <h1 className="font-medium">Duplicate</h1>
                            </button>
                            <button onClick={()=>handleDelete()}className="flex flex-row items-center space-x-4 hover:bg-[#7F8698] hover:bg-opacity-10 rounded-xl py-2">
                                <RiDeleteBin7Line />
                                <h1 className="font-medium">Delete Project</h1>
                            </button>
                        </div>
                    )
                    }
                </Popup>
                {modalOn && < EditProject Id={project?.Id} setModalOn={setModalOn} />}
            </div>
        </div>
    )
}

export default ProjectTitle;