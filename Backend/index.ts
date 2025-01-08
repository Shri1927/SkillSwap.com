import mongoose from "mongoose"
import express from 'express';
import cors from 'cors';
import userRouter from './routes/user'
import skillRouter from './routes/skill'

const app = express();
const port = 8082;

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/skill', skillRouter);

const DB_URL =  "mongodb://localhost:27017/SkillSwap"
mongoose.connect(DB_URL);
console.log("connected");

app.listen(port , () => {
    console.log("sun rha behara nhi hun mai!!");
});







