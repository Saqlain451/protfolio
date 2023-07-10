import {useState} from 'react';
import {AiOutlineMail} from "react-icons/ai";
import {IoCallSharp} from "react-icons/io5";


const Contact = () => {
    const [inpData, setInpData] = useState({
        name: "",
        mail: "",
        msg: "",
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInpData({...inpData, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <section id="contact">
                <div className="p-10 grid-2 grid-sm-1 g-3 align-initial">
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
                        <input type="text" name="name" value={inpData.name} onChange={handleChange}
                               className={"form-control text-dark"}/>

                        <label htmlFor="" className={"fs-1-5 fw-3 mt-5"}> Email</label>
                        <input type="text" name="mail" value={inpData.mail} onChange={handleChange}
                               className={"form-control text-dark"}/>

                        <label htmlFor="" className={"fs-1-5 fw-3 mt-5"}> Message</label>
                        <textarea name="msg" cols="30" rows="10" value={inpData.msg} onChange={handleChange}
                                  className={"form-control text-dark"}></textarea>

                        <button className={"contact mt-5 fs-1-5"}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;