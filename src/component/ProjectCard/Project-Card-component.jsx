import React from "react";
import TaskCard from "../TaskCard/Task-Card-component";
import ProjectTitle from "../ProjectTitle/Project-Title-component";
const ProjectCard =({project})=>{
        return(
        <div className="grid grid-cols-1 gap-y-4">
            {project?<ProjectTitle project={project} />:null}
              {project.Tasks?.map((item)=>{
                return(
                    <TaskCard/>
                )
              })}
        </div>
    )
}

export default ProjectCard;