import { Router } from 'express';
import authRouter from './auth.js';
import postsRouter from './posts.js';
import commentsRouter from './comments.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter)

export default router;
