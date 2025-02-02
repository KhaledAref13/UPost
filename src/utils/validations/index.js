import { registerSchema, loginSchema } from './auth.js';
import { createPostSchema, deletePostSchema } from './posts.js';
import { createCommentSchema, checkIdSchema } from './comments.js';

export {
  registerSchema,
  loginSchema,
  createPostSchema,
  deletePostSchema,
  createCommentSchema,
  checkIdSchema,
};
