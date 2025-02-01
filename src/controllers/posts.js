import {
  createPostQuery,
  deletePostQuery,
  getPostByIdQuery,
  getAllPostsQuery,
  getUserPostsQuery,
  getUserByUsernameQuery,
} from '../database/index.js';

import { createPostSchema, CustomError, deletePostSchema } from '../utils/index.js';

const createPostController = async (req, res, next) => {
  if (!req.user) throw new CustomError('Unauthorized', 401);
  const userId = req.user.id;
  const { content } = req.body;
  try {
    await createPostSchema.validateAsync({ content }, { abortEarly: false });
    const { rows } = await createPostQuery({ userId, content });
    res.status(200).json({
      error: false,
      data: {
        message: 'Post Created Successfully',
        post: rows[0],
      },
    });
  } catch (err) {
    next(err);
  }
};
const deletePostController = async (req, res, next) => {
  if (!req.user) throw new CustomError('Unauthorized', 401);
  const { id } = req.params;
  const userId = req.user.id;
  try {
    await deletePostSchema.validateAsync({ id }, { abortEarly: false });
    const { rows, rowCount } = await getPostByIdQuery({ id });
    if (!rowCount) throw new CustomError('Post not found', 404);
    if (rows[0].user_id !== userId) throw new CustomError('Unauthorized', 401);
    const deletedPost = await deletePostQuery({ id });
    res.status(200).json({
      error: false,
      data: {
        message: 'Post Deleted Successfully',
        deletedPost: deletedPost.rows[0],
      },
    });
  } catch (err) {
    next(err);
  }
};
const getAllPostsController = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllPostsQuery();
    if (!rowCount) throw new CustomError('Posts not found', 404);
    res.status(200).json({
      error: false,
      data: {
        message: 'Success',
        posts: rows,
      },
    });
  } catch (err) {
    next(err);
  }
};
const getUserPostsController = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await getUserByUsernameQuery({ username });
    if (!user.rowCount) throw new CustomError('User not found', 404);
    const posts = await getUserPostsQuery({ username });
    if (!posts.rowCount) throw new CustomError('Posts not found', 404);
    res.status(200).json({
      error: false,
      data: {
        message: 'Success',
        posts: posts.rows,
      },
    });
  } catch (err) {
    next(err);
  }
};

export {
  createPostController,
  deletePostController,
  getAllPostsController,
  getUserPostsController,
};
