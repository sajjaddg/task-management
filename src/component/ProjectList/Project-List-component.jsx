import React, { useContext, useEffect, useState } from "react";
import ProjectCard from "../../component/ProjectCard/Project-Card-component";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectList = ()=>{
    const [state,setState] =useContext(ProjectsContext)
    const [redey,setRedey] = useState(false)
    useEffect(()=>{
        if(state){
      
        setRedey(true)
        }
    },[state])
    return(
        
        <div className="grid place-items-center items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-4">
            {redey?(
                state?.map((item)=>{return(
                    <ProjectCard key={item.Id} Id={item.Id}/>
                )})):null
            }    
        </div>
    )
}

export default ProjectList;