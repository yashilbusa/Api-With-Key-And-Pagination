import express from 'express';
import db from './config/dbConnection.js'
import router from './routes/holidayRoutes.js'

db();

const app = express();
const port = process.env.port;

app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
});

app.get("/",(req,res)=>{
    res.send("Hello Yashil Busa From InnovateMR!!!")
});

app.use("/",router);