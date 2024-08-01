import cookieParser from 'cookie-parser';
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';


// Import all routes
import userRoutes from './routes/user.routes.js';
import taskRoutes from './routes/task.routes.js';



config();

const app = express();

// Middlewares
// Built-In
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Third-Party
app.use(
  cors({
    // origin: '*',
    // origin: process.env.FRONTEND_URL,
    origin: "https://trello-style-task-management-application-five.vercel.app",
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(cookieParser());

// Server Status Check Route
app.get('/ping', (_req, res) => {
  res.send('Pong');
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/tasks', taskRoutes);


// Default catch all route - 404
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!!! 404 Page Not Found');
});

// Custom error handling middleware
app.use(errorMiddleware);

export default app;
