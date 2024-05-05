// src/routes/authRoutes.js
import { Router } from 'express';
import { register, login, logout, forgotPassword, changePassword } from '../controllers/auth_controller.js';
import { registerValidator, loginValidator, forgotPasswordValidator, changePasswordValidator } from '../validations/auth_validation.js'

const authRouter = Router();

// Rutas para registrarse e iniciar sesión
authRouter.post('/register', registerValidator, register);
authRouter.post('/login', loginValidator, login);
authRouter.post('/forgot-password', forgotPasswordValidator, forgotPassword);
authRouter.post('/change-password', changePasswordValidator, changePassword);
authRouter.get('/logout', logout);

export default authRouter;
