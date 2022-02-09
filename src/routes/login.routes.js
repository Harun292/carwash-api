import { Router } from 'express';
import { getLoginValidator } from '../validations/login.validation.js';
import { loginUserController } from '../controllers/login.controller.js';
const router = Router();
router.post('/', getLoginValidator, loginUserController);

export default router;
