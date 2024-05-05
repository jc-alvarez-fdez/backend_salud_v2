// src/routes/userRoutes.js
import { Router } from 'express';
import { getMisMedicamentos, getMiMedicamentoById, addMiMedicamento, updateMiMedicamento, deleteMiMedicamento } from '../controllers/mi_medicamento_controller.js';
import authenticateToken from '../middlewares/authenticate_token.js';
import { miMedicamentoValidator } from '../validations/mi_medicamento_validation.js';
import { idValidator } from '../validations/generic_validation.js'

const miMedicamentoRouter = Router();

// Rutas para obtener y modificar los datos de los usuarios
miMedicamentoRouter.get('/', authenticateToken, getMisMedicamentos);
miMedicamentoRouter.get('/:id', authenticateToken, idValidator, getMiMedicamentoById);
miMedicamentoRouter.post('/', authenticateToken, miMedicamentoValidator, addMiMedicamento);
miMedicamentoRouter.put('/:id', authenticateToken, idValidator, miMedicamentoValidator, updateMiMedicamento);
miMedicamentoRouter.delete('/:id', authenticateToken, idValidator, deleteMiMedicamento);

export default miMedicamentoRouter;
