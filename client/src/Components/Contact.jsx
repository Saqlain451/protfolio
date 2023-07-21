import { AiOutlineMail } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";
import { useState } from "react";
import { useGlobalHook } from "../Hooks/Context.jsx";
import axios from "axios";

const Contact = () => {
  const { api } = useGlobalHook();
  const [contactData, setContactData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/sendmail`, { ...contactData });
      if (res.status === 200) {
        console.log(res);
        setContactData({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section id="contact">
        <div className="p-10 grid-2 grid-sm-1 g-3 align-initial pr-md-5 pr-md-5 pl-sm-5 pr-sm-5">
          <div>
            <h1 className={"fs-5 fw-4"}>Get in touch</h1>
            <p className={"fs-2 text-dark lh-2 mt-8 mb-8"}>
              Drop me a line, give me a call, or send me a message by submitting
              the form.
            </p>
            <p className={"d-flex g-2 fs-1-5 text-dark mt-2"}>
              <span className={"fs-2 text-green mt-1"}>
                {" "}
                <AiOutlineMail />
              </span>{" "}
              jobs.sakil.mustak@gmail.com
            </p>
            <p className={"d-flex g-2 fs-1-5 text-dark mt-2"}>
              <span className={"fs-2 text-green mt-1"}>
                {" "}
                <IoCallSharp />
              </span>{" "}
              +91 6290760397
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="" className={"fs-1-5 fw-3"}>
              {" "}
              Name
            </label>
            <input
              type="text"
              name="name"
              className={"form-control text-dark"}
              value={contactData.name}
              onChange={changeHandle}
            />
            <label htmlFor="" className={"fs-1-5 fw-3 mt-5"}>
              {" "}
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className={"form-control text-dark"}
              value={contactData.subject}
              onChange={changeHandle}
            />

            <label htmlFor="" className={"fs-1-5 fw-3 mt-5"}>
              {" "}
              Email
            </label>
            <input
              type="email"
              name="email"
              className={"form-control text-dark"}
              value={contactData.email}
              onChange={changeHandle}
            />
            <label htmlFor="" className={"fs-1-5 fw-3 mt-5"}>
              {" "}
              Message
            </label>
            <textarea
              name="message"
              className={"form-control text-dark"}
              value={contactData.message}
              onChange={changeHandle}
            />

            <button className={"contact mt-5 fs-1-5"}>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
