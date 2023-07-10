import React from 'react';
import Stat from "./Stat.jsx";
import Title from "./Title.jsx";


const TechStack = () => {
    return (
        <>
            <section id="techstack">
                {/*<div className="p-10">*/}
                {/*    <div className="d-flex center">*/}
                {/*        <span className="pt-1 pb-1 pl-3 pr-3 bg-secondery br-0-5 text-green ls-1">TECH STACK</span>*/}
                {/*    </div>*/}
                {/*    <div className="grid-2 grid-sm-1 g-3 mt-5">*/}
                {/*        <div className="tech-stack-left">*/}
                {/*            <h1 className="text-white fs-5 fw-4">Technologies I work with</h1>*/}
                {/*            <p className="fs-1-5 mt-2 text-dark lh-2">*/}
                {/*                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos esse, quis!*/}
                {/*                Architecto debitis deleniti dignissimos doloribus dolorum ducimus iusto*/}
                {/*                magni natus nesciunt porro quisquam ratione, reprehenderit sed suscipit*/}
                {/*                velit veritatis?*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className="tech-stack-right grid-2 g-2 grid-sm-1">*/}

                {/*            {tectStackData.map((tech, id) => {*/}
                {/*                const {name, icon} = tech*/}
                {/*                return (*/}
                {/*                    <p key={id} className={"d-flex center text-green fs-4 g-2"}>*/}
                {/*                        {icon} <span className={"fs-3"}>{name}</span>*/}
                {/*                    </p>*/}
                {/*                )*/}
                {/*            })}*/}


                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*todo -------------- Select any one which is looking realy good ------------------>*/}
                <div className="p-10">
                    <Title title={"TECH STACK"}/>
                    <h1 className="text-white text-center fs-4 mt-3 fw-4">Technologies I work with</h1>
                    <p className="fs-1-5 mt-2 text-dark lh-2 pr-10 pl-10">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                        Et hic illo ipsa ipsam ipsum laudantium, nostrum quo reiciendis repudiandae suscipit veniam
                        vitae voluptate! Eveniet explicabo hic molestias quaerat qui temporibus!</p>
                    <div className="d-flex center mt-3 g-2 flex-wrap">
                        <img
                            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                            alt={"html"}/>
                        <img
                            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                            alt=""/>
                        <img
                            src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
                            alt=""/>
                        <img
                            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                            alt=""/>
                        <img
                            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                            alt=""/>
                        <img
                            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                            alt=""/>
                        <img
                            src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                            alt=""/>
                        <img
                            src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                            alt=""/>
                    </div>

                    <Stat/>

                </div>
            </section>
        </>
    )
}

export default TechStack