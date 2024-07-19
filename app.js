import express from 'express';
import 'dotenv/config';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// Database
import connectDB from './connection/database.js';
connectDB();
// Error Middleware
import { errorHandler } from './middlewares/errorMiddleware.js';

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors('*'));

app.use(errorHandler);

export default app;
