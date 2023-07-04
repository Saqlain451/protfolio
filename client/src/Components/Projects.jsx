import CourseCard from "./CourseCard.jsx";
import React, {useEffect} from "react";
import {useGlobalHook} from "../Hooks/Context.jsx";

const Projects = () => {
    const {isLoading,isError,getApiData,api,projectData,setProjectsData} = useGlobalHook()
    useEffect(()=>{
        getApiData(`${api}/allProjects`,setProjectsData);
    },[])
    return (
        <>
            <section id="projects">
                <div className="p-10">
                    <div className="d-flex center">
                        <span className="pt-1 pb-1 pl-3 pr-3 bg-secondery br-0-5 text-green ls-1">PROJECTS</span>
                    </div>
                    <h1 className="fs-4 fw-4 mt-4">My Skills and Projects</h1>
                    <p className="fs-1-5 text-dark mt-2 lh-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
                        dignissimos dolores eius
                        fuga fugit iure laboriosam libero, maiores minus modi provident rem suscipit ut vero vitae
                        voluptas voluptates! Laborum, tenetur?</p>
                    <div className="grid-4 g-3 mt-3">
                        {projectData.map((project)=>{
                            const {name,image,github,demo,stack}=project
                            return(
                                <CourseCard name={name} image={image} demo={demo} stack={stack} github={github}/>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;