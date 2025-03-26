import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { PORT } from './config/index.js';
import { clientError, serverError } from './controllers/index.js';
import router from './routes/index.js';

const app = express();
app.set('port', PORT || 3000);
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  })
);
app.disable('x-powered-by');
app.use([express.json(), express.urlencoded({ extended: false }), cookieParser(), compression()]);

app.get('/api/v1/sayhello', (req, res) => {
  res.status(200).json({ msg: 'Hello World!.' });
});
app.use('/api/v1/', router);

app.use(clientError);
app.use(serverError);

export default app;
