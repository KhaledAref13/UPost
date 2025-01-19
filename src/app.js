import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { PORT } from './config/index.js';
import { clientError, serverError } from './controllers/index.js';
import router from './routes/index.js';

const app = express();
app.set('port', PORT || 3000);

app.disable('x-powered-by');

app.use([express.json(), express.urlencoded({ extended: false }), cookieParser(), compression()]);

app.use('/api/v1/', router);

app.use(clientError);
app.use(serverError);

export default app;
