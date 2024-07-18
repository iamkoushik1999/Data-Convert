import express from 'express';
import 'dotenv/config';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// Database
import connectDB from './connection/database.js';
connectDB();

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors('*'));

export default app;
