import express from 'express';

const router = express.Router();
import holidayRoute from '../controller/holidayController.js'
    
router.post("/",holidayRoute.create());
router.get("/",holidayRoute.findAll());

export default router;