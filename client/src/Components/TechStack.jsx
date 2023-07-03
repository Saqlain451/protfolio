import React from 'react';
import {tectStackData} from "../Hooks/Data.jsx";

const TechStack = () => {
    return (
        <>
            <section id="techstack">
                <div className="p-10 grid-2 grid-sm-1 g-3">
                    <div className="tech-stack-left">
                        <h1 className="text-white fs-5 fw-4">Technologies I work with</h1>
                        <p className="fs-1-5 mt-2 text-dark lh-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos esse, quis!
                            Architecto debitis deleniti dignissimos doloribus dolorum ducimus iusto
                            magni natus nesciunt porro quisquam ratione, reprehenderit sed suscipit
                            velit veritatis?
                        </p>
                    </div>
                    <div className="tech-stack-right grid-2 g-2 grid-sm-1">

                        {tectStackData.map((tech, id) => {
                            const {name, icon} = tech
                            return (
                                <p key={id} className={"d-flex center text-green fs-4 g-2"}>
                                    {icon} <span className={"fs-3"}>{name}</span>
                                </p>
                            )
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStack