import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import {RiFacebookBoxFill} from "react-icons/ri";

const Footer = () => {

    const curYear =new Date().getFullYear();
    return (
        <>
            <div className="pt-5 pb-5 p-10">
                <div className="d-flex space-between">
                    <h1 className={"d-flex text-green fs-3 g-0-5"}>Port <span className={"text-white"}>Folio</span></h1>
                    <div className="d-flex g-3">
                        <a href="https://github.com/Saqlain451" target={"_blank"}  className={"fs-2-8 text-secondary"}><AiFillGithub/></a>
                        <a href="https://www.linkedin.com/in/sakil-mustak-8680b8206/"  target={"_blank"} className={"fs-2-8 text-secondary"}><AiFillLinkedin/></a>
                        <a href=""  target={"_blank"} className={"fs-2-8 text-secondary"}><RiFacebookBoxFill/></a>
                        <a href="https://www.instagram.com/hydra_saqlain/"  target={"_blank"} className={"fs-2-8 text-secondary"}><AiFillInstagram/></a>
                        <a href="https://www.youtube.com/@js_wallah" target={"_blank"}  className={"fs-2-8 text-secondary"}><AiFillYoutube/></a>
                    </div>
                </div>
                <br/>
                <br/>
                <p className="b-secondery"></p>
                <br/>
                <br/>
                <p className={"text-dark fs-1 text-center"}>© {curYear} PortFolio. All rights reserved.</p>
            </div>
        </>
    )

}

export default Footer;