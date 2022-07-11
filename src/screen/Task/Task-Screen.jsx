import React from "react";
import AddButtoncircle from "../../component/Button/AddProject/AddProject-Button-component";
import ProjectTitle from "../../component/ProjectTitle/Project-Title-componenet";
const TaskScreen =()=>{
    return(
        <div className="p-10">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-5xl">Task</h1>
                <AddButtoncircle/>
           </div>
           <div className="flex flex-wrap flex-col items-center md:space-y-0 space-y-4 md:space-x-4 md:flex-row md:justify-center px-2 mt-4">
               <ProjectTitle title={'Backlog'}/>
               <ProjectTitle title={'To Do'}/>
               <ProjectTitle title={'In Progress'}/>
               <ProjectTitle title={'Review'}/>
               <ProjectTitle title={'Backlog'}/>
               <ProjectTitle title={'To Do'}/>
               <ProjectTitle title={'In Progress'}/>
               <ProjectTitle title={'Review'}/>
           </div>
        </div>
    )
}
export default TaskScreen;