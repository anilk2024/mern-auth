import express from 'express';
import dotenv from 'dotenv';
import { notFound,errorHandler } from './middleware/errorMiddlleleware.js';
import connectDB from './config/db.js';
dotenv.config();
import userRoutes from './routes/userRoutes.js'
const port = process.env.PORT||5000;
connectDB();
const app=express();

app.use('/api/users',userRoutes);

app.get('/',(req,res)=>{
    res.send("Server is ready..");
});

app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
});