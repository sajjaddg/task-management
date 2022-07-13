import React from "react";
import TaskCard from "../TaskCard/Task-Card-component";
import ProjectTitle from "../ProjectTitle/Project-Title-component";
const ProjectCard =({project})=>{
    return(
        <div className="grid grid-cols-1 gap-y-4">
            <ProjectTitle title={project.ProjectName} />
            <TaskCard/>
        </div>
    )
}

export default ProjectCard;