import { Router } from 'express';
import UserController from '../controllers/userController';

import usernameValidator from '../middlewares/usernameVerify';
import passwordValidator from '../middlewares/passwordVerify';
import classeValidator from '../middlewares/classeVerify';
import levelValidator from '../middlewares/levelVerify';

const router = Router();

const userController = new UserController();

router.post(
  '/users', 
  usernameValidator, 
  passwordValidator,
  classeValidator, 
  levelValidator, 
  userController.createUser,
);
export default router;