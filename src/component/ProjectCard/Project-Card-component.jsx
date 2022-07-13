import React, { useContext, useEffect, useState } from "react";
import TaskCard from "../TaskCard/Task-Card-component";
import ProjectTitle from "../ProjectTitle/Project-Title-component";
import { ProjectsContext } from "../../context/ProjectsContext";
const ProjectCard =({Id})=>{
        return(
        <div className="grid grid-cols-1 gap-y-4">
            <ProjectTitle Id={Id} />
            <TaskCard/>
        </div>
    )
}

export default ProjectCard;