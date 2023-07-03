import projects from "../Model/ProjectModel.js";


const createProject = async (req, res) => {
    try {
        const exitProject = await projects.findOne({name: req.body.name, stack: req.body.stack})
        if (exitProject) {
            res.status(501).json({err: "Project is already added"})
        } else {
            const newProject = new projects({...req.body});
            await newProject.save();
            res.status(201).json({msg: "Project added"})
        }
    } catch (err) {
        res.status(401).json({err: "Project not added"})
        console.log(err)
    }
}
const getProjects = async (req, res) => {
    try {
        const allProjects = await projects.find({});
        res.status(201).json({success: allProjects});
    } catch (error) {
        res.status(401).json({err: "No Data Found"})
    }
}

export {createProject,getProjects};