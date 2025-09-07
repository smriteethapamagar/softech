import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './lib/mongoDb.js';
import contactRoutes from './routes/contact.route.js'
import inquiryRoutes from './routes/inquiry.route.js'
import blogRoutes from './routes/blogs.route.js'
import courseRoutes from './routes/course.route.js'
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors(
    {origin: ["http://localhost:5173"] }
));

app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.use('/api/contacts', contactRoutes)
app.use('/api/inquiries', inquiryRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/courses', courseRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});