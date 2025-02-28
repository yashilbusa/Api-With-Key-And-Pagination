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
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h1>Hello Yashil Busa From InnovateMR!!!</h1>")
});

app.use("/",router);