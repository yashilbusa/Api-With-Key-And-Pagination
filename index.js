import express from 'express';
import db from './config/dbConnection.js'
import Holiday from './models/holiday.js'

db();

const app = express();

app.use(express.json());

