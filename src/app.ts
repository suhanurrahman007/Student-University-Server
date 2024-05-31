import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send("Server is Running.....");
};

app.get('/', getAController);

export default app;
