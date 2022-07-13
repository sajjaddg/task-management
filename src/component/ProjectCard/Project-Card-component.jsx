import React from "react";
import TaskCard from "../TaskCard/Task-Card-component";
import ProjectTitle from "../ProjectTitle/Project-Title-component";
const ProjectCard =()=>{
    return(
        <div className="grid grid-cols-1 gap-y-4">
            <ProjectTitle title={'Backlog'} />
            <TaskCard/>
        </div>
    )
}

export default ProjectCard;