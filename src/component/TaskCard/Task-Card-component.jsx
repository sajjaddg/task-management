import React, { useEffect } from 'react'
import {AiFillFlag} from 'react-icons/ai'

const TaskCard = ({task}) => {
    return (
        <div className="p-4 px-6 rounded-xl flex w-full flex-col bg-white md:w-80 lg:w-60">
            {/* label */}
            {/* <div className="flex flex-row">

                <div className="bg-[#5051F9] p-1 px-4 rounded-lg lg:px-2 ">
                    <h1 className="text-white text-lg lg:text-sm">Research</h1>
                </div>
            </div> */}
            <div className="flex flex-col space-y-2 pt-3 lg:space-y-1">
                <h1 className="text-[#232360] text-xl font-medium lg:text-lg">{task.TaskName}</h1>
                <h2 className="text-[#768396] text-sm ">{task.TaskDescription}</h2>
            </div>
            <div className="flex py-4 flex-row justify-start lg:py-3">
                <AiFillFlag color='#C4CAD3'/>
                <div className=" flex-row px-2 lg:px-2">
                    <h1 className=" text-sm lg:text-sm text-[#C4CAD3]">{task.Date}</h1>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;
