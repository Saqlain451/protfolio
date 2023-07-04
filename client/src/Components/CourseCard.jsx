import {BiLogoGithub} from 'react-icons/bi'
import {MdOutlineOpenInNew} from 'react-icons/md'

const CourseCard = ({image,name,github,demo,stack}) => {
    return (
        <>
            <div className="course-card">
                <br/>
                <div className="course-img">
                    <img
                        src={image}
                        alt="Calcultor" className="img-fluid img-circle"/>
                </div>

                <div className="course-content">
                    <div className="d-flex space-between g-1">
                        <h1 className={"lh-2 text-dark"}>{name}</h1>
                        <div className="d-flex g-0-5">
                            <a href={github} target={"_blank"}
                               className={"d-flex center"}><BiLogoGithub/> </a>
                            <a href={demo} target={"_blank"}
                               className={"d-flex center"}><MdOutlineOpenInNew/></a>
                        </div>
                    </div>
                    <p className={"text-green mt-3"}>{stack}</p>
                </div>
            </div>
        </>
    )

}

export default CourseCard;