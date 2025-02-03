import { Router } from 'express';
import { likesController } from '../controllers/index.js';
import checkAuth from '../middlewares/index.js';

const likesRouter = Router();

likesRouter.post('/:id', checkAuth, likesController);

export default likesRouter;
