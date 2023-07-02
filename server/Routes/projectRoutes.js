import express from "express";
import {getProjects} from "../Controller/projectController.js";
const projectRouter = new express.Router();

projectRouter.get("/projects",getProjects)

export default  projectRouter;