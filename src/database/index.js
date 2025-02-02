import connection from './config/index.js';
import {
  getUserByEmailQuery,
  getUserByUsernameQuery,
  registerQuery,
  createPostQuery,
  getPostByIdQuery,
  deletePostQuery,
  getAllPostsQuery,
  getUserPostsQuery,
  createCommentQuery,
  getCommentByIdQuery,
  deleteCommentQuery,
} from './queries/index.js';

export {
  connection,
  getUserByEmailQuery,
  getUserByUsernameQuery,
  registerQuery,
  createPostQuery,
  getPostByIdQuery,
  deletePostQuery,
  getAllPostsQuery,
  getUserPostsQuery,
  createCommentQuery,
  getCommentByIdQuery,
  deleteCommentQuery,
};
