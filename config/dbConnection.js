import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const db = async()=>{
    mongoose.connect(process.env.url)
        .then(() => {
            console.log('Connected to MongoDB');
            console.log(`Server is Running on http://localhost:${process.env.port}`)
        })
        .catch((err) => {
            console.error(`Error connecting to MongoDB : ${err}`);
        });
}

export default db