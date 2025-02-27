import express from 'express';

const router = express.Router();
import holidayRoute from '../controllers/holidayController.js'
    
router.post("/",holidayRoute.postData);
router.get("/getAll",holidayRoute.findAll);

export default router;