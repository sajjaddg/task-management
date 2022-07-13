import React from "react";
import ProjectCard from "../../component/ProjectCard/Project-Card-component";

const ProjectList = ({projects})=>{
    return(
        <div className="grid place-items-center items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-4">
            {projects.map((project)=>{
                return(
                    <ProjectCard key={project.Id} project={project}/>
                )
            })}
        </div>
    )
}

export default ProjectList;