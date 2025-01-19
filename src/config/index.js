import dotenv from 'dotenv';

dotenv.config();

const { PORT, DB_URL, DB_DEV_URL, NODE_ENV, SECRET_KEY } = process.env;

export { PORT, DB_URL, DB_DEV_URL, NODE_ENV, SECRET_KEY };
