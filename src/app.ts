import express from 'express';
import cors from 'cors';

import routes from './routes';
import connectMongo  from './service/connectMongo'

const app = express();

connectMongo();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;