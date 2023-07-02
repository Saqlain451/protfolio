import {BiLogoGithub} from 'react-icons/bi'
import {MdOutlineOpenInNew} from 'react-icons/md'

const CourseCard = () => {
    return (
        <>
            <div className="course-card">
                <br/><br/>
                <div className="course-img">
                    <img
                        src="https://user-images.githubusercontent.com/39196039/40139639-27db8c64-596e-11e8-9537-04a5b5d07170.jpg"
                        alt="Calcultor" className="img-fluid img-circle"/>
                </div>
                <br/>
                <div className="course-content">
                    <div className="d-flex space-between">
                        <h1>Simple Calculator</h1>
                        <div className="d-flex g-0-5">
                            <a href="https://github.com/Saqlain451/food-recipe" target={"_blank"}
                               className={"d-flex center"}><BiLogoGithub/> </a>
                            <a href="https://saqlain-recipe.netlify.app/" target={"_blank"}
                               className={"d-flex center"}><MdOutlineOpenInNew/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CourseCard;