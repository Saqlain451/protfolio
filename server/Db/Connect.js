import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config()
const mongoUri = process.env.MONGO_URI;

const mongoConnect = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log("MongoDB Connected");
    } catch (e) {
        console.log("MongoDB is not connected")
    }
}

export default mongoConnect;