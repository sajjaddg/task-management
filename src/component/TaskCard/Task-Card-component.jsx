import React, { useContext, useState } from 'react'
import { AiFillFlag } from 'react-icons/ai'
import { RiDeleteBin7Line } from 'react-icons/ri';
import { BiCopy } from 'react-icons/bi'
import { GrEdit } from 'react-icons/gr'
import Popup from 'reactjs-popup';
import { ProjectsContext } from '../../context/ProjectsContext';
import EditTask from '../EditTask/Edit-Task-Modal-component';

const TaskCard = ({ project, task }) => {
    const [editModalShow, setEditModalShow] = useState(false);
    const [state, setState] = useContext(ProjectsContext)
    const handleDelete = () => {
        project.Tasks = project.Tasks.filter((item) => item.Id !== task.Id)
        const newState = state.map(item => {
            if (item.Id === project.Id) {
                return project
            }
            return item
        })
        setState(newState)
    }
    const handleDoneTask=()=>{
        task.Done = !task.Done
        project.Tasks = project.Tasks.map((item)=>{
            if(task.Id===item.Id){
                return task
            }
            return item
        })
        const newState = state.map(item => {
            if (item.Id === project.Id) {
                return project
            }
            return item
        })
        setState(newState)
        
    }
    const handleEdit = () => {
        setEditModalShow(true)
    }
    return (
        <div className="pt-4 pb-4 md:pb-2 pl-6 md:pr-2 rounded-xl flex w-full flex-col bg-white md:w-80 lg:w-60">
            <div className="flex flex-row justify-end">
                <Popup
                    trigger={open => <button className="flex mr-5 md:mr-2 justify-center items-center md:h-4 md:w-4 h-6 w-6 text-[#768396] md:text-2xl pb-3 text-3xl">...</button>}
                    position="center top"
                    closeOnDocumentClick
                    contentStyle={{ padding: '0px', border: 'none' }}
                    arrow={false}
                >
                    {close => (
                        <div className="flex flex-col bg-white  drop-shadow-lg rounded-lg mt-8 space-y-1 px-2 w-40 mr-20">
                            <button onClick={() => [handleEdit(), close()]} className="flex flex-row items-center space-x-4 hover:bg-[#7F8698] hover:bg-opacity-10 rounded-xl py-2">
                                <GrEdit />
                                <h1 className="font-medium">Edit</h1>
                            </button>
                            <button onClick={() => handleDelete()} className="flex flex-row items-center space-x-4 hover:bg-[#7F8698] hover:bg-opacity-10 rounded-xl py-2">
                                <RiDeleteBin7Line />
                                <h1 className="font-medium">Delete Project</h1>
                            </button>
                        </div>
                    )
                    }
                </Popup>
            </div>
            {/* label */}
            {/* <div className="flex flex-row">

                <div className="bg-[#5051F9] p-1 px-4 rounded-lg lg:px-2 ">
                    <h1 className="text-white text-lg lg:text-sm">Research</h1>
                </div>
            </div> */}
            <div className="flex flex-col space-y-2 lg:space-y-1 pr-3 md:pr-2">
                <h1 className="text-[#232360] text-xl font-medium lg:text-lg">{task.TaskName}</h1>
                <p className="text-[#768396] text-sm break-words">{task.TaskDescription}</p>
            </div>
            <div className="flex pt-6 flex-row justify-between lg:py-3">
                <div className='flex flex-row'>
                    <AiFillFlag color='#C4CAD3' />
                    <div className=" flex-row px-2 lg:px-2">
                        <h1 className=" text-sm lg:text-sm text-[#C4CAD3]">{task.Date}</h1>
                    </div>
                </div>
                <input type="radio" className='accent-[#7784EE] mr-2 w-6 h-6' onChange={()=>{}} checked={task.Done} onClick={(e)=>handleDoneTask(e)} />
            </div>
            {editModalShow && <EditTask project={project} task={task} setModalOn={setEditModalShow} />}
        </div>
    )
}

export default TaskCard;
