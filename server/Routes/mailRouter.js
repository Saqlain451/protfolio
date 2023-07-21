import sendMail from "../Controller/mailController.js";
import {Router} from "express";
const mailRouter = Router();

mailRouter.post("/sendmail", sendMail);
export default mailRouter;