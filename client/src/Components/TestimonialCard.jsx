import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const TestimonialCard = ({img,name,role,des}) => {
    return (
        <>
            <div className="testimonial-card bg-secondery b-secondery">
                <div className="card-img">
                    <img src={img} alt="photo" className={"img-fluid img-circle"}/>
                </div>
                <div className="card-content mt-5">
                    <p className={"fs-1-5 text-dark lh-2"}>
                        {des}
                    </p>
                    <div className={"d-flex space-between mt-5 bg-secondery p-5"}>
                        <div>
                            <p className={"fs-1-5 fw-6"}>{name}</p>
                            <p className={"fs-1 mt-5"}>{role}</p>
                        </div>
                        <div className={"d-flex center fs-2 text-green"}>
                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TestimonialCard;