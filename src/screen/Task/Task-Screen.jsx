import React from "react";
import AddButtoncircle from "../../component/Button/AddProject/AddProject-Button-component";
import ProjectTitle from "../../component/ProjectTitle/Project-Title-component";
import TaskCard from "../../component/TaskCard/Task-Card-component";
const TaskScreen = () => {
    return (
        <div className="p-10">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-5xl">Task</h1>
                <AddButtoncircle />
            </div>
            <div className="grid place-items-center items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-4">
                <div className="grid grid-cols-1 gap-y-4">
                    <ProjectTitle title={'Backlog'} />
                    <TaskCard/>
                </div>
                <ProjectTitle title={'To Do'} />
                <ProjectTitle title={'In Progress'} />
                <ProjectTitle title={'Review'} />
                <ProjectTitle title={'Backlog'} />
                <ProjectTitle title={'To Do'} />
                <ProjectTitle title={'In Progress'} />
                <ProjectTitle title={'Review'} />
            </div>
        </div>
    )
}
export default TaskScreen;