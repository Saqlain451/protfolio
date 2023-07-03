import express from "express";
import {createProject, getProjects} from "../Controller/projectController.js";

const projectRouter = new express.Router();

// create a new project---->
projectRouter.post("/addProject", createProject)

projectRouter.get("/allProjects", getProjects);

export default projectRouter;