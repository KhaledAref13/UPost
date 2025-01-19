import joi from 'joi';
import jwt from 'jsonwebtoken';
import { CustomError } from '../utils/index.js';

const { ValidationError } = joi;
const { JsonWebTokenError } = jwt;

const clientError = (req, res, next) => {
  res.status(404).json({
    error: true,
    data: {
      msg: 'The requested resource was not found on this server',
    },
  });
};

const serverError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(422).json({
      error: true,
      data: {
        msg: 'Validation error',
        errors: err.details,
      },
    });
  }
  if (err instanceof JsonWebTokenError) {
    return res
      .status(401)
      .clearCookie('token')
      .json({
        error: true,
        data: {
          msg: 'Invalid token',
        },
      });
  }
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      error: true,
      data: {
        errors: err.message,
      },
    });
  }
  return res.status(500).json({
    error: true,
    data: {
      msg: 'Internal Server Error',
    },
  });
};

export { clientError, serverError };
