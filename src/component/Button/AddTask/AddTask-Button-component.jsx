import React from "react";

const AddTaskButton = ({onClick}) => {
    return (
        <button onClick={onClick} className="bg-[#E8EAFF] md:w-8 md:h-8 w-10 h-10 rounded-lg flex justify-center items-center">
            <h1 className=" text-[#6772FE] md:text-2xl text-3xl pb-1">+</h1>
        </button>
    )
}

export default AddTaskButton;