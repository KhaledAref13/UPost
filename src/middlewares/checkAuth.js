import { CustomError, verifyToken } from '../utils/index.js';

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) {
      throw new CustomError('Unauthenticated', 403);
    }
    const decoded = await verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};

export default checkAuth;
