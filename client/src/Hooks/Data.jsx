import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJavascript, BiLogoMongodb, BiLogoReact} from 'react-icons/bi'
import {FaBootstrap, FaNode} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'

const tectStackData = [
    {
        name: "HTML",
        icon: <AiFillHtml5/>
    }, {
        name: "CSS",
        icon: <BiLogoCss3/>
    }, {
        name: "BootStrap",
        icon: <FaBootstrap/>
    }, {
        name: "JavaScript",
        icon: <BiLogoJavascript/>
    }, {
        name: "React Js",
        icon: <BiLogoReact/>
    }, {
        name: "Node Js",
        icon: <FaNode/>
    }, {
        name: "MongoDB",
        icon: <BiLogoMongodb/>
    }, {
        name: "Express JS",
        icon: <SiExpress/>
    },
]

const testimonialData = [
    {
        id: 1,
        img: "https://i.postimg.cc/GmxvR1J1/biplab.jpg",
        name: "Biplab Shrama",
        role: "Backend Developer",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore enim incidunt non numquam, provident sint soluta tempora.A amet deserunt, dolor fugiat non officiis rem repellat veniam? Accusamus, placeat."
    },
    {
        id: 2,
        img: "https://i.postimg.cc/2SXqx8CT/jyoti.jpg",
        name: "Jyoti Sharma",
        role: "Game Developer",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore enim incidunt non numquam, provident sint soluta tempora.A amet deserunt, dolor fugiat non officiis rem repellat veniam? Accusamus, placeat."
    },
    {
        id: 3,
        img: "https://assets.website-files.com/63f3212748a58b8bb6c65a69/63ff4cb11421c26c68095023_Ellipse%203.png",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore enim incidunt non numquam, provident sint soluta tempora.A amet deserunt, dolor fugiat non officiis rem repellat veniam? Accusamus, placeat.",
        name: "Esther Hovered",
        role: "Gamer",
    }, {
        id: 4,
        img: "https://assets.website-files.com/63f3212748a58b8bb6c65a69/63ff4c84e55eb62d644c2073_Ellipse%203-2.png",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore enim incidunt non numquam, provident sint soluta tempora.A amet deserunt, dolor fugiat non officiis rem repellat veniam? Accusamus, placeat.",
        name: "Esther Hovered",
        role: "Client",
    },
    {
        id: 5,
        img: "https://media.licdn.com/dms/image/C5103AQFrdqFZ5F0QWQ/profile-displayphoto-shrink_100_100/0/1516802470571?e=1691020800&v=beta&t=EF5Y6I34-JiNkiZBvh1fS8lO-QF0JycDTZWVOPDbepg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore enim incidunt non numquam, provident sint soluta tempora.A amet deserunt, dolor fugiat non officiis rem repellat veniam? Accusamus, placeat.",
        name: "John Thomas",
        role: "Tech Trainer",
    }
]


const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 4
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

const qna = [
    {
        id: 1,
        question: "What technologies do you specialize in?",
        ans: "I specialize in React.js for front-end development, Node.js for server-side development, and MongoDB for database management.",
    },
    {
        id: 2,
        question: "How do you approach front-end development using React.js?",
        ans: "When working with React.js, I follow a component-based approach to build reusable and modular UI elements. I leverage the power of React's virtual DOM to create dynamic and responsive user interfaces. I also make use of state management libraries like Context API to manage application state effectively.",
    },
    {
        id: 3,
        question: "What experience do you have with back-end development using Node.js?",
        ans: "I have experience with Node.js for building server-side logic and RESTful APIs. I have implemented features like authentication, data validation, and database integration using Node.js. I am also familiar with Express.js, a popular web application framework for Node.js.",
    },
    {
        id: 4,
        question: "Have you worked with databases in your projects",
        ans: "Yes, I have worked extensively with MongoDB, a NoSQL database, in my projects. I have designed schemas, created models, and performed CRUD operations using the Mongoose library. I also have experience with basic database optimization techniques to ensure efficient data retrieval and storage.",
    },
    {
        id: 5,
        question: "Can you provide examples of projects you have worked on",
        ans: "Certainly! Some of the projects I have worked on include a E-learning site, Project Management. You can find more details and live demos of these projects in the portfolio section.",
    },
]

export {tectStackData, responsive, testimonialData,qna};