import dotenv from "dotenv";
import { Resend } from "resend";
import Mail from "../Model/MailModel.js";

dotenv.config();
const resend = new Resend(process.env.API_KEY);
const sendMail = async (req, res) => {
  const { name, subject, mail, message } = req.body;
  try {
    const mailOption = {
      from: "onboarding@resend.dev",
      to: "saqlainmustaq783@gmail.com",
      subject,
      html: `<strong>Name : </strong> ${name} 
                <br>
            <strong>Mail id :</strong> ${mail} 
                <br>
            <strong>Message :</strong> ${message}`,
    };
    await resend.emails.send(mailOption);
    res.status(201).json("Your massage is sent");
    const newMailData = new Mail({ ...req.body });
    await newMailData.save();
  } catch (error) {
    console.error(error);
    res.status(401).json("Mail not sent");
  }
};

export default sendMail;
