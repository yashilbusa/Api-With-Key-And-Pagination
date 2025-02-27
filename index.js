import express from 'express';
import db from './config/dbConnection.js'
import router from '../routes/holidayRoutes.js'

db();

const app = express();

app.use(express.json());

app.use("/",router);