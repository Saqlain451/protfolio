import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    demo: {
        type: String,
        required: true
    },
    stack: {
        type: String,
        required: true
    }
})


const projects = new mongoose.model("project", projectSchema);

export default projects;