import { getUserByEmailQuery, getUserByUsernameQuery, registerQuery } from '../database/index.js';
import {
  CustomError,
  hashPassword,
  comparePassword,
  registerSchema,
  loginSchema,
  signToken,
} from '../utils/index.js';

const registerController = async (req, res, next) => {
  const { fullName, email, username, password, confirmPassword } = req.body;
  try {
    await registerSchema.validateAsync(
      { fullName, email, username, password, confirmPassword },
      { abortEarly: false }
    );
    const userByEmail = await getUserByEmailQuery({ email });
    if (userByEmail.rows.length) {
      throw new CustomError('Email is already in use', 409);
    }
    const userByUsername = await getUserByUsernameQuery({ username });
    if (userByUsername.rows.length) {
      throw new CustomError('Username is already in use', 409);
    }
    const hashedPassword = await hashPassword(password);
    const user = await registerQuery({ fullName, email, username, hashedPassword });
    const token = await signToken(user.rows[0], {
      expiresIn: '1d',
    });
    res
      .status(200)
      .cookie('token', token, {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        error: false,
        data: {
          message: 'Registered Successfully',
          user: {
            id: user.rows[0].id,
            fullName: user.rows[0].full_name,
            email: user.rows[0].email,
            username: user.rows[0].username,
          },
        },
      });
  } catch (err) {
    next(err);
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await loginSchema.validateAsync({ email, password }, { abortEarly: false });
    const userByEmail = await getUserByEmailQuery({ email });
    if (!userByEmail.rows.length) {
      throw new CustomError('Invalid email or password', 409);
    }
    const checkPassword = await comparePassword(password, userByEmail.rows[0].password);
    if (!checkPassword) {
      throw new CustomError('Invalid email or password', 409);
    }
    const token = await signToken(
      {
        id: userByEmail.rows[0].id,
        full_name: userByEmail.rows[0].full_name,
        username: userByEmail.rows[0].username,
        email: userByEmail.rows[0].email,
      },
      {
        expiresIn: '1d',
      }
    );
    res
      .status(200)
      .cookie('token', token, {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        error: false,
        data: {
          message: 'Logged In Successfully',
          user: {
            id: userByEmail.rows[0].id,
            fullName: userByEmail.rows[0].full_name,
            email: userByEmail.rows[0].email,
            username: userByEmail.rows[0].username,
          },
        },
      });
  } catch (err) {
    next(err);
  }
};

const logoutController = (req, res, next) => {
  try {
    res.clearCookie('token').json({ message: 'Logged Out Successfully' });
  } catch (err) {
    next(err);
  }
};

export { registerController, loginController, logoutController };
