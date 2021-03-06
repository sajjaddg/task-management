import React from "react";

const AddButtoncircle = ({onClick})=>{
    return(
        <button onClick={onClick} className="border-2 border-[#D9E0E8] w-14 h-14 bg-[#EDF2F8] rounded-full flex justify-center items-center border-dashed">
            <h1 className="text-3xl text-[#5D68FE] pb-1">+</h1>
        </button>
    )
}
export default AddButtoncircle;