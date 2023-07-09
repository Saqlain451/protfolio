import React from 'react'
import Hero from '../Components/Hero'
import TechStack from "../Components/TechStack.jsx";
import Projects from "../Components/Projects.jsx";
import Testimonial from "../Components/Testimonial.jsx";
import Faq from "../Components/Faq.jsx";


const Home = () => {
    return (
        <>
            <Hero/>
            <TechStack/>
            <Projects/>
            <Testimonial/>
            <Faq/>
        </>
    )
}

export default Home