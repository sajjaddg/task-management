import React from "react";
import AddTaskButton from "../Button/AddTask/AddTask-Button-component";
const ProjectTitle = (props) => {
    return (
        <div className="bg-white lg:w-60 p-6 w-full md:w-80 md:p-4 py-3 rounded-xl flex-row flex justify-between items-center">
            <div className="flex">
                <h1 className="md:text-xl w-full text-2xl text-[#232360] truncate font-medium">{props.title}</h1>
            </div>
            <div className="flex flex-row-reverse items-center">
                <AddTaskButton />
                <button onClick={() => { }} className="flex mr-5 md:mr-2 justify-center items-center md:h-4 md:w-4 h-6 w-6 text-[#768396] md:text-2xl pb-3 text-3xl">...</button>
            </div>
        </div>
    )
}

export default ProjectTitle;