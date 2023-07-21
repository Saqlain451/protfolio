import mongoose from "mongoose";

const mailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})

const Mail = new mongoose.model("mail", mailSchema);
export default Mail;