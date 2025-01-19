import { Router } from 'express';
import { registerController, loginController, logoutController } from '../controllers/index.js';
import checkAuth from '../middlewares/index.js';

const authRouter = Router();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.use(checkAuth);
authRouter.get('/logout', logoutController);

export default authRouter;
