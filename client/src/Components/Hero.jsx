import React from "react";
import {BsArrowDown, BsBox, BsCodeSlash} from 'react-icons/bs'
import {VscGlobe} from 'react-icons/vsc'
import {BiGitBranch} from 'react-icons/bi'

const Hero = () => {

    return (
        <>
            <section id="hero" className={"p-10"}>
                <div className="d-flex center">
                    <div className="hero-img">
                        <img
                            src="./assets/me.png"
                            alt="pic"
                            className="img-fluid img-circle fade-animation"
                            width="864"
                            height="883"
                        />
                    </div>
                </div>
                <h1 className="mt-3 fs-5 text-center">The Art of Web Development</h1>
                <p className="fs-1-5 pl-10 pr-10 mt-2 lh-2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                    pariatur delectus voluptatum illo ipsum dolores consequuntur a
                    aliquid velit reiciendis commodi repudiandae ratione eveniet maxime
                    cum dolorum neque nam voluptate.
                </p>
                <p className={"text-center text-dark mt-4 fs-1-5"}>Scroll down</p>
                <p className={"fs-4 text-green text-center mt-2 down-animation"}><BsArrowDown/></p>
                <p className="icon-code side-animation"><BsCodeSlash/></p>
                <p className="icon-globe side-animation"><VscGlobe/></p>
                <p className="icon-git down-animation"><BiGitBranch/></p>
                <p className="icon-box down-animation"><BsBox/></p>
            </section>
        </>
    );
};

export default Hero;
