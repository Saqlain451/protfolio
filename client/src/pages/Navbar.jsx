import {LiaBarsSolid} from "react-icons/lia";
import {useGlobalHook} from "../Hooks/Context";

const Navbar = () => {

    const {show, navToggle} = useGlobalHook()

    return (
        <>
            <header className={show ? "show bg-secondery" : "bg-secondery"}>
                <div className="navbar-logo">
                    <a href={"/"}><h1 className="text-green fs2-5">Port <span className="text-white">Folio</span></h1>
                    </a>
                </div>
                <nav>
                    <ul className="navbar-list">
                        <li>
                            <a href={"#techstack"} className={"text-dark fs-1-5 navbar-link"}
                               onClick={navToggle}>TechStack</a>
                        </li>
                        <li>
                            <a href={"#projects"} className={"text-dark fs-1-5 navbar-link"}
                               onClick={navToggle}>Projects</a>
                        </li>
                        <li>
                            <a href={"#testimonial"} className={"text-dark fs-1-5 navbar-link"}
                               onClick={navToggle}>Testimonial</a>
                        </li>
                        <li>
                            <a href="#faq" className={"text-dark fs-1-5 navbar-link"} onClick={navToggle}>FAQs</a>
                        </li>
                        <li className={"contact"}>
                            <a href={"#contact"} className={"fs-1-5 navbar-link"} onClick={navToggle}>Get in
                                touch</a>
                        </li>
                    </ul>
                </nav>
                <button onClick={navToggle}>
                    <LiaBarsSolid/>
                </button>
            </header>
        </>
    );
};

export default Navbar;
