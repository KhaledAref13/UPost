import Joi from 'joi';

const createCommentSchema = Joi.object({
  content: Joi.string().required().min(1).messages({
    'string.empty': 'Content cannot be empty',
    'string.min': 'Content should have a minimum length of 1',
    'any.required': 'Content is required',
  }),
});

const checkIdSchema = Joi.object({
  id: Joi.number().required().messages({
    'number.base': 'Post id must be a number',
    'number.empty': 'Post id cannot be empty',
    'any.required': 'Post id is required',
  }),
});

export { createCommentSchema, checkIdSchema };
