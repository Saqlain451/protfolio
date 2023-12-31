import Title from "./Title.jsx";
import {qna} from "../Hooks/Data.jsx";
import FaqComp from "./FaqComp.jsx";


const Faq = () => {


    return (<>
        <section id="faq">
            <div className="p-10 pr-md-5 pr-md-5 pl-sm-5 pr-sm-5">
                <Title title={"FAQS"}/>
                <div className={"pt-5"}>
                    {qna.map((ele) => {
                        const {question, ans, id} = ele
                        return (
                            <FaqComp ques={question} ans={ans} key={id}/>
                        )
                    })}
                </div>
            </div>
        </section>
    </>)

}

export default Faq;