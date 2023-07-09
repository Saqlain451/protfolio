import CourseCard from "./CourseCard.jsx";
import React, {useEffect} from "react";
import {useGlobalHook} from "../Hooks/Context.jsx";
import Title from "./Title.jsx";

const Projects = () => {
    const {isLoading, isError, getApiData, api, projectData, setProjectsData} = useGlobalHook()
    useEffect(() => {
        getApiData(`${api}/allProjects`, setProjectsData);
    }, [])
    return (<>
        <section id="projects">
            <div className="p-10">
                <Title title={"PROJECTS"}/>
                <h1 className="fs-4 fw-4 mt-4">My Skills and Projects</h1>
                <p className="fs-1-5 text-dark mt-2 lh-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti
                    dignissimos dolores eius
                    fuga fugit iure laboriosam libero, maiores minus modi provident rem suscipit ut vero vitae
                    voluptas voluptates! Laborum, tenetur?</p>
                <div className="grid-4 grid-lg-3 grid-md-2 grid-sm-1 g-3 pt-4 pb-5">
                    {projectData.map((project) => {
                        const {name, image, github, demo, stack} = project
                        return (<CourseCard name={name} image={image} demo={demo} stack={stack} github={github}/>)
                    })}
                </div>
                <button className="btn btn-success d-block mx-auto fs-1-5 ls-1"><a
                    href="https://github.com/Saqlain451?tab=repositories" target={"_blank"}>All Projects</a></button>
            </div>
        </section>
    </>)
}

export default Projects;