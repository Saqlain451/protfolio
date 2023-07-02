import CourseCard from "./CourseCard.jsx";

const Projects = () => {
    return (
        <>
            <section id="projects">
                <div className="p-10">
                    <h1 className="fs-4 fw-4">Selected Projects</h1>
                    <p className="mt-2 fs-1-5 lh-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, assumenda atque
                        blanditiis consectetur cupiditate distinctio, facilis itaque maiores nesciunt officiis, quam
                        quisquam repudiandae soluta vero! Asperiores facere mollitia soluta.</p>
                    <div className="grid-4 g-3 mt-5">
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;