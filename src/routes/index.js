import { Router } from 'express';
import authRouter from './auth.js';
import postsRouter from './posts.js';
import commentsRouter from './comments.js';
import profileRouter from './profile.js';
import likesRouter from './likes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);
router.use('/profile', profileRouter);
router.use('/likes', likesRouter);

export default router;
