import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config/index.js';
const signToken = async (payload, options) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, { ...options }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });

export default signToken;
