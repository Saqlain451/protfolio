
import {AiOutlineMail} from "react-icons/ai";
import {IoCallSharp} from "react-icons/io5";
import {useForm, ValidationError} from "@formspree/react";



const Contact = () => {

    const [state, handleSubmit] = useForm("xyyqypqq");
    if (state.succeeded) {
        return <p className={"text-center text-dark fs-2 pt-4 pb-4 "}>Thanks for joining with us!</p>;
    }


    return (
        <>
            <section id="contact">
                <div className="p-10 grid-2 grid-sm-1 g-3 align-initial pr-md-5 pr-md-5 pl-sm-5 pr-sm-5">
                    <div>
                        <h1 className={"fs-5 fw-4"}>Get in touch</h1>
                        <p className={"fs-2 text-dark lh-2 mt-8 mb-8"}>Drop me a line, give me a call, or send me a
                            message by submitting the form.</p>
                        <p className={"d-flex g-2 fs-1-5 text-dark mt-2"}><span
                            className={"fs-2 text-green mt-1"}> <AiOutlineMail/></span> jobs.sakil.mustak@gmail.com</p>
                        <p className={"d-flex g-2 fs-1-5 text-dark mt-2"}><span
                            className={"fs-2 text-green mt-1"}> <IoCallSharp/></span> +91 6290760397</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="" className={"fs-1-5 fw-3"}> Name</label>
                        <input
                            id="email"
                            type="text"
                            name="Name"
                            className={"form-control text-dark"}
                        />
                        <ValidationError
                            prefix="Name"
                            field="Name"
                            errors={state.errors}
                        />
                        <label htmlFor="" className={"fs-1-5 fw-3 mt-5"}> Email</label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            className={"form-control text-dark"}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                        <label htmlFor="" className={"fs-1-5 fw-3 mt-5"}> Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className = {"form-control text-dark"}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}

                        />

                        <button className={"contact mt-5 fs-1-5"}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;