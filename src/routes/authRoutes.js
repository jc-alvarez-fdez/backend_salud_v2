// src/routes/authRoutes.js
import { Router } from 'express';
import { register, login, logout, forgotPassword, changePassword } from '../controllers/authController.js';
import { registerValidator, loginValidator, forgotPasswordValidator, changePasswordValidator } from '../validations/auth.Validation.js'

const routerAuth = Router();

// Rutas para registrarse e iniciar sesión
routerAuth.post('/register', registerValidator, register);
routerAuth.post('/login', loginValidator, login);
routerAuth.post('/forgot-password', forgotPasswordValidator, forgotPassword);
routerAuth.post('/change-password', changePasswordValidator, changePassword);
routerAuth.get('/logout', logout);

export default routerAuth;
