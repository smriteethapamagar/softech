import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './lib/mongoDb.js';
import contactRoutes from './routes/contact.route.js'
import inquiryRoutes from './routes/inquiry.route.js'

const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors(
    {origin: ["http://localhost:5173"] }
));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api/contact', contactRoutes)
app.use('/api/inquiry', inquiryRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});