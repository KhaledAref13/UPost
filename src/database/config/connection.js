import { Pool } from 'pg';

import { DB_URL, DB_DEV_URL, NODE_ENV } from '../../config/index.js';

const options = {
  connectionString: NODE_ENV === 'production' ? DB_URL : DB_DEV_URL,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const connection = new Pool(options);

export default connection;
