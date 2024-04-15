import express from 'express';
import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';
import OpenAI from "openai";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.API_KEY
});

router.route('/').get((req,res) => {
    return res.status(200).json({ message: "Hello from DALL.E ROUTES" });
})

router.route('/').post(async (req,res) => {
    try {
        const { prompt } = req.body;
        const response = await openai.createImage({
            prompt,
            n: 1, 
            size: '1024x1024',
            response_format: 'b64_json'
        })

        const image = response.data.data[0].b64_json;
        return res.status(200).json({ photo: image })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
})

export default router;