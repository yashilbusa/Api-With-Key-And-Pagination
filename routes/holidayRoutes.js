import express from 'express';

const router = express.Router();
import holidayRoute from '../controller/holidayController.js'
    
router.post("/",holidayRoute.postData());
router.get("/",holidayRoute.findAll());

export default router;