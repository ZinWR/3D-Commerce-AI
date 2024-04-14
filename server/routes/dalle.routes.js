import express from 'express';
import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';
import OpenAI from "openai";

const openai = new OpenAI();

dotenv.config();
const router = express.Router();

router.route('/').get((req,res) => {
    return res.status(200).json({ message: "Hello from DALL.E ROUTES" });
})

export default router;