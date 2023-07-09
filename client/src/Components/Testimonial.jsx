import Title from "./Title.jsx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {responsive, testimonialData} from "../Hooks/Data.jsx";
import TestimonialCard from "./TestimonialCard.jsx";

const Testimonial = () => {
    const carouselConfig = {
        responsive: responsive,
        itemClass: 'carousel-item-padding-40-px', // Adjust the gap between items
        containerClass: 'carousel-container g-4',
        keyBoardControl:true,
        draggable:true,
        showDots : true,
    };
    return (
        <>
            <section id="testimonial">
                <div className="p-10">
                    <Title title={"TESTIMONIALS"}/>
                    <div className="pt-6">

                        <Carousel {...carouselConfig}>
                            {testimonialData.map((data) => {
                                const {name, role, des, img, id} = data
                                return (
                                    <TestimonialCard img={img} role={role} des={des} name={name} key={id}/>
                                )
                            })}

                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Testimonial;