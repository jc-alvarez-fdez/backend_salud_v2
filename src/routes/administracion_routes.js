// src/routes/administracion_routes.js
import { Router } from 'express';
import { getAdministraciones, getAdministracionById, addAdministracion, updateAdministracion, deleteAdministracion } from "../controllers/administracion_controller.js";
import authenticateToken from '../middlewares/authenticate_token.js';
import { administracionValidator } from '../validations/administracion_validation.js';
import { idValidator } from '../validations/generic_validation.js'

const administracionesRouter = Router();

// Rutas para crud de administraciones
administracionesRouter.get('/', authenticateToken, getAdministraciones); //devuelve todos los administraciones
administracionesRouter.get('/:id', authenticateToken, idValidator, getAdministracionById); //devuelve administracion por id
administracionesRouter.post('/', authenticateToken, administracionValidator, addAdministracion); // añade administracion
administracionesRouter.put('/:id', authenticateToken, idValidator, administracionValidator, updateAdministracion); // actualiza administracion
administracionesRouter.delete('/:id', authenticateToken, idValidator, deleteAdministracion); // elimina administracion por id

export default administracionesRouter; 