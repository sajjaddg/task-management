import { createContext, useEffect, useState } from "react";

const ProjectsContext = createContext({});
const ProjectsProvider = ({children})=>{
    const [projects,setProjects] = useState()
    useEffect(()=>{
        
        const loadFromLocalStorage=()=>{
            //localStorage.clear()
            let localProjects = localStorage.getItem('Projects');
            if(localProjects!==null){
                const as = JSON.parse(localProjects)
                setProjects(as)
            }
        }
        loadFromLocalStorage()
    },[])
    return(
        <ProjectsContext.Provider value={[projects,setProjects]}>
            {children}
        </ProjectsContext.Provider>
    )
} 

export {ProjectsContext,ProjectsProvider};