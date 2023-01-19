import express from 'express';
import { registerValidation, loginValidation } from '../validators/validations.js';
import { addUser, loginUser, checkUser } from '../controllers/user-controller.js';
import checkAuth from '../utils/checkAuth.js';

const router = express.Router();

router.post('/user/register', registerValidation, addUser);
router.post('/user/login', loginValidation, loginUser);
router.get('/user/me', checkAuth, checkUser);

export default router
