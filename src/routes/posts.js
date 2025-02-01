import { Router } from 'express';
import {
  createPostController,
  deletePostController,
  getAllPostsController,
  getUserPostsController,
} from '../controllers/index.js';
import checkAuth from '../middlewares/index.js';

const postsRouter = Router();

postsRouter.post('/create', checkAuth, createPostController);
postsRouter.delete('/delete/:id', checkAuth, deletePostController);
postsRouter.get('/getallposts', getAllPostsController);
postsRouter.get('/getuserposts/:username', getUserPostsController);

export default postsRouter;
