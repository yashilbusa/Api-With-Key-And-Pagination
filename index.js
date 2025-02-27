import express from 'express';
import db from './config/dbConnection.js'
import router from './routes/holidayRoutes.js'

db();

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello Yashil Busa From InnovateMR!!!")
})

app.use("/",router);