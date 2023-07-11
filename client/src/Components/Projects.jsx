import CourseCard from "./CourseCard.jsx";
import {useEffect} from "react";
import {useGlobalHook} from "../Hooks/Context.jsx";
import Title from "./Title.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";

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
                <p className="fs-1-5 text-dark mt-2 lh-2">Welcome to my portfolio projects section, where I showcase a
                    selection of my web development projects. These projects reflect my skills and expertise in creating
                    dynamic and engaging web applications. For a comprehensive view of my work, please visit my GitHub
                    profile, where you can explore my full collection of projects</p>


                {isLoading ? <Loader/> : isError ? <Error/> :
                    <div className="grid-4 grid-lg-3 grid-md-2 grid-sm-1 g-3 pt-4 pb-5">
                        {projectData.map((project, id) => {
                            const {name, image, github, demo, stack} = project
                            return (
                                <CourseCard name={name} image={image} demo={demo} stack={stack} github={github}
                                            key={id}/>)
                        })}
                    </div>
                }


                <button className="btn btn-success d-block mx-auto fs-1-5 ls-1"><a
                    href="https://github.com/Saqlain451?tab=repositories" target={"_blank"} rel="noreferrer">All
                    Projects</a>
                </button>
            </div>
        </section>
    </>)
}

export default Projects;