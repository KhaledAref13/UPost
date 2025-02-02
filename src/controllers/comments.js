import {
  createCommentQuery,
  deleteCommentQuery,
  getCommentByIdQuery,
  getPostByIdQuery,
} from '../database/index.js';
import { checkIdSchema, createCommentSchema, CustomError } from '../utils/index.js';

const createCommentController = async (req, res, next) => {
  if (!req.user) throw new CustomError('Unauthorized', 401);
  const postId = req.params.id;
  const userId = req.user.id;
  const { content } = req.body;
  try {
    await checkIdSchema.validateAsync({ id: postId });
    const postById = await getPostByIdQuery({ id: postId });
    if (!postById.rowCount) throw new CustomError('Post not found', 404);
    await createCommentSchema.validateAsync({ content }, { abortEarly: false });
    const { rows } = await createCommentQuery({ postId, userId, content });
    res.status(200).json({
      error: false,
      data: {
        message: 'Comment Created Successfully',
        comment: rows[0],
      },
    });
  } catch (err) {
    next(err);
  }
};
const deleteCommentController = async (req, res, next) => {
  if (!req.user) throw new CustomError('Unauthorized', 401);
  const commentId = req.params.id;
  const userId = req.user.id;
  try {
    await checkIdSchema.validateAsync({ id: commentId });
    const commentById = await getCommentByIdQuery({ id: commentId });
    if (!commentById.rowCount) throw new CustomError('Comment not found', 404);
    if (commentById.rows[0].user_id !== userId) throw new CustomError('Unauthorized', 401);
    const deletedComment = await deleteCommentQuery({ id: commentId });
    res.status(200).json({
      error: false,
      data: {
        message: 'Comment Deleted Successfully',
        deletedComment: deletedComment.rows[0],
      },
    });
  } catch (err) {
    next(err);
  }
};

export { createCommentController, deleteCommentController };
