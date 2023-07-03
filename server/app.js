import express from 'express';
import dotenv from 'dotenv';
import projectRouter from "./Routes/projectRoutes.js";
import mongoConnect from "./Db/Connect.js";
import cors from 'cors'

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
mongoConnect();
app.use(projectRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`The server is running at port ${port}`)
})
