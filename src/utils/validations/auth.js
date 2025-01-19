import Joi from 'joi';

const registerSchema = Joi.object({
  fullName: Joi.string().required().min(3).max(50).messages({
    'string.empty': 'Full name cannot be empty',
    'string.min': 'Full name should have a minimum length of 3',
    'string.max': 'Full name should have a maximum length of 50',
    'any.required': 'Full name is required',
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required',
    }),
  username: Joi.string().required().min(3).max(50).messages({
    'string.empty': 'Username cannot be empty',
    'string.min': 'Username should have a minimum length of 3',
    'string.max': 'Username should have a maximum length of 50',
    'any.required': 'Username is required',
  }),
  password: Joi.string()
    .required()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/)
    .messages({
      'string.pattern.base':
        'Password must include at least one lowercase letter, one uppercase letter, one number, and one special character',
      'string.min': 'Password must be at least 8 characters long',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required',
    }),
  confirmPassword: Joi.ref('password'),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required',
    }),
  password: Joi.string()
    .required()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/)
    .messages({
      'string.pattern.base':
        'Password must include at least one lowercase letter, one uppercase letter, one number, and one special character',
      'string.min': 'Password must be at least 8 characters long',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required',
    }),
});

export { registerSchema, loginSchema };
