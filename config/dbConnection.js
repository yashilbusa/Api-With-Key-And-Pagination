import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const db = async()=>{
    mongoose.connect(process.env.mongoUrl)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error(`Error connecting to MongoDB : ${err}`);
        });
}

export default db;