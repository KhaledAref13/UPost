import { checkIdSchema, CustomError } from '../utils/index.js';
import {
  checkLikeQuery,
  getPostByIdQuery,
  addLikeQuery,
  removeLikeQuery,
} from '../database/index.js';

const likesController = async (req, res, next) => {
  if (!req.user) throw new CustomError('Unauthorized', 401);
  const { id } = req.params;
  const userId = req.user.id;
  try {
    await checkIdSchema.validateAsync({ id }, { abortEarly: false });
    const postById = await getPostByIdQuery({ id });
    if (!postById.rowCount) throw new CustomError('Post not found', 404);
    const { rowCount } = await checkLikeQuery({ userId, postId: id });
    if (!rowCount) {
      await addLikeQuery({ userId, postId: id });
      return res.status(200).json({
        error: false,
        data: {
          message: 'Like added successfully',
        },
      });
    }
    await removeLikeQuery({ userId, postId: id });
    return res.status(200).json({
      error: false,
      data: {
        message: 'Like removed successfully',
      },
    });
  } catch (err) {
    next(err);
  }
};

export default likesController;
