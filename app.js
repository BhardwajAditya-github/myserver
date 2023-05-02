import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import morgan from 'morgan'
import ejs from 'ejs'

dotenv.config()
connectDB()

const app = express()
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
    res.render("home");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on 3000`)
})