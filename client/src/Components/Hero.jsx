// eslint-disable-next-line no-unused-vars
import {BsArrowDown, BsCodeSlash} from 'react-icons/bs'
import {VscGlobe} from 'react-icons/vsc'
import {BiGitBranch} from 'react-icons/bi'
import {AiOutlineCodeSandbox} from "react-icons/ai";

const Hero = () => {

    return (
        <>
            <section id="hero" className={"p-10"}>
                <div className="d-flex center">
                    <div className="hero-img">
                        <img
                            src="https://media.licdn.com/dms/image/D4D03AQFyS073MjNctQ/profile-displayphoto-shrink_800_800/0/1680365908690?e=1694044800&v=beta&t=np9og32-zWHwJtHeZLFdcv6yAWMHOkVkrVuwpb9kyb8"
                            alt="pic"
                            className="img-fluid img-circle fade-animation p-5"
                            width="864"
                            height="883"
                        />
                    </div>
                </div>
                <h1 className="mt-3 fs-5 text-center ml-10 mr-10 pl-5 pr-5 fw-6">Hi👋, My name is <span
                    className={"text-green"}>Sakil</span> <br/> and i
                    am a passionate <br/> <span className={"typing-text text-green"}>Web Developer</span></h1>
                <p className={"text-center text-dark mt-4 fs-1-5"}>Scroll down</p>
                <p className={"fs-4 text-green text-center mt-2 down-animation"}><BsArrowDown/></p>
                <p className="icon-code side-animation"><BsCodeSlash/></p>
                <p className="icon-globe side-animation"><VscGlobe/></p>
                <p className="icon-git down-animation"><BiGitBranch/></p>
                <p className="icon-box down-animation"><AiOutlineCodeSandbox/></p>
            </section>
        </>
    );
};

export default Hero;
