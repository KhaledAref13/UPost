import { getUserByUsernameQuery } from '../database/index.js';
import { CustomError } from '../utils/index.js';

const getUserProfileController = async (req, res, next) => {
  const { username } = req.params;
  try {
    const { rows, rowCount } = await getUserByUsernameQuery({ username });
    if (!rowCount) throw new CustomError('User not found', 404);
    res.status(200).json({
      error: false,
      data: {
        message: 'User returned successfully',
        user: {
          id: rows[0].id,
          full_name: rows[0].full_name,
          username: rows[0].username,
          email: rows[0].email,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export default getUserProfileController;
