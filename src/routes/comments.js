import { Router } from 'express';
import { createCommentController, deleteCommentController } from '../controllers/index.js';
import checkAuth from '../middlewares/index.js';

const commentsRouter = Router();

commentsRouter.use(checkAuth);
commentsRouter.post('/create/:id', createCommentController);
commentsRouter.delete('/delete/:id', deleteCommentController);

export default commentsRouter;
