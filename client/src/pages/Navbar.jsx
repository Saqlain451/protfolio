import { LiaBarsSolid } from "react-icons/lia";
import {NavLink} from 'react-router-dom'
import { useGlobalHook } from "../Hooks/Context";
const Navbar = () => {

  const {show, navToggle} = useGlobalHook()

  return (
    <>
      <header className={show ? "show bg-secondery" : "bg-secondery"}>
        <div className="navbar-logo">
            <h1 className="text-green fs2-5">Port <span className="text-white">Folio</span></h1>
        </div>
        <nav>
          <ul className="navbar-list">
            <li>
                <NavLink to={"/"} className={"text-dark fs-1-5 navbar-link"}>TechStack</NavLink>
            </li>
            <li>
                <NavLink to={"/"} className={"text-dark fs-1-5 navbar-link"}>Projects</NavLink>
            </li>
            <li>
                <NavLink to={"/"} className={"text-dark fs-1-5 navbar-link"}>Testimonial</NavLink>
            </li>
            <li>
                <NavLink to={"/"} className={"text-dark fs-1-5 navbar-link"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <button onClick={navToggle}>
          <LiaBarsSolid />
        </button>
      </header>
    </>
  );
};

export default Navbar;
