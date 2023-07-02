import projects from "../Model/ProjectModel.js";

const getProjects = async (req, res)=>{
    try {
        const allProjects = await projects.find({});
        res.status(201).json({success : allProjects});
    }catch (error){
        console.log(error)
        res.status(401).json({err : "No Data Found"})
    }
}

export {getProjects};