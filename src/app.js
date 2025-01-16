import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { PORT } from './config/index.js';
import { clientError, serverError } from './controllers/index.js';

const app = express();
app.set('port', PORT || 3000);

app.disable('x-powered-by');

app.use([express.json(), express.urlencoded({ extended: false }), cookieParser(), compression()]);

app.get('/', (req, res) => {
  res.json({ msg: '🚀 Hello World!' });
});

app.use(clientError);
app.use(serverError);

export default app;
