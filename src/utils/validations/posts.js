import Joi from 'joi';

const createPostSchema = Joi.object({
  content: Joi.string().required().min(1).messages({
    'string.empty': 'Content cannot be empty',
    'string.min': 'Content should have a minimum length of 1',
    'any.required': 'Content is required',
  }),
});

const deletePostSchema = Joi.object({
  id: Joi.number().required().messages({
    'number.base': 'Post id must be a number',
    'number.empty': 'Post id cannot be empty',
    'any.required': 'Post id is required',
  }),
});

export { createPostSchema, deletePostSchema };
