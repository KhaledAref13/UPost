import { Router } from 'express';
import { getUserProfileController } from '../controllers/index.js';

const profileRouter = Router();

profileRouter.get('/:username', getUserProfileController);

export default profileRouter;
