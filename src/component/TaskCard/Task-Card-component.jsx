import React from 'react'


const TaskCard = () => {
    return (
        <div className="p-4 px-6 rounded-xl flex w-full flex-col bg-white md:w-80 lg:w-60">
            <div className="flex flex-row">
                <div className="bg-[#5051F9] p-1 px-4 rounded-lg lg:px-2 ">
                    <h1 className="text-white text-lg lg:text-sm">Research</h1>
                </div>
            </div>
            <div className="flex flex-col space-y-2 pt-3 lg:space-y-1">
                <h1 className="text-[#232360] text-xl font-medium lg:text-lg">Copywriting Content</h1>
                <h2 className="text-[#768396] text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo minus voluptatibus iusto labore tenetur obcaecati nobis aut perspiciatis delectus.</h2>
            </div>
            <div className="flex py-4 flex-row justify-start lg:py-3">
                <div className="px-3 border-2 rounded-md border-[#E2E2E2] lg:px-2">
                    <h1 className="font-medium lg:text-sm">Aug 20, 2021</h1>
                </div>
            </div>
        </div>
    )
}

export default TaskCard;
